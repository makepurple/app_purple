import { faker } from "@faker-js/faker";
import { GetNotificationsQuery } from "../../generated";
import {
	NotificationChatMessageReceived_fragment_mock,
	NotificationCodeExampleCommented_fragment_mock,
	NotificationFriendshipAccepted_fragment_mock,
	NotificationPostCommented_fragment_mock,
	User_fragment_mock
} from "../fragments";

faker.seed(1);

const DATA_SIZE = 20;
const COUNT_UNOPENED = 5;

const notifications = Array.from({ length: DATA_SIZE }, (_, i) => {
	const notification = faker.helpers.arrayElement([
		NotificationChatMessageReceived_fragment_mock,
		NotificationCodeExampleCommented_fragment_mock,
		NotificationFriendshipAccepted_fragment_mock,
		NotificationPostCommented_fragment_mock
	]);

	return {
		...notification,
		id: `${i}`,
		opened: i >= COUNT_UNOPENED
	};
});

export const GetNotifications_mock: GetNotificationsQuery = {
	__typename: "Query",
	viewer: {
		...User_fragment_mock,
		notifications: {
			__typename: "NotificationConnection",
			pageInfo: {
				__typename: "PageInfo",
				endCursor: null,
				hasNextPage: false,
				hasPreviousPage: false,
				startCursor: null
			},
			edges: notifications.map((notification) => ({
				__typename: "NotificationEdge",
				cursor: notification.id,
				node: notification
			})),
			nodes: notifications as any
		}
	}
};
