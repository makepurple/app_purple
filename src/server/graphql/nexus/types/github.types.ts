import { nonNull, objectType } from "nexus";

export const githubTypes = [
	objectType({
		name: "UserGitHub",
		description: "",
		definition: (t) => {
			t.field("user", { type: nonNull("User") });
			t.string("bio");
			t.string("company");
			t.string("twitterUsername");
			t.string("websiteUrl");
		}
	})
];
