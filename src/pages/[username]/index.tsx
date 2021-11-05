import { MainContainer, Paper, Tab, TabList } from "@/client/atoms";
import { useGetPostsQuery } from "@/client/graphql";
import { useRelayCursor } from "@/client/hooks";
import { NonIdealState } from "@/client/molecules";
import { LoadingPostCard, PostCard, UserInfoSideBar } from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[username]";
import { HexagonIcon, NoteIcon, RepoIcon } from "@/client/svgs";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { useTabState } from "reakit";
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

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	w-full
	mb-6
	lg:w-96
	lg:ml-6
	xl:ml-8
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const tabs = useTabState({
		selectedId: "posts-tab"
	});

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
				<TabList {...tabs} forwardedAs={Paper}>
					<NextLink href={`/${username}`} passHref>
						<Tab {...tabs} forwardedAs="a" id="posts-tab">
							<NoteIcon height={20} tw="mr-2" width={20} />
							Posts
						</Tab>
					</NextLink>
					<NextLink href={`/${username}/repositories`} passHref>
						<Tab {...tabs} forwardedAs="a" id="repositories-tab">
							<RepoIcon height={20} tw="mr-2" width={20} />
							Repositories
						</Tab>
					</NextLink>
					<NextLink href={`/${username}/experience`} passHref>
						<Tab {...tabs} forwardedAs="a" id="experience-tab">
							<HexagonIcon height={20} tw="mr-2" width={20} />
							Experience
						</Tab>
					</NextLink>
				</TabList>
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
