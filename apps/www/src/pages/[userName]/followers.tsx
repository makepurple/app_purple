import { Divider, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetUserFollowersQuery } from "../../graphql";
import { LoadingUserFollowCard, UserFollowCard, UserPageLayout } from "../../organisms";

const BATCH_SIZE = 20;

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h2`
	flex
	text-xl
	font-bold
`;

const Followers = tw.div`
	flex
	flex-col
	items-stretch
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetUserFollowersQuery, {
		field: "user.followers",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const user = data?.user;
	const followers = data?.user?.followers.nodes ?? [];

	if (!user) return null;

	return (
		<UserPageLayout selectedTab="overview" userName={userName}>
			<Content>
				<Title tw="mb-6">Followers</Title>
				<Followers>
					{!followers.length ? (
						<NonIdealState
							title="There's nothing here"
							subTitle="We couldn't find any followers"
							tw="shadow-none"
						/>
					) : (
						followers.map((follower, i) => (
							<Fragment key={follower.id}>
								{!!i && <Divider />}
								<UserFollowCard ref={getLoadMoreRef(i)} user={follower} />
							</Fragment>
						))
					)}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!followers.length) && <Divider />}
								<LoadingUserFollowCard />
							</Fragment>
						))}
				</Followers>
			</Content>
		</UserPageLayout>
	);
};

export default Page;