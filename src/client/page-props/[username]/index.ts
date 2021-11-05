import {
	addUrqlState,
	createUrqlClient,
	GetMyUserDocument,
	GetMyUserQuery,
	GetMyUserQueryVariables,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetPostsDocument,
	GetPostsQuery,
	GetPostsQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "@/client/graphql";
import { NextUtils } from "@/utils";
import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/client";
import { ssrExchange } from "urql";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		urqlClient
			.query<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {
				first: BATCH_SIZE,
				where: {
					author: {
						name: {
							equals: query.username as string
						}
					}
				},
				after: null
			})
			.toPromise(),
		urqlClient
			.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
			.toPromise(),
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: query.username as string }
			)
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
