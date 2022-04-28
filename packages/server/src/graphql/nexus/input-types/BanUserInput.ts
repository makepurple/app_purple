import { inputObjectType } from "nexus";

export const BanUserInput = inputObjectType({
	name: "BanUserInput",
	definition: (t) => {
		t.nonNull.string("reason");
	}
});
