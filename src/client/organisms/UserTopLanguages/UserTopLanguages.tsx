import { Typography } from "@/client/atoms";
import { TopLanguage } from "@/client/graphql";
import { Legend, ProportionBar } from "@/client/molecules";
import React, { CSSProperties, FC, useMemo } from "react";
import { styled } from "twin.macro";

const MIN_SIZE_THRESHOLD = 0.01;
const MAX_TOP_LANGUAGES = 10;

const Root = styled.div`
	display: flex;
	flex-direction: column;
	align-items: stretch;
`;

const Header = styled(Typography)`
	font-size: 1.5rem;
	font-weight: 600;
`;

const StyledProportionBar = styled(ProportionBar)`
	margin-top: 1rem;
`;

const StyledLegend = styled(Legend)`
	margin-top: 0.75rem;
`;

export interface UserTopLanguagesProps {
	className?: string;
	style?: CSSProperties;
	topLanguages: readonly TopLanguage[];
	totalCount: number;
	totalSize: number;
}

export const UserTopLanguages: FC<UserTopLanguagesProps> = ({
	className,
	style,
	topLanguages: _topLanguages = [],
	totalSize
}) => {
	const topLanguages = useMemo(
		() =>
			_topLanguages
				.filter((topLanguage) => topLanguage.size > MIN_SIZE_THRESHOLD * totalSize)
				.slice(0, MAX_TOP_LANGUAGES),
		[_topLanguages, totalSize]
	);

	if (topLanguages.length === 0) return null;

	return (
		<Root className={className} style={style}>
			<Header>Most Used Languages</Header>
			<StyledProportionBar>
				{topLanguages.map((topLanguage) => (
					<ProportionBar.Item
						key={topLanguage.name}
						color={topLanguage.color}
						value={topLanguage.size}
					>
						{topLanguage.name}
					</ProportionBar.Item>
				))}
			</StyledProportionBar>
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
