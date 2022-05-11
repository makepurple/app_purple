import { objectType } from "nexus";

export const UnsplashUser = objectType({
	name: "UnsplashUser",
	definition: (t) => {
		t.nonNull.string("id");
		t.nonNull.string("name");
		t.nonNull.string("username");
	}
});
