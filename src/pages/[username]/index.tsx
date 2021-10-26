import { MainContainer } from "@/client/atoms";
import { useGetPostsQuery } from "@/client/graphql";
import { useRelayCursor } from "@/client/hooks";
import { NonIdealState } from "@/client/molecules";
import { LoadingPostCard, PostCard, UserInfoSideBar } from "@/client/organisms";
import { NoteIcon } from "@/client/svgs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw, { styled } from "twin.macro";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-row
	items-start
	my-12
`;

const Posts = styled.div`
	${tw`
		flex-grow
		flex
		flex-col
		items-stretch
	`}
	& > *:not(:first-child) {
		${tw`
			mt-6
		`}
	}
`;

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	w-96
	ml-8
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const { username } = router?.query ?? {};

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetPostsQuery, {
		field: "posts",
		requestPolicy: "cache-first",
		variables: {
			first: BATCH_SIZE,
			where: {
				author: {
					name: {
						equals: username as string
					}
				}
			}
		}
	});

	const posts = data?.posts.nodes ?? [];

	return (
		<Root>
			<Posts>
				{fetching ? (
					Array.from({ length: 3 }, (_, i) => <LoadingPostCard key={i} />)
				) : !posts.length ? (
					<NonIdealState
						title="There's nothing here"
						subTitle="We couldn't find any posts"
					>
						<NoteIcon height={96} width={96} />
					</NonIdealState>
				) : (
					posts.map((post, i) => (
						<PostCard key={post.id} ref={getLoadMoreRef(i)} post={post} />
					))
				)}
			</Posts>
			<SideBar username={username as string} />
		</Root>
	);
};

export default Page;
