import { RemovePostThumbnailMutation, RemovePostThumbnailMutationVariables } from "../../generated";
import { Post_fragment_mock } from "../fragments";

export const RemovePostThumbnail_mock: RemovePostThumbnailMutation = {
	__typename: "Mutation",
	removePostThumbnail: {
		__typename: "RemovePostThumbnailPayload",
		record: {
			__typename: "Post",
			id: Post_fragment_mock.id,
			thumbnailUrl: null
		}
	}
};

export const RemovePostThumbnail_variales_mock: RemovePostThumbnailMutationVariables = {
	where: {
		id: Post_fragment_mock.id
	}
};
