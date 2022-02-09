import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";
import { Paper } from "../../atoms";
import { TrophyThemeDefault } from "./themes";
import { TrophyIcon } from "./TrophyIcon";
import { TrophyRank, TrophyTheme } from "./types";

const SVG_SIZE = 110;

const Root = styled(Paper)<{ $bg: string }>`
	${tw`
		inline-flex
		items-center
		justify-center
		rounded-md
		shadow
	`}
	background-color: ${({ $bg }) => $bg};
`;

export interface TrophyProps {
	className?: string;
	rank: TrophyRank;
	score: number | string;
	style?: CSSProperties;
	subTitle: string;
	theme?: TrophyTheme;
	title: string;
}

export const Trophy: FC<TrophyProps> = ({
	className,
	rank,
	score,
	style,
	subTitle,
	theme = TrophyThemeDefault,
	title
}) => {
	const x = 0;
	const y = 0;
	const height = SVG_SIZE;
	const width = SVG_SIZE;

	return (
		<Root className={className} style={style} $bg={theme.BACKGROUND}>
			<svg
				x={x}
				y={y}
				width={width}
				height={height}
				viewBox={`0 0 ${width} ${height}`}
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<TrophyIcon rank={rank} theme={theme} />
				<text
					x="50%"
					y={18}
					textAnchor="middle"
					fontFamily="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
					fontWeight="bold"
					fontSize={13}
					fill={theme.TITLE}
				>
					{title}
				</text>
				<text
					x="50%"
					y={85}
					textAnchor="middle"
					fontFamily="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
					fontWeight="bold"
					fontSize={10.5}
					fill={theme.TEXT}
				>
					{subTitle}
				</text>
				<text
					x="50%"
					y={97}
					textAnchor="middle"
					fontFamily="Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji"
					fontWeight="bold"
					fontSize={10}
					fill={theme.TEXT}
				>
					{score}
				</text>
			</svg>
		</Root>
	);
};
