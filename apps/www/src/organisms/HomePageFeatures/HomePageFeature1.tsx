import { LogoLeftWing } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeature1Figure } from "../HomePageFeature1Figure";
import { HomePageFeaturesWaves } from "./HomePageFeaturesWaves";

const Root = tw.div`
	relative
`;

const Section = tw.div`
	flex
	flex-col
	items-center
	justify-center
	gap-8
	py-24
	px-4
	bg-indigo-50
	2xl:flex-row
	2xl:items-end
	2xl:gap-16
	2xl:pt-64
	2xl:pb-12
`;

const Transition = tw.div`
	hidden
	flex-col-reverse
	items-stretch
	h-[576px]
	mt-[-216px]
	2xl:flex
	2xl:clip-path[url(#home-section1-clip-path)]
`;

const TransitionBg = tw.div`
	h-[360px]
	bg-indigo-50
`;

const Mask = tw.svg`
	fixed
	pointer-events-none
`;

const WavesFlipped = tw(HomePageFeaturesWaves)`
	hidden
	scale-y-[-1]
	2xl:block
`;

const LeftWing = tw(LogoLeftWing)`
	flex-shrink-0
	w-6
	2xl:w-[auto]
`;

const InfoContainer = tw.div`
	flex
	flex-row
	items-start
	gap-3
	max-width[720px]
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
	2xl:mt-3
	2xl:text-6xl
`;

const Detail = tw.p`
	text-xl
	font-medium
	2xl:text-2xl
`;

export interface HomePageFeature1Props {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature1: FC<HomePageFeature1Props> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Section>
				<InfoContainer>
					<LeftWing />
					<TextContainer>
						<Header>Pass-Through Follows</Header>
						<Detail>
							Follows on MakePurple propagate to GitHub by default. Become more
							discovered on GitHub by growing your follower count on MakePurple.
						</Detail>
					</TextContainer>
				</InfoContainer>
				<HomePageFeature1Figure />
			</Section>
			<Transition>
				<TransitionBg />
			</Transition>
			<WavesFlipped />
			<Mask
				width="1524"
				height="472"
				viewBox="0 0 1524 472"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<clipPath
					id="home-section1-clip-path"
					clipPathUnits="objectBoundingBox"
					transform="scale(0.00065616797 0.00211864406)"
				>
					<path d="M1067 302.053C836.13 399.962 265.5 461.821 0.000186648 472L-4.12636e-05 0L1524 -0.000133232L1524 195.173C1461.83 186.875 1270.5 215.752 1067 302.053Z" />
				</clipPath>
			</Mask>
		</Root>
	);
};
