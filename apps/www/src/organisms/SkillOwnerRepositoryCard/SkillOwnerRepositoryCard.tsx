import { Anchor, Button, MaybeAnchor, Paper, Spinner } from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	SkillOwnerRepositoryCardGitHubRepositoryFragment,
	useFollowSkillMutation,
	useUnfollowSkillMutation
} from "../../graphql";
import { ForkIcon, RepoIcon, StarIcon } from "../../svgs";

const Root = tw(Paper)`
	flex
	flex-col
	items-start
	p-3
`;

const Title = tw.div`
	flex
	flex-row
	items-center
`;

const Name = tw(Anchor)`
	leading-none
	font-semibold
`;

const DescriptionContainer = tw.div`
	flex-grow
`;

const Description = tw.p`
	text-sm
	line-clamp-4
	text-gray-500
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
	text-sm
	color[inherit]
	hover:no-underline
`;

const LanguageColor = tw.div`
	h-3
	w-3
	rounded-full
`;

const Actions = tw.div`
	self-stretch
	grid
	grid-template-columns[repeat(2, 1fr)]
	gap-3
`;

export interface SkillOwnerRepositoryCardProps {
	className?: string;
	repository: SkillOwnerRepositoryCardGitHubRepositoryFragment;
	skillOwner: string;
	style?: CSSProperties;
}

export const SkillOwnerRepositoryCard = forwardRef<HTMLDivElement, SkillOwnerRepositoryCardProps>(
	(props, ref) => {
		const { className, repository, skillOwner, style } = props;

		const [{ fetching: following }, followSkill] = useFollowSkillMutation();
		const [{ fetching: unfollowing }, unfollowSkill] = useUnfollowSkillMutation();

		const loading = following || unfollowing;

		const primaryLanguage = repository.primaryLanguage;
		const viewerFollowing = repository.skill?.viewerFollowing ?? false;

		return (
			<Root ref={ref} className={className} style={style}>
				<Title>
					<RepoIcon height={16} width={16} tw="mr-2" />
					<NextLink
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${skillOwner}/${repository.name}`}
						passHref
					>
						<Name>{repository.name}</Name>
					</NextLink>
				</Title>
				{!!repository.description && (
					<DescriptionContainer tw="mt-3">
						<Description>{repository.description}</Description>
					</DescriptionContainer>
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
					<StyledMaybeAnchor
						href={`${repository.url}/network/members`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ForkIcon height={16} width={16} tw="mr-1" />
						<span>{FormatUtils.toGitHubFixed(repository.forkCount)}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${repository.url}/stargazers`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<StarIcon height={16} width={16} tw="mr-1" />
						<span>{FormatUtils.toGitHubFixed(repository.stargazerCount)}</span>
					</StyledMaybeAnchor>
				</Info>
				<Actions tw="mt-3">
					{/**
					 * TODO
					 * @description Add this functionality
					 * @author David Lee
					 * @date February 14, 2022
					 */}
					<Button disabled={loading} size="small" type="button" variant="success">
						I know this!
					</Button>
					<Button
						disabled={loading}
						onClick={async () => {
							const nameOwner = {
								name: repository.name,
								owner: skillOwner
							};

							viewerFollowing
								? await unfollowSkill({ where: { name_owner: nameOwner } })
								: await followSkill({ where: { name_owner: nameOwner } });
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						{viewerFollowing ? "Unfollow" : "Follow"}
						{loading && <Spinner tw="text-gray-500 ml-2" />}
					</Button>
				</Actions>
			</Root>
		);
	}
);

SkillOwnerRepositoryCard.displayName = "SkillOwnerRepositoryCard";
