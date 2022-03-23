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
import { dayjs, FormatUtils } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import {
	SkillWhereUniqueInput,
	useAddDesiredSkillMutation,
	useAddSkillMutation,
	useFollowSkillMutation,
	useGetSkillInfoSideBarQuery,
	useRemoveDesiredSkillMutation,
	useRemoveSkillMutation,
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
	p-4
	sm:p-6
`;

const TopContainer = tw.div`
	flex
	items-start
	gap-4
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	self-start
	rounded-2xl
`;

const SkillActions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
	[& > *]:px-0
`;

const Name = tw.h1`
	mt-3
	text-2xl
	leading-none
	font-medium
	truncate
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

	const [{ data }, reexecuteQuery] = useGetSkillInfoSideBarQuery({
		variables: {
			name: skillName,
			owner: skillOwner
		}
	});

	const [{ fetching: following }, followSkill] = useFollowSkillMutation();
	const [{ fetching: unfollowing }, unfollowSkill] = useUnfollowSkillMutation();

	const [{ fetching: addingSkill }, addSkill] = useAddSkillMutation();
	const [{ fetching: addingDesired }, addDesired] = useAddDesiredSkillMutation();

	const [{ fetching: removingSkill }, removeSkill] = useRemoveSkillMutation();
	const [{ fetching: removingDesired }, removeDesired] = useRemoveDesiredSkillMutation();

	const adding = addingSkill || addingDesired;
	const removing = removingSkill || removingDesired;

	const repository = data?.github.repository;
	const skill = repository?.skill;

	if (!repository) return null;

	const owner = repository.owner;

	const primaryLanguage = repository.primaryLanguage;
	const license = repository.licenseInfo;

	const viewerFollowing = skill?.viewerFollowing ?? false;
	const followerCount = skill?.followers.totalCount ?? 0;

	const shouldRemoveSkill = skill?.viewerDesiredSkill || skill?.viewerSkill;

	const loading: boolean = following || unfollowing || adding || removing;

	return (
		<Root className={className} style={style}>
			<TopContainer>
				{owner.__typename === "GitHubOrganization" && (
					<StyledAvatar
						border={6}
						href={repository.url}
						target="_blank"
						rel="noreferrer noopener"
					>
						<GitHubAvatarImage src={owner.avatarUrl} height={156} width={156} />
					</StyledAvatar>
				)}
			</TopContainer>
			<Name>
				<NextLink href="/s/[skillOwner]" as={`/s/${owner.login}`} passHref>
					<OwnerName>{owner.login}</OwnerName>
				</NextLink>
				<NameDelimiter tw="mx-1">/</NameDelimiter>
				<SkillName href={repository.url} target="_blank" rel="noreferrer noopener">
					{repository.name}
				</SkillName>
			</Name>
			<SkillActions tw="mt-3">
				{shouldRemoveSkill ? (
					<Button
						disabled={removing}
						onClick={async () => {
							const nameOwner = {
								name: skillName,
								owner: skillOwner
							};

							const where: SkillWhereUniqueInput = { name_owner: nameOwner };

							const didRemove = skill.viewerSkill
								? await removeSkill({ where })
										.then((result) => !!result.data?.removeSkill)
										.catch(() => false)
								: false;

							const didRemoveDesired = skill.viewerDesiredSkill
								? await removeDesired({ where })
										.then((result) => !!result.data?.removeDesiredSkill)
										.catch(() => false)
								: false;

							if (!didRemove && !didRemoveDesired) {
								toast.error("Could not remove this skill from your profile");

								return;
							}

							toast.success("Skill successfully removed from your profile");

							reexecuteQuery({ requestPolicy: "network-only" });
						}}
						size="small"
						type="button"
						variant="alert"
					>
						<span>Remove Skill</span>
						{removing && <Spinner tw="ml-2" />}
					</Button>
				) : (
					<>
						<Button
							disabled={adding}
							onClick={async () => {
								const nameOwner = {
									name: skillName,
									owner: skillOwner
								};

								const didSucceed = await addSkill({
									where: { name_owner: nameOwner }
								})
									.then((result) => !!result.data?.addSkill)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not add skill to profile");

									return;
								}

								toast.success("Skill was added to your profile! 🎉");

								reexecuteQuery({ requestPolicy: "network-only" });
							}}
							size="small"
							type="button"
							variant="success"
						>
							<span>I know this!</span>
							{addingSkill && <Spinner tw="ml-2" />}
						</Button>
						<Button
							disabled={adding}
							onClick={async () => {
								const nameOwner = {
									name: skillName,
									owner: skillOwner
								};

								const didSucceed = await addDesired({
									where: { name_owner: nameOwner }
								})
									.then((result) => !!result.data?.addDesiredSkill)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not add skill to profile");

									return;
								}

								toast.success("Skill was added to your profile! 🎉");

								reexecuteQuery({ requestPolicy: "network-only" });
							}}
							size="small"
							type="button"
							variant="secondary"
						>
							<span>I&apos;m learning</span>
							{addingDesired && <Spinner tw="ml-2" />}
						</Button>
					</>
				)}
			</SkillActions>
			{!!repository.description && (
				<Description tw="mt-3">{repository.description}</Description>
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
					<StyledMaybeAnchor href={license.url} target="_blank" rel="noopener noreferrer">
						<LicenseIcon height={16} width={16} tw="mr-1" />
						<span>{license.spdxId ?? license.nickname ?? license.name}</span>
					</StyledMaybeAnchor>
				)}
				<StyledMaybeAnchor
					href={`${repository.url}/network/members`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ForkIcon height={16} width={16} tw="mr-1" />
					<span>{repository.forkCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				<StyledMaybeAnchor
					href={`${repository.url}/stargazers`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<StarIcon height={16} width={16} tw="mr-1" />
					<span>{repository.stargazerCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				<StyledMaybeAnchor
					href={`${repository.url}/issues`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<IssueIcon height={16} width={16} tw="mr-1" />
					<span>{repository.issueCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				<StyledMaybeAnchor
					href={`${repository.url}/pulls`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<PullRequestIcon height={16} width={16} tw="mr-1" />
					<span>{repository.pullRequestCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				{!!repository.pushedAt && (
					<span>Updated {dayjs(repository.pushedAt).fromNow()}</span>
				)}
			</Info>
			<SocialLinks tw="mt-4">
				<SocialLink
					href={repository.url}
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
				<>
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
								const where: SkillWhereUniqueInput = {
									name_owner: {
										name: repository.name,
										owner: skillOwner
									}
								};

								if (viewerFollowing) {
									await unfollowSkill({ where });

									return;
								}

								const didSucceed = await followSkill({ where })
									.then((result) => !!result.data?.followSkill)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not follow this skill");

									reexecuteQuery({ requestPolicy: "network-only" });

									return;
								}

								toast.success("You followed this skill! 🎉");

								reexecuteQuery({ requestPolicy: "network-only" });
							}}
							type="button"
							variant="secondary"
						>
							{viewerFollowing ? "Unfollow" : "Follow"}
							{loading && <Spinner tw="ml-2" />}
						</Button>
					</Actions>
				</>
			)}
			<ConnectionsContainer tw="mt-4">
				<PeopleIcon height={24} width={24} tw="mr-2" />
				<ConnectionsContents>
					<NextLink
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${owner.login}/${repository.name}?tab=followers`}
						passHref
					>
						<FollowAnchor tw="flex items-center">
							<span tw="whitespace-pre">
								<FollowCount>
									{FormatUtils.toGitHubFixed(followerCount)}
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
