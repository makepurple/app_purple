import type { UploadPostImageMutation } from "@/client/graphql/generated";

export const UploadPostImage_mock: UploadPostImageMutation = {
	__typename: "Mutation",
	postImage: {
		__typename: "PostImage",
		id: "0",
		url: "/static/pngs/test-thumbnail.png"
	}
};
