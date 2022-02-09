import React, { CSSProperties, FC, ReactNode, useMemo } from "react";
import { LeafIcon } from "./LeafIcon";
import { SmallTrophyIcon } from "./SmallTrophyIcon";
import { TrophyThemeDefault } from "./themes";
import { TrophyRank, TrophyTheme } from "./types";

export interface TrophyIconProps {
	className?: string;
	rank?: TrophyRank;
	style?: CSSProperties;
	theme?: TrophyTheme;
}

export const TrophyIcon: FC<TrophyIconProps> = ({
	className,
	rank = TrophyRank.UNKNOWN,
	style,
	theme = TrophyThemeDefault
}) => {
	const [color, rankColor, showLeaf, gradationColor] = useMemo((): [
		color: string,
		rankColor: string,
		showLeaf: boolean,
		gradationColor: ReactNode
	] => {
		switch (rank) {
			case TrophyRank.SECRET:
				return [
					theme.DEFAULT_RANK_BASE,
					theme.SECRET_RANK_TEXT,
					false,
					<>
						<stop offset="0%" stopColor={theme.SECRET_RANK_1} />
						<stop offset="50%" stopColor={theme.SECRET_RANK_2} />
						<stop offset="100%" stopColor={theme.SECRET_RANK_3} />
					</>
				];
			case TrophyRank.S:
			case TrophyRank.SS:
			case TrophyRank.SSS:
				return [
					theme.S_RANK_BASE,
					theme.S_RANK_TEXT,
					true,
					<>
						<stop offset="0%" stopColor={theme.S_RANK_BASE} />
						<stop offset="70%" stopColor={theme.S_RANK_BASE} />
						<stop offset="100%" stopColor={theme.S_RANK_SHADOW} />
					</>
				];
			case TrophyRank.A:
			case TrophyRank.AA:
			case TrophyRank.AAA:
				return [
					theme.A_RANK_BASE,
					theme.A_RANK_TEXT,
					true,
					<>
						<stop offset="0%" stopColor={theme.A_RANK_BASE} />
						<stop offset="70%" stopColor={theme.A_RANK_BASE} />
						<stop offset="100%" stopColor={theme.A_RANK_SHADOW} />
					</>
				];
			case TrophyRank.B:
				return [
					theme.B_RANK_BASE,
					theme.B_RANK_TEXT,
					false,
					<>
						<stop offset="0%" stopColor={theme.B_RANK_BASE} />
						<stop offset="70%" stopColor={theme.B_RANK_BASE} />
						<stop offset="100%" stopColor={theme.B_RANK_SHADOW} />
					</>
				];
			default:
				return [
					theme.DEFAULT_RANK_BASE,
					theme.DEFAULT_RANK_TEXT,
					false,
					<>
						<stop offset="0%" stopColor={theme.DEFAULT_RANK_BASE} />
						<stop offset="50%" stopColor={theme.DEFAULT_RANK_BASE} />
						<stop offset="100%" stopColor={theme.DEFAULT_RANK_SHADOW} />
					</>
				];
		}
	}, [rank, theme]);

	const trophyContents = useMemo(() => {
		return (
			<>
				<path d="M7 10h2v4H7v-4z" />
				<path d="M10 11c0 .552-.895 1-2 1s-2-.448-2-1 .895-1 2-1 2 .448 2 1z" />
				<path
					fillRule="evenodd"
					d="M12.5 3a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm-6-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-3 2a3 3 0 1 1 6 0 3 3 0 0 1-6 0z"
				/>
				<path d="M3 1h10c-.495 3.467-.5 10-5 10S3.495 4.467 3 1zm0 15a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1H3zm2-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1H5z" />
				<circle cx={8} cy={6} r={4} fill={theme.ICON_CIRCLE} />
				<text x={6} y={8} fontFamily="Courier, Monospace" fontSize={7} fill={rankColor}>
					{rank.slice(0, 1)}
				</text>
			</>
		);
	}, [rank, rankColor, theme]);

	const leftTrophy = useMemo(() => {
		if (rank === TrophyRank.SECRET || rank === TrophyRank.UNKNOWN) return null;

		return rank.length === 3 ? (
			<SmallTrophyIcon color={color} x={7}>
				{trophyContents}
			</SmallTrophyIcon>
		) : null;
	}, [color, rank, trophyContents]);

	const rightTrophy = useMemo(() => {
		if (rank === TrophyRank.SECRET || rank === TrophyRank.UNKNOWN) return null;

		return rank.length >= 2 ? (
			<SmallTrophyIcon color={color} x={68}>
				{trophyContents}
			</SmallTrophyIcon>
		) : null;
	}, [color, rank, trophyContents]);

	return (
		<>
			{showLeaf && <LeafIcon fill={theme.LAUREL} />}
			{leftTrophy}
			{rightTrophy}
			<defs>
				<linearGradient id={rank} gradientTransform="rotate(45)">
					{gradationColor}
				</linearGradient>
			</defs>
			<svg
				className={className}
				style={style}
				x={28}
				y={20}
				width={100}
				height={100}
				viewBox="0 0 30 30"
				fill={`url(#${rank})`}
				xmlns="http://www.w3.org/2000/svg"
			>
				{trophyContents}
			</svg>
		</>
	);
};
