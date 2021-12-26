import { inputObjectType } from "nexus";

export const UploadPostImageInput = inputObjectType({
	name: "UploadPostImageInput",
	definition: (t) => {
		t.nonNull.upload("image", {
			description: "The file of the image to be uploaded"
		});
	}
});
