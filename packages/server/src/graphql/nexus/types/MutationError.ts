import { responsePathAsArray } from "graphql";
import { interfaceType } from "nexus";

export const MutationError = interfaceType({
	name: "MutationError",
	definition: (t) => {
		t.nonNull.string("message");
		t.nonNull.list.nonNull.string("path", {
			resolve: (parent, args, context, info) => {
				return responsePathAsArray(info.path).map((part) => `${part}`);
			}
		});
	}
});
