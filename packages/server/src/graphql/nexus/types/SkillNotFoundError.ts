import { objectType } from "nexus";

export const SkillNotFoundError = objectType({
	name: "SkillNotFoundError",
	definition: (t) => {
		t.implements("RemoveDesiredSkillError");
		t.implements("RemoveSkillError");
	}
});
