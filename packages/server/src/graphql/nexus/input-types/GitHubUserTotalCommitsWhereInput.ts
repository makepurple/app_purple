import { inputObjectType } from "nexus";

export const GitHubUserTotalCommitsWhereInput = inputObjectType({
	name: "GitHubUserTotalCommitsWhereInput",
	definition: (t) => {
		t.field("createdAt", { type: "DateTimeNullableFilter" });
	}
});
