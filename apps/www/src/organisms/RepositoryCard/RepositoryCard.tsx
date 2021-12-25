import { Anchor, MaybeAnchor, Tags } from "@makepurple/components";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { RepositoryCardRepositoryFragment } from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";

const Root = tw.div`
	flex
	flex-col
	items-start
	py-4
	cursor-pointer
`;

const Name = tw.h2`
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

export interface RepositoryCardProps {
	className?: string;
	repository: RepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const RepositoryCard = forwardRef<HTMLDivElement, RepositoryCardProps>((props, ref) => {
	const { className, repository, style } = props;

	const primaryLanguage = repository.github.primaryLanguage;
	const license = repository.github.licenseInfo;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={() => {
				window.open(repository.github.url, "_blank");
			}}
			style={style}
		>
			<Anchor href={repository.github.url} target="_blank" rel="noopener noreferrer">
				<Name>{repository.name}</Name>
			</Anchor>
			{repository.github.description && (
				<a
					href={repository.github.url}
					target="_blank"
					rel="noopener noreferrer"
					tabIndex={-1}
					tw="focus:ring-0"
				>
					<Description tw="mt-1">{repository.github.description}</Description>
				</a>
			)}
			<Tags
				onClick={(e) => {
					e.stopPropagation();
				}}
				type="positive"
				tw="mt-3"
			>
				{repository.skills.map((skill) => (
					<Tags.Tag key={skill.id} id={skill.id.toString()}>
						{skill.name}
					</Tags.Tag>
				))}
			</Tags>
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
					href={`${repository.github.url}/network/members`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<ForkIcon height={16} width={16} tw="mr-1" />
					<span>{repository.github.forkCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				<StyledMaybeAnchor
					href={`${repository.github.url}/stargazers`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<StarIcon height={16} width={16} tw="mr-1" />
					<span>{repository.github.stargazerCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				<StyledMaybeAnchor
					href={`${repository.github.url}/issues`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<IssueIcon height={16} width={16} tw="mr-1" />
					<span>{repository.github.issueCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
				<StyledMaybeAnchor
					href={`${repository.github.url}/pulls`}
					target="_blank"
					rel="noopener noreferrer"
				>
					<PullRequestIcon height={16} width={16} tw="mr-1" />
					<span>{repository.github.pullRequestCount.toLocaleString()}</span>
				</StyledMaybeAnchor>
			</Info>
		</Root>
	);
});

RepositoryCard.displayName = "RepositoryCard";
