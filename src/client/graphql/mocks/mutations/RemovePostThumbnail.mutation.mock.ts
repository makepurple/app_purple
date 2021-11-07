import {
	RemovePostThumbnailMutation,
	RemovePostThumbnailMutationVariables
} from "@/client/graphql/generated";
import { Post_fragment_mock } from "@/client/graphql/mocks/fragments";

export const RemovePostThumbnail_mock: RemovePostThumbnailMutation = {
	__typename: "Mutation",
	post: {
		__typename: "Post",
		id: Post_fragment_mock.id,
		thumbnailUrl: null
	}
};

export const RemovePostThumbnail_variales_mock: RemovePostThumbnailMutationVariables = {
	where: {
		id: Post_fragment_mock.id
	}
};
