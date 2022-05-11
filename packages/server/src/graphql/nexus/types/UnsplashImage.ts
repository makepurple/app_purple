import { oneLine } from "common-tags";
import { objectType } from "nexus";

export const UnsplashImage = objectType({
	name: "UnsplashImage",
	sourceType: "Unsplash.Random",
	definition: (t) => {
		t.nonNull.int("height");
		t.nonNull.string("id");
		t.nonNull.string("unsplashUrl", {
			description: oneLine`
				This is the backlink to Unsplash to satisfy their attribution requirements
				[here](https://help.unsplash.com/en/articles/2511315-guideline-attribution)
			`,
			resolve: () => {
				const url = new URL("https://unsplash.com");

				url.searchParams.set("utm_source", "MakePurple");
				url.searchParams.set("utm_medium", "referral");

				return url.toString();
			}
		});
		t.nonNull.field("urls", {
			type: "UnsplashImageUrls",
			resolve: (parent) => {
				return { ...parent.urls, id: parent.id };
			}
		});
		t.nonNull.field("user", { type: "UnsplashUser" });
		t.nonNull.string("userUrl", {
			description: oneLine`
				This is the backlink to the photographer's Unsplash page to satisfy their
				attribution requirements
				[here](https://help.unsplash.com/en/articles/2511315-guideline-attribution)
			`,
			resolve: (parent) => {
				const url = new URL(parent.user.links.html);

				url.searchParams.set("utm_source", "MakePurple");
				url.searchParams.set("utm_medium", "referral");

				return url.toString();
			}
		});
		t.nonNull.int("width");
	}
});
