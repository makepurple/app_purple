import { Repository } from "../../generated";
import { GitHubRepository_fragment_mock } from "./GitHubRepository.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const Repository_fragment_mock: Repository = {
	__typename: "Repository",
	id: 0,
	github: GitHubRepository_fragment_mock,
	name: "react",
	skills: [
		{
			__typename: "Skill",
			name: "react",
			id: 0,
			desiringUsers: [],
			users: [],
			owner: "facebook"
		},
		{
			__typename: "Skill",
			name: "typescript",
			id: 1,
			desiringUsers: [],
			users: [],
			owner: "microsoft"
		}
	],
	user: User_fragment_mock,
	owner: User_fragment_mock.name.toString()
};
