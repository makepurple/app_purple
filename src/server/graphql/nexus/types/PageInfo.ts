import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const PageInfo = objectType({
	name: "PageInfo",
	description: oneLine`
		Page info for relay-style pagination connections.
	`,
	definition: (t) => {
		t.string("endCursor");
		t.nonNull.boolean("hasNextPage");
		t.nonNull.boolean("hasPreviousPage");
		t.string("startCursor");
	}
});
