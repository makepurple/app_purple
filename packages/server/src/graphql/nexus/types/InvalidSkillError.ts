import { objectType } from "nexus";

export const InvalidSkillError = objectType({
	name: "InvalidSkillError",
	definition: (t) => {
		t.implements("CreateCodeExampleError");
		t.implements("PublishPostError");
		t.implements("UpdatePostError");
	}
});
