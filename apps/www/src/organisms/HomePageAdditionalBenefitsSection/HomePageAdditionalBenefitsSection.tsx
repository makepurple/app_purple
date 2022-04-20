import { PageContainer, Paper } from "@makepurple/components";
import ms from "ms";
import React, { CSSProperties, memo } from "react";
import tw from "twin.macro";
import { HomePage3dSkill } from "../HomePage3dSkill";

const Root = tw.div`
	relative
	flex
	items-stretch
	justify-center
	w-screen
	max-w-full
	pt-24
	pb-28
`;

const Benefits = tw(PageContainer)`
	grid
	grid-template-columns[1fr]
	auto-rows-fr
	gap-6
	max-width[980px]
	z-[1]
	md:grid-template-columns[1fr 1fr]
`;

const BenefitCard = tw(Paper)`
	flex
	flex-col
	items-center
	gap-4
	py-10
	px-14
`;

const Title = tw.h2`
	text-2xl
	font-bold
	text-center
`;

const Info = tw.p`
	text-lg
	leading-snug
	text-gray-600
	font-medium
	text-center
`;

const SkillsSection = tw.div`
	relative
	z-0
`;

const SkillsLeft = tw(SkillsSection)`
	-right-16
	sm:-right-24
	md:-right-20
	lg:-right-12
	xl:right-12
`;

const SkillsRight = tw(SkillsSection)`
	-left-16
	sm:-left-24
	md:-left-20
	lg:-left-12
	xl:left-12
`;

const SkillsContainer = tw.div`
	absolute
	inset-y-0
	w-56
	z-0
`;

const SkillsContainerLeft = tw(SkillsContainer)`
	right-0
`;

const SkillsContainerRight = tw(SkillsContainer)`
	left-0
`;

const Skills = tw.div`
	relative
	h-full
	w-full
`;

const SkillTailwind = tw(HomePage3dSkill)`
	absolute
	top-[5rem]
	right-1/3
	-translate-x-1/2
`;

const SkillNextJs = tw(HomePage3dSkill)`
	absolute
	top-[44%]
	right-2/3
	-translate-x-1/2
`;

const SkillUrql = tw(HomePage3dSkill)`
	absolute
	top-[84%]
	right-1/4
	-translate-x-1/2
`;

const SkillPrisma = tw(HomePage3dSkill)`
	absolute
	top-[5rem]
	left-1/3
	-translate-x-1/2
`;

const SkillApolloServer = tw(HomePage3dSkill)`
	absolute
	top-[61%]
	left-2/3
	-translate-x-1/2
`;

const SkillNexus = tw(HomePage3dSkill)`
	absolute
	top-[88%]
	left-1/4
	-translate-x-1/2
`;

export interface HomePageAdditionalBenefitsSectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageAdditionalBenefitsSection = memo<HomePageAdditionalBenefitsSectionProps>(
	(props) => {
		const { className, style } = props;

		return (
			<Root className={className} style={style}>
				<SkillsLeft>
					<SkillsContainerLeft>
						<Skills>
							<SkillTailwind speed={ms("15s")} width={116}>
								tailwindcss
							</SkillTailwind>
							<SkillNextJs
								direction={[-0.2, -0.5, -0.7]}
								speed={ms("18s")}
								width={72}
							>
								next.js
							</SkillNextJs>
							<SkillUrql direction={[0.8, -0.3, 0.3]} speed={ms("12s")} width={56}>
								urql
							</SkillUrql>
						</Skills>
					</SkillsContainerLeft>
				</SkillsLeft>
				<Benefits>
					<BenefitCard>
						<Title>Grow your GitHub Followers</Title>
						<Info>
							Follows on MakePurple propagate to GitHub by default. Become more
							discovered on GitHub by growing your follower count on MakePurple.
						</Info>
					</BenefitCard>
					<BenefitCard>
						<Title>Your new Resume</Title>
						<Info>
							Share your MakePurple profile to potential collaborators and employers
							with your experiences, skills and other demonstrations of your
							knowledge.
						</Info>
					</BenefitCard>
					<BenefitCard>
						<Title>Discovery-First Activity Feed</Title>
						<Info>
							Discover new posts, snippets, people and skills through your personal
							feed. Follow developers and skills to add them to your activity feed.
						</Info>
					</BenefitCard>
					<BenefitCard>
						<Title>And more to come...</Title>
						<Info>
							MakePurple only touches the surface of developer discoverability. More
							features to come, as more becomes learned.
						</Info>
					</BenefitCard>
				</Benefits>
				<SkillsRight>
					<SkillsContainerRight>
						<Skills>
							<SkillPrisma direction={[0.3, -0.5, 0.2]} speed={ms("14s")} width={72}>
								prisma
							</SkillPrisma>
							<SkillApolloServer
								direction={[0, -0.8, 0.2]}
								speed={ms("18s")}
								width={132}
							>
								apollo-server
							</SkillApolloServer>
							<SkillNexus direction={[0.7, 0.3, -0.8]} speed={ms("16s")} width={64}>
								nexus
							</SkillNexus>
						</Skills>
					</SkillsContainerRight>
				</SkillsRight>
			</Root>
		);
	}
);

HomePageAdditionalBenefitsSection.displayName = "HomePageAdditionalBenefitsSection";
