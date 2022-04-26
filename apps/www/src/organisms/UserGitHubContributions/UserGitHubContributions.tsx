import { Anchor, Paper } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { useGetUserGitHubContributionsQuery } from "../../graphql";
import { UserGitHubContributionHeatmap } from "../UserGitHubContributionHeatmap";

const Root = tw(Paper)`
	hidden
	flex-col
	items-stretch
	md:flex
`;

const Title = tw.div`
	flex
	justify-start
	items-center
	h-8
	px-3
	border-b
	border-solid
	border-gray-300
	text-base
	leading-none
	font-semibold
	[& > *]:text-black
`;

const Content = tw.div`
	p-2
`;

export interface UserGitHubContributionsProps {
	className?: string;
	style?: CSSProperties;
	userName: string;
}

export const UserGitHubContributions: FC<UserGitHubContributionsProps> = ({
	className,
	style,
	userName
}) => {
	const [{ data }] = useGetUserGitHubContributionsQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const user = data?.user;

	if (!user) return null;

	const contributionCalendar = user.github.contributionCalendar;
	const totalContributions = contributionCalendar.totalContributions;

	return (
		<Root className={className} style={style}>
			<Title>
				<Anchor href={user.githubUrl} target="_blank" rel="noreferrer noopener">
					{totalContributions.toLocaleString()} contributions in the last year
				</Anchor>
			</Title>
			<Content>
				<UserGitHubContributionHeatmap contributionCalendar={contributionCalendar} />
			</Content>
		</Root>
	);
};
