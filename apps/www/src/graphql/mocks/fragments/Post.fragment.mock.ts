import { dayjs } from "@makepurple/utils";
import faker from "faker";
import type { Post } from "../../generated";
import { User_fragment_mock } from "./User.fragment.mock";

faker.seed(1);

export const Post_fragment_mock: Post = {
	__typename: "Post",
	author: User_fragment_mock,
	authorName: User_fragment_mock.name,
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
			type: "paragraph",
			children: [
				{
					text: ""
				}
			]
		},
		{
			type: "heading-one",
			children: [
				{
					text: "Heading 1"
				}
			]
		},
		{
			type: "heading-two",
			children: [
				{
					text: "Heading 2"
				}
			]
		},
		{
			type: "heading-three",
			children: [
				{
					text: "Heading 3"
				}
			]
		},
		{
			type: "heading-four",
			children: [
				{
					text: "Heading 4"
				}
			]
		},
		{
			type: "heading-five",
			children: [
				{
					text: "Heading 5"
				}
			]
		},
		{
			type: "heading-six",
			children: [
				{
					text: "Heading 6"
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
					text: "Bold Text",
					bold: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Italic Text",
					italic: true
				}
			]
		},
		{
			type: "paragraph",
			children: [
				{
					text: "Underline Text",
					underline: true
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
	description: faker.lorem.paragraphs(2),
	id: 0,
	images: [],
	publishedAt: faker.date.past(),
	thumbnailUrl: "/static/pngs/test-thumbnail.png",
	title: "Not a Real Blog Post Title",
	createdAt: dayjs(1318781876406).toDate(),
	updatedAt: dayjs(1318781876406).toDate(),
	upvoteCount: faker.datatype.number({ max: 2_000 }),
	upvotingUsers: [],
	urlSlug: "not-a-real-blog-post-title",
	viewerUpvoted: false
};
