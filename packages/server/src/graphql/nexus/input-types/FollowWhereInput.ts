import { inputObjectType } from "nexus";

export const FollowWhereInput = inputObjectType({
	name: "FollowWhereInput",
	definition: (t) => {
		t.field("skill", { type: "SkillWhereInput" });
		t.field("type", { type: "FollowingType" });
		t.field("user", { type: "UserWhereInput" });
	}
});
