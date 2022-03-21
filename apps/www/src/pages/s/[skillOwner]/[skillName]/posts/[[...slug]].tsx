import { Button, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { dayjs } from "@makepurple/utils";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw, { styled } from "twin.macro";
import {
	GetPostsDocument,
	PostOrderByInput,
	PostWhereInput,
	SortOrder
} from "../../../../../graphql";
import { LoadingPostCard, PostCard, SkillPageLayout } from "../../../../../organisms";
import {
	PageProps,
	pageProps
} from "../../../../../page-props/s/[skillOwner]/[skillName]/posts/[[...slug]]";
import { NoteIcon } from "../../../../../svgs";

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

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;
	const slug = (router?.query.slug ?? []) as (string | undefined)[];

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

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetPostsDocument,
		field: "posts",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			orderBy,
			where: {
				...where,
				skills: {
					some: {
						name: { equals: skillName },
						owner: { equals: skillOwner }
					}
				}
			}
		}
	});

	const posts = data?.posts.nodes ?? [];

	return (
		<SkillPageLayout selectedTab="posts" skillName={skillName} skillOwner={skillOwner}>
			<OrderBy>
				<OrderBys>
					<NextLink
						href="/s/[skillOwner]/[skillOwner]/[[...slug]]"
						as={`/s/${skillOwner}/${skillName}`}
						passHref
						shallow
					>
						<OrderByOption
							as="a"
							variant={!sort || sort === "latest" ? "primary" : "secondary"}
						>
							Latest
						</OrderByOption>
					</NextLink>
					<NextLink
						href="/s/[skillOwner]/[skillOwner]/[[...slug]]"
						as={`/s/${skillOwner}/${skillName}/top`}
						passHref
						shallow
					>
						<OrderByOption as="a" variant={sort === "top" ? "primary" : "secondary"}>
							Top
						</OrderByOption>
					</NextLink>
				</OrderBys>
				{sort === "top" && (
					<OrderByCriteria>
						<NextLink
							href="/s/[skillOwner]/[skillOwner]/[[...slug]]"
							as={`/s/${skillOwner}/${skillName}/top`}
							passHref
							shallow
						>
							<OrderByOption
								as="a"
								variant={!criteria || criteria === "week" ? "primary" : "secondary"}
							>
								Week
							</OrderByOption>
						</NextLink>
						<NextLink
							href="/s/[skillOwner]/[skillOwner]/[[...slug]]"
							as={`/s/${skillOwner}/${skillName}/top/month`}
							passHref
							shallow
						>
							<OrderByOption
								as="a"
								variant={criteria === "month" ? "primary" : "secondary"}
							>
								Month
							</OrderByOption>
						</NextLink>
						<NextLink
							href="/s/[skillOwner]/[skillOwner]/[[...slug]]"
							as={`/s/${skillOwner}/${skillName}/top/year`}
							passHref
							shallow
						>
							<OrderByOption
								as="a"
								variant={criteria === "year" ? "primary" : "secondary"}
							>
								Year
							</OrderByOption>
						</NextLink>
						<NextLink
							href="/s/[skillOwner]/[skillOwner]/[[...slug]]"
							as={`/s/${skillOwner}/${skillName}/top/all`}
							passHref
							shallow
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
		</SkillPageLayout>
	);
};

export default Page;
