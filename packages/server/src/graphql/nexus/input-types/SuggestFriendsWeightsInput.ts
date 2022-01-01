import { inputObjectType } from "nexus";

export const SuggestFriendsWeightsInput = inputObjectType({
	name: "SuggestFriendsWeightsInput",
	definition: (t) => {
		t.float("desiredSkillsOverlap", { default: 1 });
		t.float("skillsOverlap", { default: 1 });
	}
});
