import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetPostsDocument,
	GetPostsQuery,
	GetPostsQueryVariables,
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

	const [, , skill] = await Promise.all([
		urqlClient
			.query<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {
				after: null,
				first: BATCH_SIZE,
				where: {
					skills: {
						some: {
							name: { equals: skillName },
							owner: { equals: skillOwner }
						}
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
			.then((result) => result.data?.github.repository ?? null)
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
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
