import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { HomePageFeaturesWave } from "./HomePageFeaturesWave";

const Root = tw.div`
	absolute
	inset-x-0
	bottom-[84px]
	w-full
	z-10
	rotate-[-2deg]
`;

const RelativeContainer = tw.div`
	relative
	w-full
`;

const Wave1 = tw(HomePageFeaturesWave)`
	absolute
	left-1/2
	-translate-x-1/2
	scale-[1.2]
`;

const Wave2 = tw(HomePageFeaturesWave)`
	absolute
	left-1/2
	-translate-x-1/2
	scale-[1.2]
	rotate-[3deg]
`;

export interface HomePageFeaturesWavesProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeaturesWaves: FC<HomePageFeaturesWavesProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<RelativeContainer>
				<Wave1 />
				<Wave2 />
			</RelativeContainer>
		</Root>
	);
};
