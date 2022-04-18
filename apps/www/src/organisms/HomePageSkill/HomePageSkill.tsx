import { Avatar, GitHubAvatarImage } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageSkillGitHubRepositoryFragment } from "../../graphql";

const Root = tw.a`
	flex
	items-center
	opacity-70
	text-gray-500
	transition
	duration-150
	ease-in
	hover:opacity-100
	hover:text-black
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

const Info = tw.div`
	flex
	flex-col
	justify-center
	gap-0.5
`;

const SkillName = tw.h3`
	text-2xl
	leading-none
	font-bold
`;

const OwnerName = tw.h4`
	text-sm
	font-medium
	leading-none
`;

export interface HomePageSkillProps {
	className?: string;
	repository: HomePageSkillGitHubRepositoryFragment;
	style?: CSSProperties;
}

export const HomePageSkill: FC<HomePageSkillProps> = ({ className, repository, style }) => {
	const owner = repository.owner;

	return (
		<NextLink
			href="/s/[skillOwner]/[skillName]"
			as={`/s/${owner.login}/${repository.name}`}
			passHref
		>
			<Root className={className} style={style}>
				<StyledAvatar border={4}>
					<GitHubAvatarImage src={owner.avatarUrl} height={48} width={48} />
				</StyledAvatar>
				<Info tw="ml-3">
					<SkillName>{repository.name}</SkillName>
					<OwnerName>by {owner.name ?? owner.login}</OwnerName>
				</Info>
			</Root>
		</NextLink>
	);
};
