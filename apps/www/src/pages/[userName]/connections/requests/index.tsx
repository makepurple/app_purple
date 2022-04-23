import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { GetUserFriendRequestsDocument } from "../../../../graphql";
import {
	LoadingUserFriendCard,
	Seo,
	UserConnectionPageTabs,
	UserFriendRequestCard,
	UserPageLayout
} from "../../../../organisms";
import { PageProps, pageProps } from "../../../../page-props/[userName]/connections/requests";
import { PersonIcon } from "../../../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const FriendRequests = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetUserFriendRequestsDocument,
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
			<Seo title="Connection Requests" />
			<Content>
				<UserConnectionPageTabs selectedTab="requests" userName={userName} />
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
								<UserFriendRequestCard
									key={requester.id}
									ref={getRef(i)}
									user={requester}
								/>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingUserFriendCard key={i} />)}
				</FriendRequests>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
