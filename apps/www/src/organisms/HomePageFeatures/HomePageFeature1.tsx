import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeaturesWaves } from "./HomePageFeaturesWaves";

const Root = tw.div`
	relative
`;

const Section = tw.div`
	flex
	items-center
	justify-center
	bg-indigo-50
	py-72
	2xl:clip-path[url(#home-section1-clip-path)]
`;

const Mask = tw.svg`
	fixed
	pointer-events-none
`;

const WavesFlipped = tw(HomePageFeaturesWaves)`
	scale-y-[-1]
`;

export interface HomePageFeature1Props {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature1: FC<HomePageFeature1Props> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Section>
				<div />
			</Section>
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
