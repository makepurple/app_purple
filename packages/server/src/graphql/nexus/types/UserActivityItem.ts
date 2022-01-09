import { unionType } from "nexus";

export const UserActivityItem = unionType({
	name: "UserActivityItem",
	definition: (t) => {
		t.members(
			"UserActivityItemCommentPost",
			"UserActivityItemFollowSkill",
			"UserActivityItemFollowUser",
			"UserActivityItemFriendAcceptUser",
			"UserActivityItemJoined",
			"UserActivityItemPublishPost",
			"UserActivityItemUpvotePost"
		);
	}
});
