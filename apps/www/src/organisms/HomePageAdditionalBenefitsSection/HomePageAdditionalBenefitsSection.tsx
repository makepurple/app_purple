import { PageContainer, Paper } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw.div`
	relative
	flex
	flex-col
	items-center
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

export interface HomePageAdditionalBenefitsSectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageAdditionalBenefitsSection: FC<HomePageAdditionalBenefitsSectionProps> = ({
	className,
	style
}) => {
	return (
		<Root className={className} style={style}>
			<Benefits>
				<BenefitCard>
					<Title>Grow your GitHub Followers</Title>
					<Info>
						Follows on MakePurple propagate to GitHub by default. Become more discovered
						on GitHub by growing your follower count on MakePurple.
					</Info>
				</BenefitCard>
				<BenefitCard>
					<Title>Your new Resume</Title>
					<Info>
						Share your MakePurple profile to potential collaborators and employers with
						your experiences, skills and other demonstrations of your knowledge.
					</Info>
				</BenefitCard>
				<BenefitCard>
					<Title>Discovery-First Activity Feed</Title>
					<Info>
						Discover new posts, snippets, people and skills through your personal feed.
						Follow developers and skills to add them to your activity feed.
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
		</Root>
	);
};
