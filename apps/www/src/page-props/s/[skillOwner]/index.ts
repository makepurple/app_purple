import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetSkillOwnerExperiencersDocument,
	GetSkillOwnerExperiencersQuery,
	GetSkillOwnerExperiencersQueryVariables,
	GetSkillOwnerInfoSideBarDocument,
	GetSkillOwnerInfoSideBarQuery,
	GetSkillOwnerInfoSideBarQueryVariables,
	GetSkillOwnerRepositoriesDocument,
	GetSkillOwnerRepositoriesQuery,
	GetSkillOwnerRepositoriesQueryVariables
} from "../../../graphql";
import { NextUtils } from "../../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const skillOwner = query.skillOwner as string;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const [owner] = await Promise.all([
		urqlClient
			.query<GetSkillOwnerInfoSideBarQuery, GetSkillOwnerInfoSideBarQueryVariables>(
				GetSkillOwnerInfoSideBarDocument,
				{ owner: skillOwner }
			)
			.toPromise()
			.then((result) => result.data?.github.repositoryOwner),
		urqlClient
			.query<GetSkillOwnerRepositoriesQuery, GetSkillOwnerRepositoriesQueryVariables>(
				GetSkillOwnerRepositoriesDocument,
				{ skillOwner }
			)
			.toPromise(),
		urqlClient
			.query<GetSkillOwnerExperiencersQuery, GetSkillOwnerExperiencersQueryVariables>(
				GetSkillOwnerExperiencersDocument,
				{
					after: null,
					first: BATCH_SIZE,
					skillOwner
				}
			)
			.toPromise()
	]);

	if (!owner) return { notFound: true };

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
