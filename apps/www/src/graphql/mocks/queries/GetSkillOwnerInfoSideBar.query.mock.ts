import { GetSkillOwnerInfoSideBarQuery } from "../../generated";
import { GitHubOrganization_fragment_mock } from "../fragments";

export const GetSkillOwnerInfoSideBar_mock: GetSkillOwnerInfoSideBarQuery = {
	__typename: "Query",
	skillOwner: {
		...GitHubOrganization_fragment_mock
	}
};
