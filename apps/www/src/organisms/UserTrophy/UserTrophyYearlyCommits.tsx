import { Trophy, TrophyRank } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo } from "react";
import { getTrophyFields, RankCondition } from "./getTrophyFields";

export interface UserTrophyYearlyCommitsProps {
	className?: string;
	style?: CSSProperties;
	value: number;
}

export const UserTrophyYearlyCommits: FC<UserTrophyYearlyCommitsProps> = ({
	className,
	style,
	value
}) => {
	const fields = useMemo(
		(): Maybe<RankCondition> =>
			getTrophyFields(value, [
				{
					achievement: "God Committer",
					rank: TrophyRank.SSS,
					score: 4_000
				},
				{
					achievement: "Deep Committer",
					rank: TrophyRank.SS,
					score: 3_000
				},
				{
					achievement: "Super Committer",
					rank: TrophyRank.S,
					score: 2_000
				},
				{
					achievement: "Ultra Committer",
					rank: TrophyRank.AAA,
					score: 1_000
				},
				{
					achievement: "Super Committer",
					rank: TrophyRank.AA,
					score: 500
				},
				{
					achievement: "High Committer",
					rank: TrophyRank.A,
					score: 100
				},
				{
					achievement: "Middle Committer",
					rank: TrophyRank.B,
					score: 10
				},
				{
					achievement: "First Commit",
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
			title="Commits"
		/>
	);
};
