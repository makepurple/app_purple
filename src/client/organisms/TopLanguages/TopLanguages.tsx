import type { TopLanguages as _TopLanguages } from "@/client/graphql";
import { Legend, ProportionBar } from "@/client/molecules";
import React, { CSSProperties, FC, useMemo } from "react";
import tw from "twin.macro";

const MIN_SIZE_THRESHOLD = 0.01;
const MAX_TOP_LANGUAGES = 10;

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const StyledLegend = tw(Legend)`
	mt-3
`;

export interface TopLanguagesProps {
	className?: string;
	style?: CSSProperties;
	topLanguages: _TopLanguages;
}

export const TopLanguages: FC<TopLanguagesProps> = ({
	className,
	style,
	topLanguages: _topLanguages
}) => {
	const { totalSize } = _topLanguages;

	const topLanguages = useMemo(
		() =>
			_topLanguages.nodes
				.filter((topLanguage) => topLanguage.size > MIN_SIZE_THRESHOLD * totalSize)
				.slice(0, MAX_TOP_LANGUAGES),
		[_topLanguages, totalSize]
	);

	if (topLanguages.length === 0) return null;

	return (
		<Root className={className} style={style}>
			<ProportionBar>
				{topLanguages.map((topLanguage) => (
					<ProportionBar.Item
						key={topLanguage.name}
						color={topLanguage.color}
						value={topLanguage.size}
					>
						{topLanguage.name}
					</ProportionBar.Item>
				))}
			</ProportionBar>
			<StyledLegend>
				{topLanguages.map((topLanguage) => (
					<Legend.Item
						key={topLanguage.name}
						color={topLanguage.color}
						value={topLanguage.size}
					>
						{topLanguage.name}
					</Legend.Item>
				))}
			</StyledLegend>
		</Root>
	);
};
