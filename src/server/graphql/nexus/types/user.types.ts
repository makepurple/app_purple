import { objectType } from "nexus";

export const User = objectType({
	name: "User",
	definition: (t) => {
		t.model.id();
		t.model.email({
			authorize: (root, args, { user }) => {
				return user?.id === root.id;
			}
		});
		t.model.profileImageUrl();
		t.model.profileGitHubUrl();
		t.model.provider();
		t.model.username();
		t.model.skills();
		t.model.posts();
		t.model.comments();
	}
});
