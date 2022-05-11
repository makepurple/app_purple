import { inputObjectType } from "nexus";

export const RandomUnsplashImageWhereInput = inputObjectType({
	name: "RandomUnsplashImageWhereInput",
	definition: (t) => {
		t.string("query");
	}
});
