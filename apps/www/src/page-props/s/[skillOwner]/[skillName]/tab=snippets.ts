import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetSkillCodeExamplesDocument,
	GetSkillCodeExamplesQuery,
	GetSkillCodeExamplesQueryVariables,
	GetSkillInfoSideBarDocument,
	GetSkillInfoSideBarQuery,
	GetSkillInfoSideBarQueryVariables
} from "../../../../graphql";
import { NextUtils } from "../../../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const skillName = query.skillName as string;
	const skillOwner = query.skillOwner as string;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const [skill] = await NextUtils.concurrent([
		urqlClient
			.query<GetSkillInfoSideBarQuery, GetSkillInfoSideBarQueryVariables>(
				GetSkillInfoSideBarDocument,
				{ name: skillName, owner: skillOwner }
			)
			.toPromise()
			.then((result) => result.data?.github.repository),
		urqlClient
			.query<GetSkillCodeExamplesQuery, GetSkillCodeExamplesQueryVariables>(
				GetSkillCodeExamplesDocument,
				{
					after: null,
					first: BATCH_SIZE,
					name: skillName,
					owner: skillOwner
				}
			)
			.toPromise(),
		urqlClient
			.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
			.toPromise()
	]);

	if (!skill) return { notFound: true };

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
