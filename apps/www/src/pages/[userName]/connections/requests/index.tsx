import { Divider, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetUserFriendRequestsQuery } from "../../../../graphql";
import {
	LoadingUserFriendCard,
	UserFriendRequestCard,
	UserPageLayout
} from "../../../../organisms";
import { PageProps, pageProps } from "../../../../page-props/[userName]/connections/requests";
import { PersonIcon } from "../../../../svgs";

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

const FriendRequests = tw.div`
	flex
	flex-col
	items-stretch
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetUserFriendRequestsQuery, {
		field: "viewer.friendRequestsReceived",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE
		}
	});

	const user = data?.viewer;
	const friendRequests = user?.friendRequestsReceived.nodes ?? [];

	return (
		<UserPageLayout selectedTab="connections" userName={userName}>
			<Content>
				<Title tw="mb-6">Connection Requests</Title>
				<FriendRequests>
					{!friendRequests.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="You have no pending requests"
									tw="shadow-none"
								>
									<PersonIcon height={96} width={96} />
								</NonIdealState>
						  )
						: friendRequests.map((requester, i) => (
								<Fragment key={requester.id}>
									{!!i && <Divider />}
									<UserFriendRequestCard
										ref={getLoadMoreRef(i)}
										user={requester}
									/>
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!friendRequests.length) && <Divider />}
								<LoadingUserFriendCard />
							</Fragment>
						))}
				</FriendRequests>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
