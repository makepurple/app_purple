import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { GetUserFollowersDocument } from "../../../graphql";
import {
	LoadingUserFollowCard,
	UserConnectionPageTabs,
	UserFollowCard,
	UserPageLayout
} from "../../../organisms";
import { PageProps, pageProps } from "../../../page-props/[userName]/connections/followers";
import { PersonIcon } from "../../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const Followers = tw.div`
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
		query: GetUserFollowersDocument,
		field: "user.followers",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const user = data?.user;
	const followers = user?.followers.nodes ?? [];

	if (!user) return null;

	return (
		<UserPageLayout selectedTab="connections" userName={userName}>
			<Content>
				<UserConnectionPageTabs selectedTab="followers" userName={userName} />
				<Followers>
					{!followers.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="We couldn't find any followers"
									tw="shadow-none"
								>
									<PersonIcon height={96} width={96} />
								</NonIdealState>
						  )
						: followers.map((follower, i) => (
								<Fragment key={follower.id}>
									<UserFollowCard ref={getRef(i)} user={follower} />
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingUserFollowCard key={i} />)}
				</Followers>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
