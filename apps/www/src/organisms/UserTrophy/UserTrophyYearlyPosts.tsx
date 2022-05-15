import { Trophy, TrophyRank } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo } from "react";
import { getTrophyFields, RankCondition } from "./getTrophyFields";

export interface UserTrophyYearlyPostsProps {
	className?: string;
	style?: CSSProperties;
	value: number;
}

export const UserTrophyYearlyPosts: FC<UserTrophyYearlyPostsProps> = ({
	className,
	style,
	value
}) => {
	const fields = useMemo(
		(): Maybe<RankCondition> =>
			getTrophyFields(value, [
				{
					achievement: "God Poster",
					rank: TrophyRank.SSS,
					score: 30
				},
				{
					achievement: "Deep Poster",
					rank: TrophyRank.SS,
					score: 22
				},
				{
					achievement: "Super Poster",
					rank: TrophyRank.S,
					score: 16
				},
				{
					achievement: "Ultra Poster",
					rank: TrophyRank.AAA,
					score: 11
				},
				{
					achievement: "Super Poster",
					rank: TrophyRank.AA,
					score: 7
				},
				{
					achievement: "High Poster",
					rank: TrophyRank.A,
					score: 4
				},
				{
					achievement: "Middle Poster",
					rank: TrophyRank.B,
					score: 2
				},
				{
					achievement: "First Post",
					rank: TrophyRank.C,
					score: 1
				},
				{
					achievement: "Lurker",
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
			title="Posts"
		/>
	);
};
