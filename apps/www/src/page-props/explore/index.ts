import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	SuggestFriendsDocument,
	SuggestFriendsQuery,
	SuggestFriendsQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

const BATCH_SIZE = 50;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { req } = ctx;

	const jitterSeed = new Date();

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		urqlClient
			.query<SuggestFriendsQuery, SuggestFriendsQueryVariables>(SuggestFriendsDocument, {
				after: null,
				first: BATCH_SIZE,
				where: {
					desiredSkillsThreshold: 0,
					skillsThreshold: 0,
					jitter: 0.15,
					jitterSeed,
					weights: {
						skillsOverlap: 1,
						desiredSkillsOverlap: 1
					}
				}
			})
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			jitterSeed: jitterSeed.getTime(),
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
