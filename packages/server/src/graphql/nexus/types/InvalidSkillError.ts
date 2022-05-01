import { objectType } from "nexus";

export const InvalidSkillError = objectType({
	name: "InvalidSkillError",
	definition: (t) => {
		t.implements("AddDesiredSkillError");
		t.implements("AddSkillError");
		t.implements("CreateCodeExampleError");
		t.implements("PublishPostError");
		t.implements("UpdateCodeExampleError");
		t.implements("UpdatePostDraftError");
		t.implements("UpdatePostError");
		t.implements("UpdateSkillsError");
	}
});
