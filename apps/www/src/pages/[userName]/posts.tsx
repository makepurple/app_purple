import { NonIdealState, NoteIcon } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useGetPostsQuery } from "../../graphql";
import { LoadingPostCard, PostCard, UserPageLayout } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]";

const BATCH_SIZE = 20;

const Posts = tw.div`
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
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
				author: { name: { equals: userName } }
			},
			after: null
		}
	});

	const posts = data?.posts.nodes ?? [];

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
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
		</UserPageLayout>
	);
};

export default Page;
