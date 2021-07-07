import { GetMyUserQuery } from "@/client/graphql/generated";

export const GetMyUserMock: GetMyUserQuery = {
	viewer: {
		__typename: "User" as const,
		id: "0",
		username: "DenverCoder9",
		profileImageUrl: "https://avatars.githubusercontent.com/u/810438",
		profileGitHubUrl: "https://github.com/gaearon"
	}
};
