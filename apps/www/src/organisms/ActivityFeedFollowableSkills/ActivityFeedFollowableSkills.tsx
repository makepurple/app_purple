import { Brand, Button, Divider, Paper } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC, Fragment, useMemo } from "react";
import tw from "twin.macro";
import { useGetFollowableSkillsQuery } from "../../graphql";
import { ActivityFeedFollowableSkillCard } from "../ActivityFeedFollowableSkillCard";

const MAX_SKILLS = 5;

const Root = tw(Paper)`
	flex
	flex-col
	items-stretch
`;

const Title = tw.h1`
	flex
	pt-6
	px-6
	text-xl
	font-bold
	leading-none
`;

const Description = tw.p`
	px-6
	text-base
	text-gray-500
	leading-snug
`;

const Skills = tw.ol`
	flex
	flex-col
	items-stretch
`;

const ViewAllContainer = tw.div`
	px-6
	pb-6
`;

export interface ActivityFeedFollowableSkillsProps {
	className?: string;
	style?: CSSProperties;
}

export const ActivityFeedFollowableSkills: FC<ActivityFeedFollowableSkillsProps> = ({
	className,
	style
}) => {
	const [result] = useGetFollowableSkillsQuery({
		requestPolicy: "cache-first"
	});

	console.log(result);

	const { data } = result;

	const skills = useMemo(() => data?.followableSkills.nodes.slice(0, MAX_SKILLS) ?? [], [data]);

	return (
		<Root className={className} style={style}>
			<Title>Popular Skills</Title>
			<Description tw="mt-4">
				Popular skills known by developers from the <Brand tw="text-base" /> community.
			</Description>
			<Skills tw="mt-3">
				{skills.map((skill, i) => (
					<Fragment key={skill.id}>
						{!!i && <Divider />}
						<ActivityFeedFollowableSkillCard index={i} skill={skill} />
					</Fragment>
				))}
			</Skills>
			<ViewAllContainer tw="mt-3">
				<NextLink href="/skills" passHref>
					<Button as="a">View All</Button>
				</NextLink>
			</ViewAllContainer>
		</Root>
	);
};
