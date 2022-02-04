import {
	Anchor,
	Avatar,
	ForkIcon,
	GitHubAvatarImage,
	IssueIcon,
	LicenseIcon,
	MaybeAnchor,
	Paper,
	PullRequestIcon,
	StarIcon
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardFollowSkillUserActivityFollowSkillFragment } from "../../graphql";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-start
`;

const Content = tw(Paper)`
	self-stretch
	flex
	flex-row
	items-start
	p-4
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
`;

const Name = tw.h3`
	text-lg
	leading-none
	font-semibold
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

export interface UserActivityCardFollowSkillProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardFollowSkillUserActivityFollowSkillFragment;
}

export const UserActivityCardFollowSkill = forwardRef<
	HTMLDivElement,
	UserActivityCardFollowSkillProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { follow } = userActivity;

	/**
	 * !HACK
	 * @description Should not reach here, but in-case it does, return a div so that we don't break
	 * pagination. It does mean that there might be an unexpected gap though.
	 * @author David Lee
	 * @date February 3, 2022
	 */
	if (follow.following.__typename === "User") return <div ref={ref} />;

	const followedSkill = follow.following;

	const owner = followedSkill.github.owner;
	const primaryLanguage = followedSkill.github.primaryLanguage;
	const license = followedSkill.github.licenseInfo;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				followed{" "}
				<NextLink
					href="/[userName]"
					as={`/s/${followedSkill.owner}/${followedSkill.name}`}
					passHref
				>
					<Anchor>{followedSkill.name}</Anchor>
				</NextLink>
			</UserActivityCardHeader>
			<Content tw="mt-2">
				{owner.__typename === "GitHubOrganization" && owner.avatarUrl && (
					<NextLink
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${followedSkill.owner}/${followedSkill.name}`}
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
						as={`/s/${followedSkill.owner}/${followedSkill.name}`}
						passHref
					>
						<Anchor>
							<Name>{followedSkill.name}</Name>
						</Anchor>
					</NextLink>
					{followedSkill.github.description && (
						<NextLink
							href="/s/[skillOwner]/[skillName]"
							as={`/s/${followedSkill.owner}/${followedSkill.name}`}
							passHref
						>
							<a tabIndex={-1} tw="focus:ring-0">
								<Description tw="mt-1">
									{followedSkill.github.description}
								</Description>
							</a>
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
							href={`${followedSkill.github.url}/network/members`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<ForkIcon height={16} width={16} tw="mr-1" />
							<span>{followedSkill.github.forkCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						<StyledMaybeAnchor
							href={`${followedSkill.github.url}/stargazers`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<StarIcon height={16} width={16} tw="mr-1" />
							<span>{followedSkill.github.stargazerCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						<StyledMaybeAnchor
							href={`${followedSkill.github.url}/issues`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<IssueIcon height={16} width={16} tw="mr-1" />
							<span>{followedSkill.github.issueCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						<StyledMaybeAnchor
							href={`${followedSkill.github.url}/pulls`}
							target="_blank"
							rel="noopener noreferrer"
						>
							<PullRequestIcon height={16} width={16} tw="mr-1" />
							<span>{followedSkill.github.pullRequestCount.toLocaleString()}</span>
						</StyledMaybeAnchor>
						{!!followedSkill.github.pushedAt && (
							<span>Updated {dayjs(followedSkill.github.pushedAt).fromNow()}</span>
						)}
					</Info>
				</Details>
			</Content>
		</Root>
	);
});

UserActivityCardFollowSkill.displayName = "UserActivityCardFollowSkill";
