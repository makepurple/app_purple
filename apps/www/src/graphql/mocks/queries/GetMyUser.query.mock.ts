import { GetMyUserQuery } from "../../generated";

export const GetMyUser_mock: GetMyUserQuery = {
	__typename: "Query",
	viewer: {
		__typename: "User" as const,
		banned: false,
		id: "0",
		name: "DenverCoder9",
		image: "https://avatars.githubusercontent.com/u/810438"
	}
};
