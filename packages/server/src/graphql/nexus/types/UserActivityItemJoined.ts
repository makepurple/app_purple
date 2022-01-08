import { objectType } from "nexus";

export const UserActivityItemJoined = objectType({
	name: "UserActivityItemJoined",
	definition: (t) => {
		t.implements("UserActivity");
	}
});
