import { objectType } from "nexus";

export const UserActivityJoined = objectType({
	name: "UserActivityJoined",
	definition: (t) => {
		t.implements("UserActivity");
	}
});
