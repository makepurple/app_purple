import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetMyUserDocument,
	GetMyUserQuery,
	GetMyUserQueryVariables,
	GetPostDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		urqlClient
			.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDocument)
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
