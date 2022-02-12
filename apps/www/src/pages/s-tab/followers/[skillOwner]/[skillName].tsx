import { Divider, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetSkillFollowersQuery } from "../../../../graphql";
import { LoadingUserFollowCard, SkillPageLayout, UserFollowCard } from "../../../../organisms";
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

const Followers = tw.div`
	flex
	flex-col
	items-stretch
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetSkillFollowersQuery, {
		field: "skill.followers",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: skillName,
			owner: skillOwner
		}
	});

	const followers = data?.skill?.followers.nodes ?? [];

	return (
		<SkillPageLayout selectedTab="followers" skillName={skillName} skillOwner={skillOwner}>
			<Content>
				<Title tw="mb-4">Followers</Title>
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
									{!!i && <Divider />}
									<UserFollowCard ref={getLoadMoreRef(i)} user={follower} />
								</Fragment>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!followers.length) && <Divider />}
								<LoadingUserFollowCard />
							</Fragment>
						))}
				</Followers>
			</Content>
		</SkillPageLayout>
	);
};
