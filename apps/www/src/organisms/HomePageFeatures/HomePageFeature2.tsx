import { LogoRightWing } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeature2Figure } from "../HomePageFeature2Figure";

const Root = tw.div`
	relative
`;

const Section = tw.div`
	flex
	flex-col-reverse
	items-center
	justify-center
	gap-8
	py-24
	px-4
	2xl:flex-row
	2xl:items-center
	2xl:gap-16
	2xl:py-24
`;

const RightWing = tw(LogoRightWing)`
	flex-shrink-0
	w-6
	2xl:w-[auto]
`;

const InfoContainer = tw.div`
	flex
	flex-row
	items-start
	gap-3
	max-width[548px]
	2xl:gap-6
`;

const TextContainer = tw.div`
	flex
	flex-col
	items-start
	gap-5
`;

const Header = tw.h2`
	font-bold
	mt-5
	text-4xl
	text-right
	2xl:mt-3
	2xl:text-6xl
`;

const Detail = tw.p`
	text-xl
	font-medium
	2xl:text-2xl
`;

const Figure = tw(HomePageFeature2Figure)`
	max-w-[540px]
`;

export interface HomePageFeature2Props {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature2: FC<HomePageFeature2Props> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Section>
				<Figure />
				<InfoContainer>
					<TextContainer>
						<Header>Activity Feed for Discoverability</Header>
						<Detail>
							Discover new posts, snippets, people and skills through your personal
							feed. Follow developers and skills to add them to your activity feed.
						</Detail>
					</TextContainer>
					<RightWing />
				</InfoContainer>
			</Section>
		</Root>
	);
};
