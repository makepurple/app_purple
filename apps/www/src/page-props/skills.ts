import { InferGetServerSidePropsType } from "next";
import { getSession } from "next-auth/react";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
	GetSkillsDocument,
	GetSkillsQuery,
	GetSkillsQueryVariables,
	SortOrder
} from "../graphql";
import { NextUtils } from "../utils";

const BATCH_SIZE = 10;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const { name = "", owner = "" } = query as { name: string; owner: string };

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	await Promise.all([
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
				name,
				owner
			})
			.toPromise()
	]);

	return addUrqlState(ssr, {
		props: {
			session: await getSession(ctx)
		}
	});
});

export type PageProps = InferGetServerSidePropsType<typeof pageProps>;
