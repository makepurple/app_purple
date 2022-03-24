import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables,
	GetUserOverviewDocument,
	GetUserOverviewQuery,
	GetUserOverviewQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const session = await getSession(ctx);

	const userName = query.userName as string;

	const [user] = await NextUtils.concurrent([
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: query.userName as string }
			)
			.toPromise()
			.then((result) => result.data?.user),
		urqlClient
			.query<GetUserOverviewQuery, GetUserOverviewQueryVariables>(GetUserOverviewDocument, {
				name: userName
			})
			.toPromise(),
		!!session &&
			urqlClient
				.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
				.toPromise()
	]);

	if (!user) return { notFound: true };

	return addUrqlState(ssr, {
		props: { session }
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
