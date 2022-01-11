import {
	Anchor,
	Avatar,
	Button,
	GitHubAvatarImage,
	MaybeAnchor,
	Spinner
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	SkillFollowCardSkillFragment,
	useFollowSkillMutation,
	useUnfollowSkillMutation
} from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";

const Root = tw.div`
	flex
	items-start
	items-start
	py-4
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-16
	w-16
	rounded-md
`;

const Details = tw.div`
	flex-grow
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

const Actions = tw.div`
	flex-shrink-0
`;

const FollowButton = tw(Button)`
	flex-shrink-0
	w-20	
`;

export interface SkillFollowCardProps {
	className?: string;
	skill: SkillFollowCardSkillFragment;
	style?: CSSProperties;
}

export const SkillFollowCard = forwardRef<HTMLDivElement, SkillFollowCardProps>((props, ref) => {
	const { className, skill, style } = props;

	const [{ fetching: following }, followSkill] = useFollowSkillMutation();
	const [{ fetching: unfollowing }, unfollowSkill] = useUnfollowSkillMutation();

	const owner = skill.github.owner;
	const primaryLanguage = skill.github.primaryLanguage;
	const license = skill.github.licenseInfo;

	const loading: boolean = following || unfollowing;

	return (
		<Root ref={ref} className={className} style={style}>
			{owner.__typename === "GitHubOrganization" && owner.avatarUrl && (
				<StyledAvatar border={4} tw="mr-6">
					<GitHubAvatarImage
						alt={owner.login}
						src={owner.avatarUrl}
						height={64}
						width={64}
						title={owner.login}
					/>
				</StyledAvatar>
			)}
			<Details>
				<Anchor href={skill.github.url} target="_blank" rel="noopener noreferrer">
					<Name>{skill.name}</Name>
				</Anchor>
				{skill.github.description && (
					<a
						href={skill.github.url}
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={-1}
						tw="focus:ring-0"
					>
						<Description tw="mt-1">{skill.github.description}</Description>
					</a>
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
			<Actions tw="ml-4">
				<FollowButton
					disabled={loading}
					onClick={async () => {
						skill.viewerFollowing
							? await unfollowSkill({ where: { id: skill.id } }).catch(() => null)
							: await followSkill({ where: { id: skill.id } }).catch(() => null);
					}}
					size="small"
					type="button"
					variant="secondary"
				>
					{loading ? <Spinner /> : skill.viewerFollowing ? "Unfollow" : "Follow"}
				</FollowButton>
			</Actions>
		</Root>
	);
});

SkillFollowCard.displayName = "SkillFollowCard";