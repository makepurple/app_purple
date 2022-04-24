import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { GetUserFollowingDocument } from "../../../graphql";
import {
	LoadingUserFollowCard,
	Seo,
	SkillFollowCard,
	UserConnectionPageTabs,
	UserFollowCard,
	UserPageLayout
} from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/connections/following";
import { PersonIcon } from "../../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const Following = tw.div`
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
		query: GetUserFollowingDocument,
		field: "user.following",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const user = data?.user;
	const follows = user?.following.nodes ?? [];

	if (!user) return null;

	return (
		<UserPageLayout selectedTab="connections" userName={userName}>
			<Seo title={`Topics followed by ${userName}`} robots={{ follow: true, index: false }} />
			<Content>
				<UserConnectionPageTabs selectedTab="following" userName={userName} />
				<Following>
					{!follows.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="This user is not following anything"
									tw="shadow-none"
								>
									<PersonIcon height={96} width={96} />
								</NonIdealState>
						  )
						: follows.map((follow, i) => (
								<Fragment key={follow.id}>
									{follow.following.__typename === "Skill" ? (
										<SkillFollowCard ref={getRef(i)} skill={follow.following} />
									) : follow.following.__typename === "User" ? (
										<UserFollowCard ref={getRef(i)} user={follow.following} />
									) : (
										<div ref={getRef(i)} tw="hidden" />
									)}
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingUserFollowCard key={i} />)}
				</Following>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
