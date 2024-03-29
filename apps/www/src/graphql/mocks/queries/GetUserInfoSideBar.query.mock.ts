import type { GetUserInfoSideBarQuery, GetUserInfoSideBarQueryVariables } from "../../generated";
import { User_fragment_mock } from "../fragments";

export const GetUserInfoSideBar_mock: GetUserInfoSideBarQuery = {
	__typename: "Query",
	user: {
		...User_fragment_mock,
		__typename: "User",
		id: "0"
	}
};

export const GetUserInfoSideBar_variables_mock: GetUserInfoSideBarQueryVariables = {
	name: "leedavidcs"
};
