import { GetSkillInfoSideBarQuery, GetSkillInfoSideBarQueryVariables } from "../../generated";
import { Skill_fragment_mock } from "../fragments";

export const GetSkillInfoSideBar_mock: GetSkillInfoSideBarQuery = {
	__typename: "Query",
	skill: Skill_fragment_mock as any
};

export const GetSkillInfoSideBar_variables_mock: GetSkillInfoSideBarQueryVariables = {
	name: "react",
	owner: "facebook"
};
