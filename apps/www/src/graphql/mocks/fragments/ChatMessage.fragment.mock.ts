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
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "numbered-list",
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
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "block-quote",
			children: [
				{
					text: "Block quote"
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Line of code",
					code: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					bold: true,
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				},
				{
					type: "link",
					url: "https://google.com",
					children: [
						{
							text: "google"
						}
					]
				},
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "image",
			url: "https://github.githubassets.com/images/mona-loading-dark.gif",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: ""
				},
				{
					type: "link",
					url: "https://google.com",
					children: [
						{
							text: ""
						}
					]
				},
				{
					text: ""
				}
			]
		}
	],
	createdAt: dayjs(1318781876406).toDate(),
	sender: User_fragment_mock,
	senderId: User_fragment_mock.id
};
