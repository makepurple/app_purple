import { Anchor, Tags } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import React, { CSSProperties, FC, useMemo } from "react";
import tw from "twin.macro";
import { UserOverviewRepositoryCardRepositoryFragment } from "../../graphql";

const MAX_SKILLS = 3;

const Root = tw.div`
	flex
	flex-col
	items-start
	p-2
	cursor-pointer
	hover:bg-violet-50
`;

const Name = tw(Anchor)`
	leading-none
	font-semibold
	text-black
`;

const DescriptionContainer = tw.a`
	self-stretch
	flex-grow
`;

const Description = tw.p`
	text-sm
	text-gray-500
	line-clamp-2
`;

const Info = tw.div`
	self-stretch
	flex
	flex-wrap
	items-center
	justify-between
	gap-y-2
	gap-x-3
	text-sm
	text-black
`;

const GitHubInfo = tw.div`
	flex
	items-center
	leading-none
`;

const LanguageColor = tw.div`
	h-3
	w-3
	rounded-full
`;

export interface UserOverviewRepositoryCardProps {
	className?: string;
	repository: UserOverviewRepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const UserOverviewRepositoryCard: FC<UserOverviewRepositoryCardProps> = ({
	className,
	repository,
	style
}) => {
	const totalSkills = repository.skills.length;
	const skills = useMemo(() => repository.skills.slice(0, MAX_SKILLS), [repository]);
	const otherSkills = useMemo(() => totalSkills - skills.length, [totalSkills, skills.length]);

	const primaryLanguage = repository.github.primaryLanguage;

	return (
		<Root
			className={className}
			onClick={() => {
				window.open(repository.github.url, "_blank");
			}}
			style={style}
		>
			<Name href={repository.github.url} target="_blank" rel="noreferrer noopener">
				{repository.github.name}
			</Name>
			{!!repository.github.description && (
				<DescriptionContainer
					href={repository.github.url}
					target="_blank"
					rel="noreferrer noopener"
					tw="mt-1"
				>
					<Description>{repository.github.description}</Description>
				</DescriptionContainer>
			)}
			<Tags type="positive" tw="mt-1">
				{skills.map((skill) => (
					<NextLink
						legacyBehavior
						key={skill.id}
						href="/s/[skillOwner]/[skillName]"
						as={`/s/${skill.owner}/${skill.name}`}
						passHref
					>
						<Tags.Tag
							id={skill.id}
							onClick={(e) => {
								e.stopPropagation();
							}}
							title={`${skill.owner}/${skill.name}`}
						>
							{skill.name}
						</Tags.Tag>
					</NextLink>
				))}
				{!!otherSkills && (
					<NextLink
						legacyBehavior
						href="/[userName]"
						as={`/${repository.github.owner.login}`}
						passHref
					>
						<Tags.Tag
							id={`${repository.name}:skill-count`}
							onClick={(e) => {
								e.stopPropagation();
							}}
						>
							+{otherSkills} other{otherSkills === 1 ? "" : "s"}
						</Tags.Tag>
					</NextLink>
				)}
			</Tags>
			<Info
				onClick={(e) => {
					e.stopPropagation();
				}}
				tw="mt-1"
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
				{!!repository.github.pushedAt && (
					<span>Updated {dayjs(repository.github.pushedAt).fromNow()}</span>
				)}
			</Info>
		</Root>
	);
};
