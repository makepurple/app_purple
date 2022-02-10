import type { GetUserOverviewQuery, GetUserOverviewQueryVariables } from "../../generated";
import { Post_fragment_mock, User_fragment_mock } from "../fragments";
import { UserTrophies_fragment_mock } from "../fragments/UserTrophies.fragment.mock";

export const GetUserOverview_mock: GetUserOverviewQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		__typename: "User",
		id: "0",
		posts: {
			__typename: "PostConnection",
			edges: [
				{
					__typename: "PostEdge",
					cursor: Post_fragment_mock.id,
					node: Post_fragment_mock
				}
			],
			nodes: [Post_fragment_mock]
		},
		trophies: {
			...UserTrophies_fragment_mock,
			totalFollowers: 5,
			totalPostViews: 1_700,
			totalSkills: 42,
			totalUpvotes: 2100,
			totalYearlyCommits: 1_200,
			totalYearlyPosts: 21
		}
	} as any
};

export const GetUserOverview_variables_mock: GetUserOverviewQueryVariables = {
	name: "leedavidcs"
};
