import { interfaceType } from "nexus";

export const Connection = interfaceType({
	name: "Connection",
	definition: (t) => {
		t.nonNull.field("pageInfo", { type: "PageInfo" });
		t.nonNull.int("totalCount");
	}
});
