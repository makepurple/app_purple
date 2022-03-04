import { objectType } from "nexus";

export const UserActivityUpvoteCodeExample = objectType({
	name: "UserActivityUpvoteCodeExample",
	definition: (t) => {
		t.implements("UserActivity");
		t.nonNull.field("codeExample", { type: "CodeExample" });
		t.nonNull.string("codeExampleId");
	}
});
