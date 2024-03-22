import ms from "ms";
import type { InferGetStaticPropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetActivityFeedDocument,
	GetActivityFeedQuery,
	GetActivityFeedQueryVariables,
	GetHomePageSkillsDocument,
	GetHomePageSkillsQuery,
	GetHomePageSkillsQueryVariables
} from "../graphql";
import { NextUtils } from "../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castStaticProps(async () => {
	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ isStatic: true, ssr });

	await NextUtils.concurrent([
		urqlClient
			.query<GetActivityFeedQuery, GetActivityFeedQueryVariables>(GetActivityFeedDocument, {
				after: null,
				first: BATCH_SIZE
			})
			.toPromise(),
		urqlClient
			.query<GetHomePageSkillsQuery, GetHomePageSkillsQueryVariables>(
				GetHomePageSkillsDocument
			)
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {},
		revalidate: ms("1d") / 1_000
	});
});

export type PageProps = InferGetStaticPropsType<typeof pageProps>;
