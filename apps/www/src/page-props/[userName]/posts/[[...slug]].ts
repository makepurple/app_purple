import { dayjs, ManipulateType } from "@makepurple/utils";
import ms from "ms";
import { GetStaticPaths, InferGetStaticPropsType } from "next";
import { ssrExchange } from "urql";
import {
	addUrqlState,
	createUrqlClient,
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

export const pageProps = NextUtils.castStaticProps(async (ctx) => {
	const { params } = ctx;

	const ssr = ssrExchange({ isClient: false });
	const urqlClient = createUrqlClient({ isStatic: true, ssr });

	const userName = params?.userName as string;
	const slug = (params?.slug ?? []) as (string | undefined)[];

	const [sort, criteria] = slug;

	const [orderBy, where] = ((): [PostOrderByInput | undefined, PostWhereInput] => {
		switch (sort) {
			case "top": {
				const span = criteria ?? "week";

				const gte = ["week", "month", "year"].some((range) => range === span)
					? dayjs()
							.subtract(1, span as ManipulateType)
							.toDate()
					: span === "all"
					? undefined
					: dayjs().subtract(1, "week").toDate();

				return [{ upvoters: { _count: SortOrder.Desc } }, { publishedAt: { gte } }];
			}
			default:
				return [{ publishedAt: SortOrder.Desc }, {}];
		}
	})();

	const [user] = await NextUtils.concurrent([
		urqlClient
			.query<GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables>(
				GetUserInfoSideBarDocument,
				{ name: params?.userName as string }
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
			.toPromise()
	]);

	if (!user) return { notFound: true };

	return addUrqlState(ssr, {
		props: {},
		revalidate: ms("24h") / 1_000
	});
});

export const paths: GetStaticPaths = () => {
	return {
		paths: [{ params: { userName: "leedavidcs", slug: [] } }],
		fallback: "blocking"
	};
};

export type PageProps = InferGetStaticPropsType<typeof pageProps>;
