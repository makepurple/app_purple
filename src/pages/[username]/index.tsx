import { MainContainer } from "@/client/atoms";
import { useGetPostsQuery } from "@/client/graphql";
import { useRelayCursor } from "@/client/hooks";
import { PostCard, UserInfoSideBar } from "@/client/organisms";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw, { styled } from "twin.macro";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-row
`;

const Posts = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
`;

const StyledPostCard = styled(PostCard)`
	&:not(:first-child) {
		${tw`
			mt-6
		`}
	}
`;

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	ml-8
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const { username } = router.query;

	const [{ data }, getLoadMoreRef] = useRelayCursor(useGetPostsQuery, {
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
				{posts.map((post, i) => (
					<StyledPostCard key={post.id} ref={getLoadMoreRef(i)} post={post} />
				))}
			</Posts>
			<SideBar username={username as string} />
		</Root>
	);
};

export default Page;
