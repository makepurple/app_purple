import { GetChatQuery } from "../../generated";
import { Chat_fragment_mock } from "../fragments";

export const GetChat_mock: GetChatQuery = {
	__typename: "Query",
	chat: Chat_fragment_mock
};
