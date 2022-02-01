import { Divider, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetUserFriendsQuery } from "../../graphql";
import { LoadingUserFriendCard, UserFriendCard, UserPageLayout } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/connections";
import { PersonIcon } from "../../svgs";

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
	leading-none
`;

const Followers = tw.div`
	flex
	flex-col
	items-stretch
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetUserFriendsQuery, {
		field: "user.friends",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const user = data?.user;
	const friends = user?.friends.nodes ?? [];

	if (!user) return null;

	return (
		<UserPageLayout selectedTab="connections" userName={userName}>
			<Content>
				<Title tw="mb-6">Connections</Title>
				<Followers>
					{!friends.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="We couldn't find any connections"
									tw="shadow-none"
								>
									<PersonIcon height={96} width={96} />
								</NonIdealState>
						  )
						: friends.map((follower, i) => (
								<Fragment key={follower.id}>
									{!!i && <Divider />}
									<UserFriendCard ref={getLoadMoreRef(i)} user={follower} />
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!friends.length) && <Divider />}
								<LoadingUserFriendCard />
							</Fragment>
						))}
				</Followers>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
