import { Paper } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { useGetUserTrophiesQuery } from "../../graphql";
import { UserTrophy } from "../UserTrophy";

const Root = tw(Paper)`
	grid
	grid-template-columns[repeat(auto-fit, minmax(6rem, 1fr))]
	auto-rows-auto
	gap-2
	p-3
`;

const TrophyContainer = tw.a`
	flex
	items-stretch
	cursor-pointer
	[& > *]:flex-grow
`;

export interface UserTrophiesProps {
	className?: string;
	style?: CSSProperties;
	userName: string;
}

export const UserTrophies: FC<UserTrophiesProps> = ({ className, style, userName }) => {
	const [{ data }] = useGetUserTrophiesQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const user = data?.user;

	if (!user) return null;

	const trophies = user.trophies;

	return (
		<Root className={className} style={style}>
			<TrophyContainer href={user.githubUrl} target="_blank" rel="noreferrer noopener">
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
			<NextLink href="/[userName]/experiences" as={`/${userName}/experiences`} passHref>
				<TrophyContainer>
					<UserTrophy type="skills" value={trophies.totalSkills} />
				</TrophyContainer>
			</NextLink>
		</Root>
	);
};