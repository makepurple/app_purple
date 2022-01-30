import { dayjs } from "@makepurple/utils";
import { NotificationChatMessageReceived, NotificationType } from "../../generated";
import { Chat_fragment_mock } from "./Chat.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

export const NotificationChatMessageReceived_fragment_mock: NotificationChatMessageReceived = {
	__typename: "NotificationChatMessageReceived",
	id: "0",
	opened: false,
	chat: Chat_fragment_mock,
	chatId: "0",
	type: NotificationType.ChatMessageReceived,
	updatedAt: dayjs(1318781876406).toDate(),
	user: User_fragment_mock,
	userId: User_fragment_mock.id
};
