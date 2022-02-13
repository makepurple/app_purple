import { Trophy, TrophyRank } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo } from "react";
import { getTrophyFields, RankCondition } from "./getTrophyFields";

export interface UserTrophyUpvotesProps {
	className?: string;
	style?: CSSProperties;
	value: number;
}

export const UserTrophyUpvotes: FC<UserTrophyUpvotesProps> = ({ className, style, value }) => {
	const fields = useMemo(
		(): Maybe<RankCondition> =>
			getTrophyFields(value, [
				{
					achievement: "Crowd Favorite",
					rank: TrophyRank.SSS,
					score: 1_000_000
				},
				{
					achievement: "Giga Upvoted",
					rank: TrophyRank.SS,
					score: 250_000
				},
				{
					achievement: "Mega Upvoted",
					rank: TrophyRank.S,
					score: 100_000
				},
				{
					achievement: "Ultra Upvoted",
					rank: TrophyRank.AAA,
					score: 50_000
				},
				{
					achievement: "Super Upvoted",
					rank: TrophyRank.AA,
					score: 10_000
				},
				{
					achievement: "Highly Upvoted",
					rank: TrophyRank.A,
					score: 2_000
				},
				{
					achievement: "Middle Upvoted",
					rank: TrophyRank.B,
					score: 500
				},
				{
					achievement: "First Upvote",
					rank: TrophyRank.C,
					score: 1
				},
				{
					achievement: "Neutral",
					rank: TrophyRank.UNKNOWN,
					score: 0
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
			title="Karma"
		/>
	);
};
