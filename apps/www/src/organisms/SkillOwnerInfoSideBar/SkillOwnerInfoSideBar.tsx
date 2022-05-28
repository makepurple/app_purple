import { Anchor, Avatar, GitHubAvatarImage, Paper, ShareButton } from "@makepurple/components";
import { oneLine } from "common-tags";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { useGetSkillOwnerInfoSideBarQuery } from "../../graphql";
import { GitHubIcon, LinkIcon, ShareIcon, TwitterIcon } from "../../svgs";

const Root = tw(Paper)`
	p-4
	sm:p-6
`;

const StyledAvatar = tw(Avatar)`
	self-start
	rounded-2xl
`;

const Name = tw.h1`
	mt-3
	text-2xl
	leading-none
	font-medium
	truncate
`;

const OwnerName = tw(Anchor)`
	text-black
	font-bold
`;

const Description = tw.p`
	text-gray-500
	line-clamp-4
`;

const SocialLinks = tw.div`
	inline-flex
	items-center
	gap-4
	text-violet-800
`;

const SocialLink = tw.a`
	inline-flex
`;

export interface SkillOwnerInfoSideBarProps {
	className?: string;
	skillOwner: string;
	style?: CSSProperties;
}

export const SkillOwnerInfoSideBar: FC<SkillOwnerInfoSideBarProps> = ({
	className,
	skillOwner,
	style
}) => {
	const [{ data }] = useGetSkillOwnerInfoSideBarQuery({
		variables: {
			owner: skillOwner
		}
	});

	const owner = data?.github?.repositoryOwner;

	if (!owner) return null;

	const description = owner.__typename === "GitHubOrganization" ? owner.description : owner.bio;

	return (
		<Root className={className} style={style}>
			<StyledAvatar border={6} href={owner.url} target="_blank" rel="noreferrer noopener">
				<GitHubAvatarImage src={owner.avatarUrl} height={156} width={156} />
			</StyledAvatar>
			<Name>
				<OwnerName href={owner.url} target="_blank" rel="noreferrer noopener">
					{owner.login}
				</OwnerName>
			</Name>
			{!!description && <Description tw="mt-3">{description}</Description>}
			<SocialLinks tw="mt-4">
				<SocialLink
					href={owner.url}
					target="_blank"
					rel="nofollow noopener noreferer"
					aria-label="github"
					title="GitHub"
				>
					<GitHubIcon height={24} width={24} />
				</SocialLink>
				{!!owner.twitterUsername && (
					<SocialLink
						href={`https://twitter.com/${owner.twitterUsername}`}
						target="_blank"
						rel="nofollow noopener noreferer"
						aria-label="twitter"
						title="Twitter"
					>
						<TwitterIcon height={24} width={24} />
					</SocialLink>
				)}
				{!!owner.websiteUrl && (
					<SocialLink
						href={owner.websiteUrl}
						target="_blank"
						rel="nofollow noopener noreferer"
						aria-label="openbase"
						title={owner.websiteUrl}
					>
						<LinkIcon height={24} width={24} />
					</SocialLink>
				)}
				<ShareButton
					share={{
						url: `https://makepurple.com/s/${skillOwner}`,
						title: `Check out ${skillOwner} on MakePurple!`,
						text: oneLine`
							Check out ${skillOwner}'s page on MakePurple!
						`
					}}
					size="small"
					tags={["makepurple", skillOwner]}
					utm={{
						content: "skill_owner"
					}}
					variant="secondary"
				>
					<ShareIcon height={16} width={16} />
					<span tw="ml-1">Share</span>
				</ShareButton>
			</SocialLinks>
		</Root>
	);
};
