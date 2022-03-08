import { dayjs } from "@makepurple/utils";
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
	GetUserInfoSideBarDocument,
	GetUserInfoSideBarQuery,
	GetUserInfoSideBarQueryVariables,
	PostOrderByInput,
	PostWhereInput,
	SortOrder
} from "../../../graphql";
import { NextUtils } from "../../../utils";

const BATCH_SIZE = 20;

export const pageProps = NextUtils.castSSRProps(async (ctx) => {
	const { query, req } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ req, ssr });

	const userName = query.userName as string;
	const slug = (query.slug ?? []) as (string | undefined)[];

	const [sort, criteria] = slug;

	const [orderBy, where] = ((): [PostOrderByInput | undefined, PostWhereInput] => {
		switch (sort) {
			case "top": {
				const span = criteria ?? "week";

				const gte = ["week", "month", "year"].some((range) => range === span)
					? dayjs().subtract(1, span).toDate()
					: span === "all"
					? undefined
					: dayjs().subtract(1, "week").toDate();

				return [{ upvoters: { _count: SortOrder.Desc } }, { publishedAt: { gte } }];
			}
			default:
				return [{ publishedAt: SortOrder.Desc }, {}];
		}
	})();

	const [user] = await Promise.all([
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: query.userName as string }
			)
			.toPromise()
			.then((result) => result.data?.user),
		urqlClient
			.query<GetPostsQuery, GetPostsQueryVariables>(GetPostsDocument, {
				after: null,
				first: BATCH_SIZE,
				orderBy,
				where: {
					...where,
					author: { name: { equals: userName } }
				}
			})
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
