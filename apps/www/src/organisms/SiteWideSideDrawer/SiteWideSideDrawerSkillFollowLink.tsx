import { Avatar, GitHubAvatarImage, ListItem } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC, MouseEvent } from "react";
import tw from "twin.macro";
import { SiteWideSideDrawerSkillFollowLinkSkillFragment } from "../../graphql";
import { BookIcon } from "../../svgs";

const Root = tw.a`
	py-2
	cursor-pointer
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-6
	w-6
	bg-white
	z-index[1]
`;

const Name = tw.span`
	text-base
	truncate
`;

export interface SiteWideSideDrawerSkillFollowLinkProps {
	className?: string;
	onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
	skill: SiteWideSideDrawerSkillFollowLinkSkillFragment;
	style?: CSSProperties;
}

export const SiteWideSideDrawerSkillFollowLink: FC<SiteWideSideDrawerSkillFollowLinkProps> = ({
	className,
	onClick,
	skill,
	style
}) => {
	const owner = skill.github.owner;

	return (
		<NextLink
			href="/s/[skillOwner]/[skillName]"
			as={`/s/${skill.owner}/${skill.name}`}
			passHref
		>
			<ListItem
				as={Root}
				className={className}
				onClick={(e) => {
					onClick?.(e);
				}}
				style={style}
				title={`${skill.owner}/${skill.name}`}
			>
				<StyledAvatar border={2} tw="mr-3">
					{owner.__typename === "GitHubOrganization" ? (
						<GitHubAvatarImage src={owner.avatarUrl} height={24} width={24} />
					) : (
						<AvatarIconContainer>
							<BookIcon height={16} width={16} />
						</AvatarIconContainer>
					)}
				</StyledAvatar>
				<Name>{skill.name}</Name>
			</ListItem>
		</NextLink>
	);
};
