import { Paper } from "@makepurple/components";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw from "twin.macro";
import { useGetUserOverviewQuery } from "../../graphql";
import { UserPageLayout, UserTrophy } from "../../organisms";

const Trophies = tw(Paper)`
	grid
	grid-template-columns[repeat(auto-fill, minmax(10rem, 1fr))]
	auto-rows-auto
	gap[1rem]
	p-6
`;

const TrophyContainer = tw.a`
	flex
	items-stretch
	cursor-pointer
	[& > *]:flex-grow
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data }] = useGetUserOverviewQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const user = data?.user;

	const hasTrophies = useMemo(() => {
		if (!user) return false;

		return Object.values(user.trophies)
			.filter((value) => typeof value === "number")
			.some((value) => value > 0);
	}, [user]);

	if (!user) return null;

	const trophies = user.trophies;

	return (
		<UserPageLayout selectedTab="overview" userName={userName}>
			{hasTrophies && (
				<Trophies>
					<TrophyContainer
						href={user.githubUrl}
						target="_blank"
						rel="noreferrer noopener"
					>
						<UserTrophy type="yearly-commits" value={trophies.totalYearlyCommits} />
					</TrophyContainer>
					<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
						<TrophyContainer>
							<UserTrophy type="yearly-posts" value={trophies.totalYearlyPosts} />
						</TrophyContainer>
					</NextLink>
					<NextLink href="/[userName]/followers" as={`/${userName}/followers`} passHref>
						<TrophyContainer>
							<UserTrophy type="followers" value={trophies.totalFollowers} />
						</TrophyContainer>
					</NextLink>
					<NextLink href="/[userName]/activity" as={`/${userName}/activity`} passHref>
						<TrophyContainer>
							<UserTrophy type="upvotes" value={trophies.totalUpvotes} />
						</TrophyContainer>
					</NextLink>
					<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
						<TrophyContainer>
							<UserTrophy type="post-views" value={trophies.totalPostViews} />
						</TrophyContainer>
					</NextLink>
					<NextLink
						href="/[userName]/experiences"
						as={`/${userName}/experiences`}
						passHref
					>
						<TrophyContainer>
							<UserTrophy type="skills" value={trophies.totalSkills} />
						</TrophyContainer>
					</NextLink>
				</Trophies>
			)}
		</UserPageLayout>
	);
};

export default Page;
