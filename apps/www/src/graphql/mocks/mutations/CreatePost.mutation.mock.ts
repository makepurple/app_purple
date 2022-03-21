import { CreatePostMutation } from "../../generated";
import { Post_fragment_mock } from "../fragments";

export const CreatePost_mock: CreatePostMutation = {
	__typename: "Mutation",
	createPost: {
		__typename: "CreatePostPayload",
		record: Post_fragment_mock as any
	}
};
