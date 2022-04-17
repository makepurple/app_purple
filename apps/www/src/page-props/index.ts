import ms from "ms";
import type { InferGetStaticPropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetActivityFeedDocument,
	GetActivityFeedQuery,
	GetActivityFeedQueryVariables,
	GetSkillsDocument,
	GetSkillsQuery,
	GetSkillsQueryVariables,
	SortOrder
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
			.query<GetSkillsQuery, GetSkillsQueryVariables>(GetSkillsDocument, {
				after: null,
				first: BATCH_SIZE,
				orderBy: [
					{ users: { _count: SortOrder.Desc } },
					{ desiringUsers: { _count: SortOrder.Desc } },
					{ owner: SortOrder.Desc },
					{ name: SortOrder.Desc }
				],
				name: "",
				owner: ""
			})
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {},
		revalidate: ms("2h") / 1_000
	});
});

export type PageProps = InferGetStaticPropsType<typeof pageProps>;
