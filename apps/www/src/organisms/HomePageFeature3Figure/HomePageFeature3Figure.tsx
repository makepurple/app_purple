import { Paper, Tags } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { TopLanguages } from "../TopLanguages";

const desiredSkills = ["postgres", "kubernetes", "terraform", "blender", "inkscape"].map(
	(skill, i) => ({
		__typename: "Skill" as const,
		id: `DesiredSkill_${i}`,
		name: skill,
		owner: "github"
	})
);

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
	pl-6
	pb-6
`;

const Content = tw.div`
	absolute
	bottom-0
	left-0
	flex
	flex-col
	gap-4
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
