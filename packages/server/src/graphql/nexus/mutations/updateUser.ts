import { mutationField } from "nexus";

export const updateUser = mutationField("updateUser", {
	type: "User",
	authorize: (root, args, { user }) => {
		return !!user;
	}
});
