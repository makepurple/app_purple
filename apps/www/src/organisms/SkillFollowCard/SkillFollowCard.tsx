import {
	Anchor,
	Avatar,
	Button,
	GitHubAvatarImage,
	MaybeAnchor,
	Paper,
	Spinner,
	toast
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	SkillFollowCardSkillFragment,
	SkillWhereUniqueInput,
	useFollowSkillMutation,
	useUnfollowSkillMutation
} from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";

const Root = tw(Paper)`
	flex
	flex-col
	items-start
	gap-4
	p-4
	cursor-pointer
	hover:bg-violet-50
	sm:flex-row

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

const DescriptionContainer = tw.a`
	flex-grow
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

	const router = useRouter();
	const { status } = useSession();

	const [{ fetching: following }, followSkill] = useFollowSkillMutation();
	const [{ fetching: unfollowing }, unfollowSkill] = useUnfollowSkillMutation();

	const owner = skill.github.owner;
	const primaryLanguage = skill.github.primaryLanguage;
	const license = skill.github.licenseInfo;

	const loading: boolean = following || unfollowing;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push("/s/[skillOwner]/[skillName]", `/s/${owner.login}/${skill.name}`);
			}}
			style={style}
		>
			{owner.avatarUrl && (
				<NextLink legacyBehavior href="/s/[skillOwner]" as={`/s/${owner.login}`} passHref>
					<StyledAvatar
						border={4}
						onClick={(e) => {
							e.stopPropagation();
						}}
					>
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
					legacyBehavior
					href="/s/[skillOwner]/[skillName]"
					as={`/s/${owner.login}/${skill.name}`}
					passHref
				>
					<Anchor>
						<Name>{skill.name}</Name>
					</Anchor>
				</NextLink>
				{skill.github.description && (
					<NextLink
						legacyBehavior
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${owner.login}/${skill.name}`}
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
			{status === "authenticated" && (
				<Actions>
					<FollowButton
						disabled={loading}
						onClick={async (e) => {
							e.stopPropagation();

							const where: SkillWhereUniqueInput = {
								id: skill.id
							};

							if (skill.viewerFollowing) {
								const didSucceed = await unfollowSkill({ where })
									.then((result) => !!result.data?.unfollowSkill)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not unfollow this skill");

									return;
								}

								toast.success("You unfollowed this skill");

								return;
							}

							const didSucceed = await followSkill({ where })
								.then((result) => !!result.data?.followSkill)
								.catch(() => false);

							if (!didSucceed) {
								toast.error("Could not follow this skill");

								return;
							}

							toast.success("You followed this skill! 🎉");
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						{loading ? <Spinner /> : skill.viewerFollowing ? "Unfollow" : "Follow"}
					</FollowButton>
				</Actions>
			)}
		</Root>
	);
});

SkillFollowCard.displayName = "SkillFollowCard";
