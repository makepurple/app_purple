import {
	addUrqlState,
	createUrqlClient,
	GetMyUserDocument,
	GetMyUserQuery,
	GetMyUserQueryVariables,
	GetPostDocument,
	GetPostQuery,
	GetPostQueryVariables
} from "@/client/graphql";
import { NextUtils } from "@/utils";
import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		urqlClient
			.query<GetPostQuery, GetPostQueryVariables>(GetPostDocument, {
				where: {
					authorName_urlSlug: {
						authorName: query.userName as string,
						urlSlug: "draft"
					}
				}
			})
			.toPromise(),
		urqlClient.query<GetMyUserQuery, GetMyUserQueryVariables>(GetMyUserDocument).toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
