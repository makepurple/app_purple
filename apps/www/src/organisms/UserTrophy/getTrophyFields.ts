import { TrophyRank } from "@makepurple/components";

export interface RankCondition {
	achievement: string;
	rank: TrophyRank;
	score: number;
}

export const getTrophyFields = (
	value: number,
	conditions: readonly RankCondition[]
): Maybe<RankCondition> => {
	return conditions
		.slice()
		.sort((a, b) => a.score - b.score)
		.reduce((selected, current) => (value >= current.score ? current : selected), null);
};
