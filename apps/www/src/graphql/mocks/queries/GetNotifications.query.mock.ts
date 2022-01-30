import faker from "faker";
import { GetNotificationsQuery } from "../../generated";
import {
	NotificationChatMessageReceived_fragment_mock,
	NotificationFriendshipAccepted_fragment_mock,
	NotificationPostCommented_fragment_mock
} from "../fragments";

faker.seed(1);

const DATA_SIZE = 20;

const notifications = Array.from({ length: DATA_SIZE }, (_, i) => {
	const notification = faker.random.arrayElement([
		NotificationChatMessageReceived_fragment_mock,
		NotificationFriendshipAccepted_fragment_mock,
		NotificationPostCommented_fragment_mock
	]);

	return {
		...notification,
		id: `${i}`
	};
});

export const GetNotifications_mock: GetNotificationsQuery = {
	__typename: "Query",
	viewer: {
		__typename: "User",
		notifications: {
			__typename: "NotificationConnection",
			edges: notifications.map((notification) => ({
				__typename: "NotificationEdge",
				cursor: notification.id,
				node: notification
			})),
			nodes: notifications
		},
		notificationCount: {
			__typename: "NotificationConnection",
			totalCount: DATA_SIZE
		}
	}
};
