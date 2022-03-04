import { faker } from "@faker-js/faker";
import { GetActivityFeedQuery } from "../../generated";
import {
	UserActivityCommentCodeExample_fragment_mock,
	UserActivityCommentPost_fragment_mock,
	UserActivityCreateCodeExample_fragment_mock,
	UserActivityFollowSkill_fragment_mock,
	UserActivityFollowUser_fragment_mock,
	UserActivityFriendAcceptUser_fragment_mock,
	UserActivityJoined_fragment_mock,
	UserActivityPublishPost_fragment_mock,
	UserActivityUpvoteCodeExample_fragment_mock,
	UserActivityUpvotePost_fragment_mock
} from "../fragments";

faker.seed(1);

const DATA_SIZE = 20;

const activities = Array.from({ length: DATA_SIZE }, (_, i) => {
	const activity = faker.random.arrayElement([
		UserActivityCommentCodeExample_fragment_mock,
		UserActivityCommentPost_fragment_mock,
		UserActivityCreateCodeExample_fragment_mock,
		UserActivityFollowSkill_fragment_mock,
		UserActivityFollowUser_fragment_mock,
		UserActivityFriendAcceptUser_fragment_mock,
		UserActivityJoined_fragment_mock,
		UserActivityPublishPost_fragment_mock,
		UserActivityUpvoteCodeExample_fragment_mock,
		UserActivityUpvotePost_fragment_mock
	]);

	return {
		...activity,
		i: `${i}`
	};
});

export const GetActivityFeed_mock: GetActivityFeedQuery = {
	__typename: "Query",
	activityFeed: {
		__typename: "UserActivityConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		edges: activities.map((activity) => ({
			__typename: "UserActivityEdge",
			cursor: activity.id,
			node: activity
		})),
		nodes: activities as any
	}
};
