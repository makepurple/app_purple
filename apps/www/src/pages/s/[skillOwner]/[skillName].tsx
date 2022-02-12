import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useGetPostsQuery } from "../../../graphql";
import { LoadingPostCard, PostCard, SkillPageLayout } from "../../../organisms";
import { NoteIcon } from "../../../svgs";

const BATCH_SIZE = 20;

const Posts = tw.div`
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetPostsQuery, {
		field: "posts",
		variables: {
			first: BATCH_SIZE,
			where: {
				skills: {
					some: {
						name: { equals: skillName },
						owner: { equals: skillOwner }
					}
				}
			},
			after: null
		}
	});

	const posts = data?.posts.nodes ?? [];

	return (
		<SkillPageLayout selectedTab="posts" skillName={skillName} skillOwner={skillOwner}>
			<Posts>
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
		</SkillPageLayout>
	);
};

export default Page;
