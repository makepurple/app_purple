import { MainContainer, Paper } from "@/client/atoms";
import { useGetPostsQuery } from "@/client/graphql";
import { useRelayCursor } from "@/client/hooks";
import { NonIdealState, Tabs } from "@/client/molecules";
import { LoadingPostCard, PostCard, UserInfoSideBar } from "@/client/organisms";
import { HexagonIcon, NoteIcon, RepoIcon } from "@/client/svgs";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw, { styled } from "twin.macro";

const BATCH_SIZE = 20;

const Root = tw(MainContainer)`
	flex
	flex-col-reverse
	lg:flex-row
	items-start
	my-12
`;

const Content = tw.div`
	flex
	flex-col
`;

const LinksContainer = tw(Paper)`
	relative
	h-14
`;

const Links = tw(Tabs)`
	absolute
	left-6
	bottom-0
	right-6
	xl:w-1/2
	xl:right-auto
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
	& > *:not(:first-child) {
		${tw`
			mt-4
			xl:mt-6
		`}
	}
`;

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	w-full
	mb-6
	lg:w-96
	lg:ml-6
	xl:ml-8
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
			<Content>
				<LinksContainer>
					<Links>
						<NextLink href={`/${username}`} passHref>
							<Tabs.Tab icon={NoteIcon} selected>
								Posts
							</Tabs.Tab>
						</NextLink>
						<NextLink href={`/${username}/repositories`} passHref>
							<Tabs.Tab icon={RepoIcon}>Repositories</Tabs.Tab>
						</NextLink>
						<NextLink href={`/${username}/experience`} passHref>
							<Tabs.Tab icon={HexagonIcon}>Experience</Tabs.Tab>
						</NextLink>
					</Links>
				</LinksContainer>
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
			<SideBar username={username as string} />
		</Root>
	);
};

export default Page;
