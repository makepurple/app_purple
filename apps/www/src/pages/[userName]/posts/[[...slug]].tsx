import { Button, NonIdealState, NoteIcon, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { dayjs } from "@makepurple/utils";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw, { styled } from "twin.macro";
import { PostOrderByInput, PostWhereInput, SortOrder, useGetPostsQuery } from "../../../graphql";
import { LoadingPostCard, PostCard, UserPageLayout } from "../../../organisms";
import { PageProps, pageProps } from "../../../page-props/[userName]/posts";

const BATCH_SIZE = 20;

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

const OrderByOption = styled(Button)<{ $selected: boolean }>`
	${tw`
		flex-shrink-0
		h-12
		w-20
		text-base
		p-0
		cursor-pointer
	`}

	${({ $selected }) =>
		$selected &&
		tw`
			bg-indigo-500
			text-white
		`}
`;

const OrderByCriteria = styled.div`
	${tw`
		flex
		flex-row
		gap-2
	`}
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;
	const slug = (router?.query.slug ?? []) as string[];

	const [sort, criteria] = slug;

	const [orderBy, where] = useMemo((): [PostOrderByInput | undefined, PostWhereInput] => {
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
	}, [criteria, sort]);

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetPostsQuery, {
		field: "posts",
		requestPolicy: "cache-first",
		variables: {
			first: BATCH_SIZE,
			orderBy,
			where: {
				...where,
				author: { name: { equals: userName } }
			},
			after: null
		}
	});

	const posts = data?.posts.nodes ?? [];

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
			<OrderBy>
				<OrderBys>
					<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
						<OrderByOption
							as="a"
							variant="secondary"
							$selected={!sort || sort === "latest"}
						>
							Latest
						</OrderByOption>
					</NextLink>
					<NextLink
						href="/[userName]/posts/[[...slug]]"
						as={`/${userName}/posts/top`}
						passHref
					>
						<OrderByOption as="a" variant="secondary" $selected={sort === "top"}>
							Top
						</OrderByOption>
					</NextLink>
				</OrderBys>
				{sort === "top" && (
					<OrderByCriteria>
						<NextLink
							href="/[userName]/posts/[[...slug]]"
							as={`/${userName}/posts/top`}
							passHref
						>
							<OrderByOption
								as="a"
								variant="secondary"
								$selected={!criteria || criteria === "week"}
							>
								Week
							</OrderByOption>
						</NextLink>
						<NextLink
							href="/[userName]/posts/top/[[...slug]]"
							as={`/${userName}/posts/top/month`}
							passHref
						>
							<OrderByOption
								as="a"
								variant="secondary"
								$selected={criteria === "month"}
							>
								Month
							</OrderByOption>
						</NextLink>
						<NextLink
							href="/[userName]/posts/top/[[...slug]]"
							as={`/${userName}/posts/top/year`}
							passHref
						>
							<OrderByOption
								as="a"
								variant="secondary"
								$selected={criteria === "year"}
							>
								Year
							</OrderByOption>
						</NextLink>
						<NextLink
							href="/[userName]/posts/top/[[...slug]]"
							as={`/${userName}/posts/top/all`}
							passHref
						>
							<OrderByOption
								as="a"
								variant="secondary"
								$selected={criteria === "all"}
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
							<PostCard key={post.id} ref={getLoadMoreRef(i)} post={post} />
					  ))}
				{fetching && Array.from({ length: 3 }, (_, i) => <LoadingPostCard key={i} />)}
			</Posts>
		</UserPageLayout>
	);
};

export default Page;