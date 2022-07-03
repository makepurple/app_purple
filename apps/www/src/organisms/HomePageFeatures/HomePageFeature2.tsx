import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw.div`
	relative
`;

const Section = tw.div`
	relative
	flex
	items-center
	justify-center
	py-72
`;

export interface HomePageFeature2Props {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature2: FC<HomePageFeature2Props> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Section>
				<div />
			</Section>
		</Root>
	);
};
