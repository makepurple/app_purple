import { CreatePostMutation } from "@/client/graphql/generated";
import { Post_fragment_mock } from "@/client/graphql/mocks/fragments";

export const CreatePost_mock: CreatePostMutation = {
	__typename: "Mutation",
	post: Post_fragment_mock
};
