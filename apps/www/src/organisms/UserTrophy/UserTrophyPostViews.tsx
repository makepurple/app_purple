import { Trophy, TrophyRank } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo } from "react";
import { getTrophyFields, RankCondition } from "./getTrophyFields";

export interface UserTrophyPostViewsProps {
	className?: string;
	style?: CSSProperties;
	value: number;
}

export const UserTrophyPostViews: FC<UserTrophyPostViewsProps> = ({ className, style, value }) => {
	const fields = useMemo(
		(): Maybe<RankCondition> =>
			getTrophyFields(value, [
				{
					achievement: "SEO God",
					rank: TrophyRank.SSS,
					score: 1_000_000
				},
				{
					achievement: "SEO King",
					rank: TrophyRank.SS,
					score: 250_000
				},
				{
					achievement: "Spectacle",
					rank: TrophyRank.S,
					score: 100_000
				},
				{
					achievement: "Ultra Viewed",
					rank: TrophyRank.AAA,
					score: 50_000
				},
				{
					achievement: "Super Viewed",
					rank: TrophyRank.AA,
					score: 10_000
				},
				{
					achievement: "Highly Viewed",
					rank: TrophyRank.A,
					score: 2_000
				},
				{
					achievement: "Many Views",
					rank: TrophyRank.B,
					score: 500
				},
				{
					achievement: "First View",
					rank: TrophyRank.C,
					score: 1
				}
			]),
		[value]
	);

	if (!fields) return null;

	return (
		<Trophy
			className={className}
			achievement={fields.achievement}
			rank={fields.rank}
			score={value}
			style={style}
			title="Post Views"
		/>
	);
};
