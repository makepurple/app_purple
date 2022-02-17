import { GetSiteWideSideDrawerQuery } from "../../generated";
import { PageInfo_fragment_mock, Skill_fragment_mock, User_fragment_mock } from "../fragments";

const USERS_SIZE = 3;
const SKILLS_SIZE = 7;

const users = Array.from({ length: USERS_SIZE }, (_, i) => ({
	...User_fragment_mock,
	id: `${i}`
}));

const skills = Array.from({ length: SKILLS_SIZE }, (_, i) => ({
	...Skill_fragment_mock,
	id: `${i + USERS_SIZE}`
}));

const follows = [...users, ...skills].map((node, i) => ({
	__typename: "Follow" as const,
	id: `${i}`,
	following: node
}));

export const GetSiteWideSideDrawer_mock: GetSiteWideSideDrawerQuery = {
	__typename: "Query",
	viewer: {
		__typename: "User",
		id: "0",
		following: {
			__typename: "FollowConnection",
			pageInfo: PageInfo_fragment_mock,
			totalCount: USERS_SIZE + SKILLS_SIZE,
			edges: follows.map((node, i) => ({
				__typename: "FollowEdge",
				cursor: `${i}`,
				node
			})),
			nodes: follows as any
		}
	}
};
