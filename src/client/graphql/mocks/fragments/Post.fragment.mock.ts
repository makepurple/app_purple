import type { Post } from "@/client/graphql/generated";
import faker from "faker";

faker.seed(1);

export const Post_fragment_mock: Post = {
	__typename: "Post",
	author: {
		__typename: "User",
		id: "0",
		name: "leedavidcs"
	},
	authorId: "0",
	description: faker.lorem.paragraphs(2),
	id: 0,
	publishedAt: faker.date.past(),
	thumbnailUrl: "/static/pngs/test-thumbnail.png",
	title: "Not a Real Blog Post Title",
	upvoteCount: faker.datatype.number({ max: 2_000 }),
	urlSlug: "not-a-real-blog-post-title",
	viewerUpvoted: false
} as any;
