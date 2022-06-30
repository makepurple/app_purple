import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeaturesWaves } from "./HomePageFeaturesWaves";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const SectionContainer = tw.div`
	relative
`;

const Section1 = tw.div`
	flex
	items-center
	justify-center
	bg-indigo-50
	py-72
	2xl:clip-path[url(#home-section1-clip-path)]
`;

const Section2 = tw.div`
	relative
	flex
	items-center
	justify-center
	py-72
`;

const Section3 = tw.div`
	relative
	flex
	items-center
	justify-center
	py-72
`;

const Section4 = tw.div`
	flex
	items-center
	justify-center
	bg-indigo-50
	py-72
	2xl:clip-path[url(#home-section4-clip-path)]
`;

const WavesFlipped = tw(HomePageFeaturesWaves)`
	scale-y-[-1]
`;

const Section4TopWaves = tw(HomePageFeaturesWaves)`
	top-[12px]
	bottom-[auto]
`;

const Section4BottomWaves = tw.svg`
	absolute
	left-1/2
	bottom-0
	-translate-x-1/2
	translate-y-[20%]
	w-full
	rotate-[-3deg]
	scale-x-[1.2]
	scale-y-[0.75]
`;

const Mask = tw.svg`
	fixed
	pointer-events-none
`;

export interface HomePageFeaturesProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeatures: FC<HomePageFeaturesProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<SectionContainer>
				<Section1>
					<div />
				</Section1>
				<WavesFlipped />
			</SectionContainer>
			<SectionContainer>
				<Section2>
					<div />
				</Section2>
				<HomePageFeaturesWaves />
			</SectionContainer>
			<SectionContainer>
				<Section3>
					<div />
				</Section3>
			</SectionContainer>
			<SectionContainer>
				<Section4TopWaves />
				<Section4>
					<div />
				</Section4>
				<Section4BottomWaves
					width="1511"
					height="375"
					viewBox="0 0 1511 375"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M1 1C123.263 18.3799 427.027 89.9994 663.979 237.439C900.931 384.878 1414.06 384.081 1641 365.253"
						stroke="#B2B2FF"
						strokeWidth="1.5"
					/>
				</Section4BottomWaves>
			</SectionContainer>
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
			<Mask
				width="1524"
				height="1162"
				viewBox="0 0 1524 1162"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<clipPath
					id="home-section4-clip-path"
					clipPathUnits="objectBoundingBox"
					transform="scale(0.00065616797 0.00086058519)"
				>
					<path d="M1067 208.564C850.6 71.694 265.5 12.4921 0 0V820H1524V349.101C1461.83 359.285 1283.4 345.435 1067 208.564Z" />
					<path d="M457 960.008C687.87 1076.38 1258.5 1149.9 1524 1162L1524 601L4.90442e-05 601L2.87643e-05 832.975C62.1667 823.112 253.5 857.435 457 960.008Z" />
				</clipPath>
			</Mask>
		</Root>
	);
};
