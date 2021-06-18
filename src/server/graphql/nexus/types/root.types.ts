import { mutationType, queryType } from "nexus";

export const Query = queryType({
	description: "Root query type",
	definition: (t) => {
		t.nonNull.boolean("ok", { resolve: () => true });
		t.field("viewer", {
			type: "User",
			resolve: (root, args, { user }) => user
		});
	}
});

export const Mutation = mutationType({
	description: "Root mutation type",
	definition: (t) => {
		t.nonNull.boolean("ok", { resolve: () => true });
		t.field("viewer", {
			type: "User",
			resolve: (root, args, { user }) => user
		});
	}
});
