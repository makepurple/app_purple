import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.svg`
	${tw`
		w-full
	`}

	@media (min-width: 1980px) {
		${tw`
			hidden
		`}
	}
`;

export interface HomePageFeaturesWaveProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeaturesWave: FC<HomePageFeaturesWaveProps> = ({ className, style }) => {
	return (
		<Root
			className={className}
			width="1512"
			height="194"
			viewBox="0 0 1512 194"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={style}
		>
			<path
				d="M-20.547 48.4962C135.311 11.8052 526.592 -38.2579 844.859 55.0168C1242.69 171.61 1263.56 199.604 1523.17 190.818"
				stroke="#B2B2FF"
				strokeWidth="1.5"
			/>
		</Root>
	);
};
