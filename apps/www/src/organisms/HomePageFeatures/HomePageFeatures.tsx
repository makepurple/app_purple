import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeature1 } from "./HomePageFeature1";
import { HomePageFeature4 } from "./HomePageFeature4";
import { HomePageFeaturesWaves } from "./HomePageFeaturesWaves";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const SectionContainer = tw.div`
	relative
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

export interface HomePageFeaturesProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeatures: FC<HomePageFeaturesProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<HomePageFeature1 />
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
			<HomePageFeature4 />
		</Root>
	);
};
