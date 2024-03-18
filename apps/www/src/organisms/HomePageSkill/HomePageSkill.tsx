import { Avatar, GitHubAvatarImage, Paper } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageSkillGitHubRepositoryFragment } from "../../graphql";

const Root = tw(Paper)`
	inline-flex
	items-center
	h-28
	px-6
	min-w-[14rem]
	bg-indigo-50
	transition
	duration-150
	ease-in
	cursor-pointer
	hover:bg-indigo-100
	hover:shadow-inner
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

const Info = tw.div`
	flex
	flex-col
	items-start
	justify-center
	gap-0.5
`;

const SkillName = tw.h3`
	text-2xl
	leading-tight
	font-bold
`;

const OwnerName = tw.h4`
	text-base
	leading-tight
	font-medium
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
			legacyBehavior
			href="/s/[skillOwner]/[skillName]"
			as={`/s/${owner.login}/${repository.name}`}
			passHref
		>
			<Root as="a" className={className} style={style}>
				<StyledAvatar border={4}>
					<GitHubAvatarImage
						alt={`${repository.name} by ${owner.name ?? owner.login}`}
						src={owner.avatarUrl}
						height={56}
						width={56}
					/>
				</StyledAvatar>
				<Info tw="ml-6">
					<SkillName>{repository.name}</SkillName>
					<OwnerName>by {owner.name ?? owner.login}</OwnerName>
				</Info>
			</Root>
		</NextLink>
	);
};
