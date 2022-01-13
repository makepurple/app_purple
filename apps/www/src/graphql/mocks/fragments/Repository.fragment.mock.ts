import { Repository } from "../../generated";
import { GitHubRepository_fragment_mock } from "./GitHubRepository.fragment.mock";
import { Skill_fragment_mock } from "./Skill.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const Repository_fragment_mock: Repository = {
	__typename: "Repository",
	id: "0",
	github: GitHubRepository_fragment_mock,
	name: "react",
	skills: [
		{
			...Skill_fragment_mock,
			id: "0",
			name: "react",
			owner: "facebook"
		},
		{
			...Skill_fragment_mock,
			id: "1",
			name: "typescript",
			owner: "microsoft"
		}
	],
	user: User_fragment_mock,
	owner: User_fragment_mock.name.toString()
};
