import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { GetUserFriendsDocument } from "../../../graphql";
import {
	LoadingUserFriendCard,
	Seo,
	UserConnectionPageTabs,
	UserFriendCard,
	UserPageLayout
} from "../../../organisms";
import { PageProps, pageProps } from "../../../page-props/[userName]/connections";
import { PersonIcon } from "../../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const Friends = tw.div`
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
		query: GetUserFriendsDocument,
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
			<Seo title={`${userName}'s Connections`} robots={{ follow: true, index: false }} />
			<Content>
				<UserConnectionPageTabs selectedTab="connections" userName={userName} />
				<Friends>
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
									<UserFriendCard ref={getRef(i)} user={follower} />
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingUserFriendCard key={i} />)}
				</Friends>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
