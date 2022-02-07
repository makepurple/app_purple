import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetActivityFeedDocument,
	GetActivityFeedQuery,
	GetActivityFeedQueryVariables,
	GetFollowableSkillsDocument,
	GetFollowableSkillsQuery,
	GetFollowableSkillsQueryVariables
} from "../graphql";
import { NextUtils } from "../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		urqlClient
			.query<GetActivityFeedQuery, GetActivityFeedQueryVariables>(GetActivityFeedDocument, {
				after: null,
				first: BATCH_SIZE
			})
			.toPromise(),
		urqlClient
			.query<GetFollowableSkillsQuery, GetFollowableSkillsQueryVariables>(
				GetFollowableSkillsDocument
			)
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
