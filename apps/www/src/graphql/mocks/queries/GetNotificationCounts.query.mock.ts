import { GetNotificationCountsQuery } from "../../generated";
import { User_fragment_mock } from "../fragments";

export const GetNotificationCounts_mock: GetNotificationCountsQuery = {
	__typename: "Query",
	viewer: {
		...User_fragment_mock,
		friendRequestsReceivedCount: 5,
		newMessagesCount: 12,
		newNotificationsCount: 123
	}
};
