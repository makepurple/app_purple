import { Divider, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetUserFollowingQuery } from "../../graphql";
import {
	LoadingUserFollowCard,
	SkillFollowCard,
	UserFollowCard,
	UserPageLayout
} from "../../organisms";
import { pageProps, PageProps } from "../../page-props/[userName]/following";
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

const Following = tw.div`
	flex
	flex-col
	items-stretch
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, { getRef }] = useRelayCursor(useGetUserFollowingQuery, {
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
			<Content>
				<Title tw="mb-4">Following</Title>
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
									{!!i && <Divider />}
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
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!follows.length) && <Divider />}
								<LoadingUserFollowCard />
							</Fragment>
						))}
				</Following>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
