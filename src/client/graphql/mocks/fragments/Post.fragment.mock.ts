import type { Post } from "@/client/graphql/generated";
import faker from "faker";

faker.seed(1);

export const Post_fragment_mock: Post = {
	__typename: "Post",
	author: {
		__typename: "User",
		id: "0",
		name: faker.name.findName()
	},
	authorId: "0",
	description: faker.lorem.paragraphs(10),
	id: 0,
	publishedAt: faker.date.past(),
	thumbnailUrl: "/pngs/test-thumbnail.png",
	title: faker.lorem.words(8),
	upvoteCount: faker.datatype.number({ max: 2_000 }),
	viewerUpvoted: false
} as any;
