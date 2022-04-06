import { stripIndents } from "common-tags";
import { inputObjectType } from "nexus";

export const SuggestFriendsWhereInput = inputObjectType({
	name: "SuggestFriendsWhereInput",
	definition: (t) => {
		t.field("desiredSkills", {
			type: "SkillWhereInput",
			description: stripIndents`
				Filters suggested users by their known skills to the viewer's
				skills.
			`
		});
		t.string("seed", {
			description: stripIndents`
				Seed for pagination for PRNG-returned data
			`
		});
		t.field("skills", {
			type: "SkillWhereInput",
			description: stripIndents`
				Filters suggested users by their known skills to the viewer's
				desired skills.
			`
		});
	}
});
