import { GetNotificationCountsQuery } from "../../generated";
import { User_fragment_mock } from "../fragments";

export const GetNotificationCounts_mock: GetNotificationCountsQuery = {
	__typename: "Query",
	viewer: {
		...User_fragment_mock,
		messages: {
			__typename: "NotificationConnection",
			totalCount: 12
		},
		notifications: {
			__typename: "NotificationConnection",
			totalCount: 123
		}
	}
};
