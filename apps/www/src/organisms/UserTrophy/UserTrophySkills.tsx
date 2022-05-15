import { Trophy, TrophyRank } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo } from "react";
import { getTrophyFields, RankCondition } from "./getTrophyFields";

export interface UserTrophySkillsProps {
	className?: string;
	style?: CSSProperties;
	value: number;
}

export const UserTrophySkills: FC<UserTrophySkillsProps> = ({ className, style, value }) => {
	const fields = useMemo(
		(): Maybe<RankCondition> =>
			getTrophyFields(value, [
				{
					achievement: "Master of all",
					rank: TrophyRank.SSS,
					score: 30
				},
				{
					achievement: "Jack of all Trades",
					rank: TrophyRank.SS,
					score: 22
				},
				{
					achievement: "Mega Skilled",
					rank: TrophyRank.S,
					score: 16
				},
				{
					achievement: "Ultra Skilled",
					rank: TrophyRank.AAA,
					score: 11
				},
				{
					achievement: "Super Skilled",
					rank: TrophyRank.AA,
					score: 7
				},
				{
					achievement: "Highly Skilled",
					rank: TrophyRank.A,
					score: 4
				},
				{
					achievement: "Many Skills",
					rank: TrophyRank.B,
					score: 2
				},
				{
					achievement: "First Skill",
					rank: TrophyRank.C,
					score: 1
				},
				{
					achievement: "Student",
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
			title="Skills"
		/>
	);
};
