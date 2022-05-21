import { Anchor, Avatar, GitHubAvatarImage, MaybeAnchor, Paper } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { SkillCardSkillFragment } from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";

const Root = tw(Paper)`
	flex
	items-start
	p-4
	cursor-pointer
	hover:bg-indigo-50
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const Details = tw.div`
	flex-grow
	flex
	flex-col
	items-start
	min-w-0
`;

const Name = tw.h3`
	text-lg
	leading-none
	font-semibold
`;

const DescriptionContainer = tw.a`
	self-stretch
	focus:ring-0
`;

const Description = tw.p`
	text-base
	line-clamp-2
`;

const Info = tw.div`
	flex
	flex-wrap
	items-center
	gap-3.5
	text-sm
	text-black
`;

const GitHubInfo = tw.div`
	flex
	items-center
	leading-none
`;

const StyledMaybeAnchor = tw(MaybeAnchor)`
	flex
	items-center
	leading-none
	color[inherit]
	hover:no-underline
`;

const LanguageColor = tw.div`
	h-3
	w-3
	rounded-full
`;

export interface SkillCardProps {
	className?: string;
	skill: SkillCardSkillFragment;
	style?: CSSProperties;
}

export const SkillCard = forwardRef<HTMLDivElement, SkillCardProps>((props, ref) => {
	const { className, skill, style } = props;

	const router = useRouter();

	const owner = skill.github.owner;
	const primaryLanguage = skill.github.primaryLanguage;
	const license = skill.github.licenseInfo;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push("/s/[skillOwner]/[skillName]", `/s/${skill.owner}/${skill.name}`);
			}}
			style={style}
		>
			{owner.__typename === "GitHubOrganization" && owner.avatarUrl && (
				<NextLink
					href="/s/[skillOwner]/[skillName]"
					as={`/s/${skill.owner}/${skill.name}`}
					passHref
				>
					<StyledAvatar border={4} tw="mr-6">
						<GitHubAvatarImage
							alt={owner.login}
							src={owner.avatarUrl}
							height={64}
							width={64}
							title={owner.login}
						/>
					</StyledAvatar>
				</NextLink>
			)}
			<Details>
				<NextLink
					href="/s/[skillOwner]/[skillName]"
					as={`/s/${skill.owner}/${skill.name}`}
					passHref
				>
					<Anchor>
						<Name>{skill.name}</Name>
					</Anchor>
				</NextLink>
				{skill.github.description && (
					<NextLink
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${skill.owner}/${skill.name}`}
						passHref
					>
						<DescriptionContainer tabIndex={-1}>
							<Description tw="mt-1">{skill.github.description}</Description>
						</DescriptionContainer>
					</NextLink>
				)}
				<Info
					onClick={(e) => {
						e.stopPropagation();
					}}
					tw="mt-3"
				>
					{primaryLanguage && (
						<GitHubInfo>
							{primaryLanguage.color && (
								<LanguageColor
									style={{ backgroundColor: primaryLanguage.color }}
									tw="mr-1"
								/>
							)}
							<span>{primaryLanguage.name}</span>
						</GitHubInfo>
					)}
					{license && (
						<StyledMaybeAnchor
							href={license.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LicenseIcon height={16} width={16} tw="mr-1" />
							<span>{license.spdxId ?? license.nickname ?? license.name}</span>
						</StyledMaybeAnchor>
					)}
					<StyledMaybeAnchor
						href={`${skill.github.url}/network/members`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ForkIcon height={16} width={16} tw="mr-1" />
						<span>{skill.github.forkCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${skill.github.url}/stargazers`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<StarIcon height={16} width={16} tw="mr-1" />
						<span>{skill.github.stargazerCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${skill.github.url}/issues`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IssueIcon height={16} width={16} tw="mr-1" />
						<span>{skill.github.issueCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${skill.github.url}/pulls`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<PullRequestIcon height={16} width={16} tw="mr-1" />
						<span>{skill.github.pullRequestCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					{!!skill.github.pushedAt && (
						<span>Updated {dayjs(skill.github.pushedAt).fromNow()}</span>
					)}
				</Info>
			</Details>
		</Root>
	);
});

SkillCard.displayName = "SkillCard";
