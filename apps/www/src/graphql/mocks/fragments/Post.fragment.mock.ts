import { faker } from "@faker-js/faker";
import { dayjs } from "@makepurple/utils";
import type { Post } from "../../generated";
import { Skill_fragment_mock } from "./Skill.fragment.mock";
import { User_fragment_mock } from "./User.fragment.mock";

faker.seed(1);

const skills = [
	"Next.js",
	"Prisma",
	"Nexus",
	"Urql",
	"TypeScript",
	"Storybook",
	"Figma",
	"Framer-Motion"
].map((skill, i) => ({
	...Skill_fragment_mock,
	id: `Skill_${i}`,
	name: skill,
	owner: "github"
}));

export const Post_fragment_mock: Post = {
	__typename: "Post",
	author: User_fragment_mock,
	authorName: User_fragment_mock.name,
	comments: {
		__typename: "CommentConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 0,
		edges: [],
		nodes: []
	},
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
	createdAt: dayjs(1318781876406).toDate(),
	description: faker.lorem.sentences(5),
	downvoters: {
		__typename: "UserConnection",
		edges: [],
		nodes: [],
		totalCount: 0,
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	},
	id: "0",
	images: [],
	publishedAt: faker.date.past(),
	readTime: 5,
	skills: {
		__typename: "SkillConnection",
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		},
		totalCount: 8,
		edges: skills.map((skill) => ({
			__typename: "SkillEdge",
			cursor: skill.id,
			node: skill
		})),
		nodes: skills
	},
	thumbnailUrl: "/static/pngs/test-thumbnail.png",
	title: "Not a Real Blog Post Title",
	updatedAt: dayjs(1318781876406).toDate(),
	upvotes: faker.datatype.number({ max: 2_000 }),
	upvoters: {
		__typename: "UserConnection",
		edges: [],
		nodes: [],
		totalCount: 0,
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	},
	urlSlug: "not-a-real-blog-post-title",
	viewers: {
		__typename: "UserConnection",
		edges: [],
		nodes: [],
		totalCount: 0,
		pageInfo: {
			__typename: "PageInfo",
			endCursor: null,
			hasNextPage: false,
			hasPreviousPage: false,
			startCursor: null
		}
	},
	viewersCount: 0,
	viewerUpvote: false
};
