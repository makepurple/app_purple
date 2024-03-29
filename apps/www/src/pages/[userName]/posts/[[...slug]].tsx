import { Button, NonIdealState, NoteIcon, Paper } from "@makepurple/components";
import { useMountEffect, useRelayCursor } from "@makepurple/hooks";
import { dayjs, ManipulateType } from "@makepurple/utils";
import { oneLineCommaListsAnd } from "common-tags";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw, { styled } from "twin.macro";
import { GetPostsDocument, PostOrderByInput, PostWhereInput, SortOrder } from "../../../graphql";
import { LoadingPostCard, PostCard, Seo, UserPageLayout } from "../../../organisms";
import { PageProps, pageProps, paths } from "../../../page-props/[userName]/posts/[[...slug]]";

const BATCH_SIZE = 20;
const MIN_SEO_READ_TIME = 10;
const MIN_SEO_SIZE = 3;

const Posts = tw.div`
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
`;

const OrderBy = tw(Paper)`
	flex
	flex-row
	justify-between
	flex-wrap
	gap-2
	p-2
`;

const OrderBys = tw.div`
	flex
	flex-row
	items-stretch
	gap-2
`;

const OrderByOption = styled(Button)`
	${tw`
		flex-shrink-0
		h-12
		w-20
		text-base
		p-0
		cursor-pointer
	`}
`;

const OrderByCriteria = styled.div`
	${tw`
		flex
		flex-row
		gap-2
	`}
`;

export const getStaticProps = pageProps;
export const getStaticPaths = paths;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;
	const slug = (router?.query.slug ?? []) as (string | undefined)[];

	const [sort, criteria] = slug;

	const [orderBy, where] = useMemo((): [PostOrderByInput | undefined, PostWhereInput] => {
		switch (sort) {
			case "top": {
				const span = criteria ?? "week";
				const spans = ["week", "month", "year"] as const;

				const gte = spans.some((range) => range === span)
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
	}, [criteria, sort]);

	const [{ data, fetching }, { getRef, reexecute }] = useRelayCursor({
		query: GetPostsDocument,
		field: "posts",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			orderBy,
			where: {
				...where,
				author: { name: { equals: userName } }
			}
		}
	});

	useMountEffect(() => {
		reexecute({ requestPolicy: "network-only" });
	});

	const posts = useMemo(() => data?.posts.nodes ?? [], [data?.posts.nodes]);
	const seoReadTime = useMemo(() => posts.reduce((sum, post) => sum + post.readTime, 0), [posts]);
	const shouldIndex = posts.length >= MIN_SEO_SIZE && seoReadTime >= MIN_SEO_READ_TIME;

	const metaTitle = useMemo(
		() => (sort === "top" ? `${userName}'s Top Posts` : `${userName}'s Latest Posts`),
		[sort, userName]
	);

	const metaDescription = useMemo(() => {
		const postTitles = posts.slice(0, MIN_SEO_SIZE).map((post) => post.title);

		const metaSort = sort === "top" ? "top" : "latest";

		return oneLineCommaListsAnd`
			${userName}'s ${metaSort} posts, including ${postTitles}
		`;
	}, [posts, sort, userName]);

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
			<Seo
				title={metaTitle}
				description={metaDescription}
				robots={{
					follow: true,
					index: shouldIndex
				}}
			/>
			<OrderBy>
				<OrderBys>
					<NextLink
						legacyBehavior
						href="/[userName]/posts"
						as={`/${userName}/posts`}
						passHref
					>
						<OrderByOption
							as="a"
							variant={!sort || sort === "latest" ? "primary" : "secondary"}
						>
							Latest
						</OrderByOption>
					</NextLink>
					<NextLink
						legacyBehavior
						href="/[userName]/posts/[[...slug]]"
						as={`/${userName}/posts/top`}
						passHref
					>
						<OrderByOption as="a" variant={sort === "top" ? "primary" : "secondary"}>
							Top
						</OrderByOption>
					</NextLink>
				</OrderBys>
				{sort === "top" && (
					<OrderByCriteria>
						<NextLink
							legacyBehavior
							href="/[userName]/posts/[[...slug]]"
							as={`/${userName}/posts/top`}
							passHref
						>
							<OrderByOption
								as="a"
								variant={!criteria || criteria === "week" ? "primary" : "secondary"}
							>
								Week
							</OrderByOption>
						</NextLink>
						<NextLink
							legacyBehavior
							href="/[userName]/posts/top/[[...slug]]"
							as={`/${userName}/posts/top/month`}
							passHref
						>
							<OrderByOption
								as="a"
								variant={criteria === "month" ? "primary" : "secondary"}
							>
								Month
							</OrderByOption>
						</NextLink>
						<NextLink
							legacyBehavior
							href="/[userName]/posts/top/[[...slug]]"
							as={`/${userName}/posts/top/year`}
							passHref
						>
							<OrderByOption
								as="a"
								variant={criteria === "year" ? "primary" : "secondary"}
							>
								Year
							</OrderByOption>
						</NextLink>
						<NextLink
							legacyBehavior
							href="/[userName]/posts/top/[[...slug]]"
							as={`/${userName}/posts/top/all`}
							passHref
						>
							<OrderByOption
								as="a"
								variant={criteria === "all" ? "primary" : "secondary"}
							>
								All Time
							</OrderByOption>
						</NextLink>
					</OrderByCriteria>
				)}
			</OrderBy>
			<Posts tw="mt-6">
				{!posts.length
					? !fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle="We couldn't find any posts"
							>
								<NoteIcon height={96} width={96} />
							</NonIdealState>
					  )
					: posts.map((post, i) => (
							<PostCard key={post.id} ref={getRef(i)} post={post} />
					  ))}
				{fetching && Array.from({ length: 3 }, (_, i) => <LoadingPostCard key={i} />)}
			</Posts>
		</UserPageLayout>
	);
};

export default Page;
