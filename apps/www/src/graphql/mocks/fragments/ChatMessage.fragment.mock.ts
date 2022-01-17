import { dayjs } from "@makepurple/utils";
import { ChatMessage } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

export const ChatMessage_fragment_mock: ChatMessage = {
	__typename: "ChatMessage",
	id: "0",
	chat: null as any,
	chatId: "0",
	content: [
		{
			type: "language-tsx",
			children: [
				{
					text: 'const text: string = "This is some TypeScript Code";\n\nconsole.log(text);'
				}
			]
		},
		{
			type: "bulleted-list",
			children: [
				{
					type: "list-item",
					children: [
						{
							text: "List Item 1"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "List Item 2"
						}
					]
				},
				{
					type: "list-item",
					children: [
						{
							text: "List Item 3"
						}
					]
				}
			]
		}
	],
	createdAt: dayjs(1318781876406).toDate(),
	sender: User_fragment_mock,
	senderId: User_fragment_mock.id
};
