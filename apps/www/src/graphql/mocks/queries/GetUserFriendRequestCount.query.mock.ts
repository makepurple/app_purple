import { GetUserFriendRequestCountQuery } from "../../generated";
import { User_fragment_mock } from "../fragments";

export const GetUserFriendRequestCount_mock: GetUserFriendRequestCountQuery = {
	__typename: "Query",
	viewer: {
		...User_fragment_mock,
		friendRequestsReceived: {
			__typename: "UserConnection",
			totalCount: 5
		}
	}
};
