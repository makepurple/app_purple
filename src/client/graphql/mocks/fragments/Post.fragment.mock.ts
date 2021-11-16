import type { Post } from "@/client/graphql/generated";
import dayjs from "dayjs";
import faker from "faker";
import { User_fragment_mock } from "./User.fragment.mock";

faker.seed(1);

export const Post_fragment_mock: Post = {
	__typename: "Post",
	author: User_fragment_mock,
	authorName: User_fragment_mock.name,
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
