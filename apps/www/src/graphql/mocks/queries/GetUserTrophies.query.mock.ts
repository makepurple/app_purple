import { GetUserTrophiesQuery } from "../../generated";
import { UserTrophies_fragment_mock, User_fragment_mock } from "../fragments";

export const GetUserTrophies_mock: GetUserTrophiesQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		trophies: {
			...UserTrophies_fragment_mock,
			totalFollowers: 5,
			totalPostViews: 1_700,
			totalSkills: 42,
			totalUpvotes: 2_100,
			totalYearlyCommits: 1_200,
			totalYearlyPosts: 21
		}
	}
};
