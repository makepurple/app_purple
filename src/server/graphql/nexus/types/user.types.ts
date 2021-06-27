import { objectType } from "nexus";
import { User } from "nexus-prisma";

export const userTypes = [
	objectType({
		name: User.$name,
		description: User.$description,
		definition: (t) => {
			t.field(User.id);
			t.field({
				...User.email,
				authorize: (root, args, { user }) => {
					return user?.id === root.id;
				}
			});
			t.field(User.profileImageUrl);
			t.field(User.profileGitHubUrl);
			t.field(User.provider);
			t.field(User.username);
			t.field(User.skills);
			t.field(User.posts);
			t.field(User.comments);
		}
	})
];
