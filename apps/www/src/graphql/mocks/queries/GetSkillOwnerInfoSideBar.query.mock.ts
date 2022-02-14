import {
	GetSkillOwnerInfoSideBarQuery,
	GetSkillOwnerInfoSideBarQueryVariables
} from "../../generated";
import { GitHub_fragment_mock } from "../fragments";

export const GetSkillOwnerInfoSideBar_mock: GetSkillOwnerInfoSideBarQuery = {
	__typename: "Query",
	github: GitHub_fragment_mock as any
};

export const GetSkillOwnerInfoSideBar_variables_mock: GetSkillOwnerInfoSideBarQueryVariables = {
	owner: "facebook"
};
