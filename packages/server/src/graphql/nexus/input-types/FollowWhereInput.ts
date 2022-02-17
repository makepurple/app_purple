import { inputObjectType } from "nexus";

export const FollowWhereInput = inputObjectType({
	name: "FollowWhereInput",
	definition: (t) => {
		t.field("skill", { type: "SkillWhereInput" });
		t.field("type", { type: "FollowType" });
		t.field("user", { type: "UserWhereInput" });
	}
});
