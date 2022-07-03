import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeature1 } from "./HomePageFeature1";
import { HomePageFeature2 } from "./HomePageFeature2";
import { HomePageFeature3 } from "./HomePageFeature3";
import { HomePageFeature4 } from "./HomePageFeature4";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface HomePageFeaturesProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeatures: FC<HomePageFeaturesProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<HomePageFeature1 />
			<HomePageFeature2 />
			<HomePageFeature3 />
			<HomePageFeature4 />
		</Root>
	);
};
