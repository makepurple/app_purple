import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetSkillInfoSideBarDocument,
	GetSkillInfoSideBarQuery,
	GetSkillInfoSideBarQueryVariables,
	SuggestFriendsDocument,
	SuggestFriendsQuery,
	SuggestFriendsQueryVariables
} from "../../../../graphql";
import { NextUtils } from "../../../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const skillName = query.skillName as string;
	const skillOwner = query.skillOwner as string;

	const jitterSeed = new Date();

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const [, , skill] = await Promise.all([
		urqlClient
			.query<SuggestFriendsQuery, SuggestFriendsQueryVariables>(SuggestFriendsDocument, {
				after: null,
				first: BATCH_SIZE,
				where: {
					desiredSkillsThreshold: 0,
					skillsThreshold: 0,
					jitter: 0.15,
					jitterSeed,
					skills: {
						name: { equals: skillName },
						owner: { equals: skillOwner }
					},
					weights: {
						skillsOverlap: 1,
						desiredSkillsOverlap: 1
					}
				}
			})
			.toPromise(),
		urqlClient
			.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
			.toPromise(),
		urqlClient
			.query<GetSkillInfoSideBarQuery, GetSkillInfoSideBarQueryVariables>(
				GetSkillInfoSideBarDocument,
				{ name: skillName, owner: skillOwner }
			)
			.toPromise()
			.then((result) => result.data?.skill ?? null)
			.catch(() => null)
	]);

	if (!skill) {
		return {
			redirect: {
				destination: "/404",
				permanent: true
			}
		};
	}

	return addUrqlState(ssr, {
		props: {
			jitterSeed,
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
