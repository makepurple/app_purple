import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const ExperienceEdge = objectType({
	name: "ExperienceEdge",
	description: oneLine`
		Relay-style edge for Experience types.
	`,
	definition: (t) => {
		t.nonNull.string("cursor");
		t.nonNull.field("node", { type: "Experience" });
	}
});
