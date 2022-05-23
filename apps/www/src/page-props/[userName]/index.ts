import ms from "ms";
import { InferGetServerSidePropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetUserGitHubContributionsDocument,
	GetUserGitHubContributionsQuery,
	GetUserGitHubContributionsQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables,
	GetUserOverviewDocument,
	GetUserOverviewQuery,
	GetUserOverviewQueryVariables,
	GetUserTrophiesDocument,
	GetUserTrophiesQuery,
	GetUserTrophiesQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

export const pageProps = NextUtils.castStaticProps(async (ctx) => {
	const { params } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ isStatic: true, ssr });

	const userName = params?.userName as string;

	const [user] = await NextUtils.concurrent([
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: params?.userName as string }
			)
			.toPromise()
			.then((result) => result.data?.user),
		urqlClient
			.query<GetUserGitHubContributionsQuery, GetUserGitHubContributionsQueryVariables>(
				GetUserGitHubContributionsDocument,
				{ name: userName }
			)
			.toPromise(),
		urqlClient
			.query<GetUserTrophiesQuery, GetUserTrophiesQueryVariables>(GetUserTrophiesDocument, {
				name: userName
			})
			.toPromise(),
		urqlClient
			.query<GetUserOverviewQuery, GetUserOverviewQueryVariables>(GetUserOverviewDocument, {
				name: userName
			})
			.toPromise()
	]);

	if (!user) return { notFound: true };

	return addUrqlState(ssr, {
		props: {},
		revalidate: ms("6h") / 1_000
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
