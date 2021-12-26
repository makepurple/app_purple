import type { UploadPostImageMutation } from "../../generated";

export const UploadPostImage_mock: UploadPostImageMutation = {
	__typename: "Mutation",
	uploadPostImage: {
		__typename: "UploadPostImagePayload",
		record: {
			__typename: "PostImage",
			id: "0",
			url: "/static/pngs/test-thumbnail.png"
		}
	}
};
