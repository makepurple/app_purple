import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetPostDraftDocument,
	GetPostDraftQuery,
	GetPostDraftQueryVariables,
	GetUserExperiencesDocument,
	GetUserExperiencesQuery,
	GetUserExperiencesQueryVariables,
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables
} from "../../graphql";
import { NextUtils } from "../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const [user] = await NextUtils.concurrent([
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: query.userName as string }
			)
			.toPromise()
			.then((result) => result.data?.user),
		urqlClient
			.query<GetUserExperiencesQuery, GetUserExperiencesQueryVariables>(
				GetUserExperiencesDocument,
				{
					after: null,
					first: BATCH_SIZE,
					name: query.userName as string
				}
			)
			.toPromise(),
		urqlClient
			.query<GetPostDraftQuery, GetPostDraftQueryVariables>(GetPostDraftDocument)
			.toPromise()
	]);

	if (!user) return { notFound: true };

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
