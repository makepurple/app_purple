import { CreatePostMutation } from "../../../graphql/generated";
import { Post_fragment_mock } from "../../../graphql/mocks/fragments";

export const CreatePost_mock: CreatePostMutation = {
	__typename: "Mutation",
	post: Post_fragment_mock
};
