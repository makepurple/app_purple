import { interfaceType } from "nexus";

export const Followable = interfaceType({
	name: "Followable",
	definition: (t) => {
		t.nonNull.boolean("viewerFollowing", {
			resolve: () => false
		});
	}
});
