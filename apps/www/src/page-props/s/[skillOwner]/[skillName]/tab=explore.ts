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

const BATCH_SIZE = 50;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const skillName = query.skillName as string;
	const skillOwner = query.skillOwner as string;

	const seed = new Date().toString();

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const session = await getSession(ctx);

	const [skill] = await NextUtils.concurrent([
		urqlClient
			.query<GetSkillInfoSideBarQuery, GetSkillInfoSideBarQueryVariables>(
				GetSkillInfoSideBarDocument,
				{ name: skillName, owner: skillOwner }
			)
			.toPromise()
			.then((result) => result.data?.github.repository),
		urqlClient
			.query<SuggestFriendsQuery, SuggestFriendsQueryVariables>(SuggestFriendsDocument, {
				after: null,
				first: BATCH_SIZE,
				where: {
					seed,
					skills: {
						name: { equals: skillName },
						owner: { equals: skillOwner }
					}
				}
			})
			.toPromise(),
		!!session &&
			urqlClient
				.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
				.toPromise()
	]);

	if (!skill) return { notFound: true };

	return addUrqlState(ssr, {
		props: { seed, session }
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
