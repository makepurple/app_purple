import { Trophy, TrophyRank } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo } from "react";
import { getTrophyFields, RankCondition } from "./getTrophyFields";

export interface UserTrophyFollowersProps {
	className?: string;
	style?: CSSProperties;
	value: number;
}

export const UserTrophyFollowers: FC<UserTrophyFollowersProps> = ({ className, style, value }) => {
	const fields = useMemo(
		(): Maybe<RankCondition> =>
			getTrophyFields(value, [
				{
					achievement: "Super Celebrity",
					rank: TrophyRank.SSS,
					score: 1_000
				},
				{
					achievement: "Ultra Celebrity",
					rank: TrophyRank.SS,
					score: 400
				},
				{
					achievement: "Celebrity",
					rank: TrophyRank.S,
					score: 200
				},
				{
					achievement: "Famous User",
					rank: TrophyRank.AAA,
					score: 100
				},
				{
					achievement: "Active User",
					rank: TrophyRank.AA,
					score: 50
				},
				{
					achievement: "Dynamic User",
					rank: TrophyRank.A,
					score: 20
				},
				{
					achievement: "Many Friends",
					rank: TrophyRank.B,
					score: 10
				},
				{
					achievement: "First Friend",
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
			title="Followers"
		/>
	);
};
