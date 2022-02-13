import {
	Anchor,
	Avatar,
	Button,
	GitHubAvatarImage,
	MaybeAnchor,
	Paper,
	Spinner
} from "@makepurple/components";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import {
	useFollowSkillMutation,
	useGetSkillInfoSideBarQuery,
	useUnfollowSkillMutation
} from "../../graphql";
import {
	ForkIcon,
	GitHubIcon,
	IssueIcon,
	LicenseIcon,
	LinkIcon,
	PeopleIcon,
	PullRequestIcon,
	StarIcon,
	TwitterIcon
} from "../../svgs";
import { NewPostButton } from "../NewPostButton";

const Root = tw(Paper)`
	p-6
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
`;

const OwnerName = tw(Anchor)`
	text-gray-500
`;

const NameDelimiter = tw.span`
	text-gray-500
`;

const SkillName = tw(Anchor)`
	text-black
	font-bold
`;

const Description = tw.p`
	text-gray-500
	line-clamp-4
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

const SocialLinks = tw.div`
	inline-flex
	gap-4
	text-indigo-800
`;

const SocialLink = tw.a`
	inline-flex
`;

const Actions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(9rem, 1fr))]
	gap-4
`;

const ConnectionsContainer = tw.div`
	flex
	flex-row
	items-start
	text-black
`;

const ConnectionsContents = tw.div`
	flex
	flex-col
	items-start
`;

const FollowAnchor = tw(Anchor)`
	text-gray-500
	[& > *]:text-gray-500
	hover:[& > *]:text-cyan-600
`;

const FollowCount = tw.span`
	text-black!
	font-semibold
`;

export interface SkillInfoSideBarProps {
	className?: string;
	skillName: string;
	skillOwner: string;
	style?: CSSProperties;
}

export const SkillInfoSideBar: FC<SkillInfoSideBarProps> = ({
	className,
	skillName,
	skillOwner,
	style
}) => {
	const { data: session, status } = useSession();

	const [{ data }] = useGetSkillInfoSideBarQuery({
		variables: {
			name: skillName,
			owner: skillOwner
		}
	});

	const [{ fetching: following }, followSkill] = useFollowSkillMutation();
	const [{ fetching: unfollowing }, unfollowSkill] = useUnfollowSkillMutation();

	const skill = data?.skill;

	if (!skill) return null;

	const github = skill.github;
	const owner = github.owner;

	const primaryLanguage = skill.github.primaryLanguage;
	const license = skill.github.licenseInfo;

	const loading: boolean = following || unfollowing;

	return (
		<Root className={className} style={style}>
			{owner.__typename === "GitHubOrganization" && (
				<StyledAvatar
					border={6}
					href={github.url}
					target="_blank"
					rel="noreferrer noopener"
				>
					<GitHubAvatarImage src={owner.avatarUrl} height={156} width={156} />
				</StyledAvatar>
			)}
			<Name>
				<NextLink href="/s/[skillOwner]" as={`/s/${skill.owner}`} passHref>
					<OwnerName>{skill.owner}</OwnerName>
				</NextLink>
				<NameDelimiter tw="mx-1">/</NameDelimiter>
				<SkillName href={github.url} target="_blank" rel="noreferrer noopener">
					{skill.name}
				</SkillName>
			</Name>
			{!!github.description && <Description tw="mt-3">{github.description}</Description>}
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
					<StyledMaybeAnchor href={license.url} target="_blank" rel="noopener noreferrer">
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
			<SocialLinks tw="mt-4">
				<SocialLink
					href={github.url}
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
			</SocialLinks>
			{status === "authenticated" && session && (
				<Actions tw="mt-4">
					<NewPostButton
						skillName={skillName}
						skillOwner={skillOwner}
						userName={session.user.name}
					>
						{({ draft }) => (draft ? "Edit Draft" : "New Post")}
					</NewPostButton>
					<Button
						disabled={loading}
						onClick={async () => {
							const nameOwner = { name: skillName, owner: skillOwner };

							skill.viewerFollowing
								? await unfollowSkill({ where: { name_owner: nameOwner } })
								: await followSkill({ where: { name_owner: nameOwner } });
						}}
						type="button"
						variant="secondary"
					>
						{skill.viewerFollowing ? "Unfollow" : "Follow"}
						{loading && <Spinner tw="ml-2" />}
					</Button>
				</Actions>
			)}
			<ConnectionsContainer tw="mt-4">
				<PeopleIcon height={24} width={24} tw="mr-2" />
				<ConnectionsContents>
					<NextLink
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${skill.owner}/${skill.name}?tab=followers`}
						passHref
					>
						<FollowAnchor tw="flex items-center">
							<span tw="whitespace-pre">
								<FollowCount>
									{FormatUtils.toGitHubFixed(skill.followers.totalCount)}
								</FollowCount>{" "}
								Followers
							</span>
						</FollowAnchor>
					</NextLink>
				</ConnectionsContents>
			</ConnectionsContainer>
		</Root>
	);
};
