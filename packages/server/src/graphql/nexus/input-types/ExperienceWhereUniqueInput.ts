import { inputObjectType } from "nexus";

export const ExperienceWhereUniqueInput = inputObjectType({
	name: "ExperienceWhereUniqueInput",
	definition: (t) => {
		t.nonNull.string("id");
	}
});
