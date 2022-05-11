import { objectType } from "nexus";

export const UnsplashImageUrls = objectType({
	name: "UnsplashImageUrls",
	definition: (t) => {
		t.nonNull.string("full");
		t.nonNull.string("id");
		t.nonNull.string("raw");
		t.nonNull.string("regular");
		t.nonNull.string("small");
		t.nonNull.string("thumb");
	}
});
