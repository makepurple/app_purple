import {
	addUrqlState,
	createUrqlClient,
	GetExperiencesDocument,
	GetExperiencesQuery,
	GetExperiencesQueryVariables,
	GetMyUserDocument,
	GetMyUserQuery,
	GetMyUserQueryVariables,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "@/client/graphql";
import { NextUtils } from "@/utils";
import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
		urqlClient
			.query<GetExperiencesQuery, GetExperiencesQueryVariables>(GetExperiencesDocument, {
				after: null,
				first: BATCH_SIZE,
				where: {
					user: {
						name: {
							equals: query.userName as string
						}
					}
				}
			})
			.toPromise(),
		urqlClient
			.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
			.toPromise(),
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: query.userName as string }
			)
			.toPromise(),
		urqlClient.query<GetMyUserQuery, GetMyUserQueryVariables>(GetMyUserDocument).toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
