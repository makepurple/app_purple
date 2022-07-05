import { Avatar, GitHubAvatarImage, Paper, Tags } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";
import { TopLanguages } from "../TopLanguages";

const desiredSkills = ["kubernetes", "terraform", "blender"].map((skill, i) => ({
	__typename: "Skill" as const,
	id: `DesiredSkill_${i}`,
	name: skill,
	owner: "github"
}));

const skills = ["next.js", "prisma", "nexus", "urql", "typeScript", "storybook", "tailwindcss"].map(
	(skill, i) => ({
		__typename: "Skill" as const,
		id: `Skill_${i}`,
		name: skill,
		owner: "github"
	})
);

const Root = tw.div`
	relative
	pl-2
	pb-6
	sm:pl-12
`;

const Content = tw.div`
	absolute
	bottom-0
	left-0
	right-2
	flex
	flex-col
	gap-4
	sm:right-6
`;

const MockSidebar = styled(Paper)`
	${tw`
		flex
		flex-col
		items-start
		h-[700px]
		p-6
		sm:h-[640px]
	`}

	@media (min-width: 360px) {
		${tw`
			h-[740px]
		`}
	}
`;

const UserName = tw.div`
	mt-3
`;

const DisplayName = tw.div`
	text-2xl
	leading-none
	font-bold
	text-black
`;

const SecondaryName = tw.div`
	text-lg
	leading-none
	text-gray-500
`;

const Bio = tw.p`
	text-gray-500
	line-clamp-4
`;

const SubTitle = tw.div`
	text-xl
	leading-none
	font-semibold
	text-black
	not-first:mt-6
`;

const TopLanguagesContainer = tw(Paper)`
	p-6
`;

const SkillsContainer = tw(Paper)`
	p-6
`;

export interface HomePageFeature3FigureProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature3Figure: FC<HomePageFeature3FigureProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<MockSidebar>
				<Avatar border={6}>
					<GitHubAvatarImage
						alt="leedavidcs"
						src="https://avatars.githubusercontent.com/u/15151154"
						height={156}
						width={156}
					/>
				</Avatar>
				<UserName tw="mt-3">
					<DisplayName>David Lee</DisplayName>
					<SecondaryName tw="mt-1">leedavidcs</SecondaryName>
				</UserName>
				<Bio tw="mt-3">I learn things and work on MakePurple</Bio>
			</MockSidebar>
			<Content>
				<TopLanguagesContainer>
					<SubTitle>Most Used Languages</SubTitle>
					<TopLanguages
						topLanguages={{
							__typename: "TopLanguages",
							totalCount: 8,
							totalSize: 1528935,
							nodes: [
								{
									__typename: "TopLanguage",
									name: "TypeScript",
									color: "#2b7489",
									size: 1411282
								},
								{
									__typename: "TopLanguage",
									name: "JavaScript",
									color: "#f1e05a",
									size: 73148
								},
								{
									__typename: "TopLanguage",
									name: "CSS",
									color: "#563d7c",
									size: 26766
								}
							]
						}}
						tw="mt-4"
					/>
				</TopLanguagesContainer>
				<SkillsContainer>
					<SubTitle>Highlighted Skills</SubTitle>
					<Tags type="positive" tw="mt-4">
						{skills.map((skill) => (
							<Tags.Tag
								key={skill.id}
								id={skill.id.toString()}
								title={`${skill.owner}/${skill.name}`}
							>
								{skill.name}
							</Tags.Tag>
						))}
					</Tags>
					<SubTitle>Currently Learning</SubTitle>
					<Tags type="negative" tw="mt-4">
						{desiredSkills.map((skill) => (
							<Tags.Tag
								key={skill.id}
								id={skill.id.toString()}
								title={`${skill.owner}/${skill.name}`}
							>
								{skill.name}
							</Tags.Tag>
						))}
					</Tags>
				</SkillsContainer>
			</Content>
		</Root>
	);
};
