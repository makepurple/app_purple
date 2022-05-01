import { objectType } from "nexus";

export const InvalidOrganizationError = objectType({
	name: "InvalidOrganizationError",
	definition: (t) => {
		t.implements("CreateExperienceError");
		t.implements("UpdateExperienceError");
	}
});
