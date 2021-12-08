import { MainContainer } from "@/client/atoms";
import { useGetPostsQuery } from "@/client/graphql";
import { useRelayCursor } from "@/client/hooks";
import { NonIdealState } from "@/client/molecules";
import { LoadingPostCard, PostCard, UserInfoSideBar, UserPageTabs } from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[userName]";
import { NoteIcon } from "@/client/svgs";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw, { styled } from "twin.macro";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-col
	lg:flex-row-reverse
	items-start
	my-12
`;

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	w-full
	mb-6
	lg:w-96
	lg:ml-6
	xl:ml-8
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
`;

const Posts = styled.div`
	${tw`
		flex-grow
		flex
		flex-col
		items-stretch
		mt-4
		xl:mt-6
	`}
	& > * {
		${tw`
			not-first:mt-4
			xl:not-first:mt-6
		`}
	}
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetPostsQuery, {
		field: "posts",
		requestPolicy: "cache-first",
		variables: {
			first: BATCH_SIZE,
			where: {
				author: {
					name: {
						equals: userName
					}
				}
			},
			after: null
		}
	});

	const posts = data?.posts.nodes ?? [];

	return (
		<Root>
			<SideBar userName={userName} />
			<Content>
				<UserPageTabs selectedTab="posts" userName={userName} />
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
			</Content>
		</Root>
	);
};

export default Page;
