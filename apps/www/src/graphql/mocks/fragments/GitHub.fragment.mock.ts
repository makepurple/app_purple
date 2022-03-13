import { Skill_fragment_mock } from ".";
import { GitHub } from "../../generated";
import { GitHubOrganization_fragment_mock } from "./GitHubOrganization.fragment.mock";
import { GitHubRepository_fragment_mock } from "./GitHubRepository.fragment.mock";
import { GitHubUser_fragment_mock } from "./GitHubUser.fragment.mock";

export const GitHub_fragment_mock: GitHub = {
	__typename: "GitHub",
	repository: {
		...GitHubRepository_fragment_mock,
		skill: Skill_fragment_mock
	},
	repositoryOwner: GitHubOrganization_fragment_mock,
	viewer: GitHubUser_fragment_mock
};
