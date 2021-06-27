import { createPresignedPost } from "@aws-sdk/s3-presigned-post";
import { arg, inputObjectType, mutationField, nonNull, objectType } from "nexus";

const CONTENT_LENGTH_MIN = 0;
const CONTENT_LENGTH_MAX = 10_485_760;
const S3_BUCKET = process.env.APP_AWS_IMAGE_BUCKET ?? "";

export const CreatePresignedS3UrlInput = inputObjectType({
	name: "CreatePresignedS3UrlInput",
	definition: (t) => {
		t.nonNull.string("fileName");
		t.nonNull.string("fileType");
	}
});

export const CreatePresignedS3UrlPayload = objectType({
	name: "CreatePresignedS3UrlPayload",
	definition: (t) => {
		t.nonNull.string("url");
		t.nonNull.field("fields", { type: "Json" });
	}
});

export const createPresignedS3Url = mutationField("createPresignedS3Url", {
	type: nonNull("CreatePresignedS3UrlPayload"),
	args: {
		data: nonNull(arg({ type: "CreatePresignedS3UrlInput" }))
	},
	authorize: (parent, args, { user }) => {
		if (!user) {
			return false;
		}

		return true;
	},
	resolve: async (parent, { data }, { aws }) => {
		const { url, fields } = await createPresignedPost(aws.s3.instance, {
			Bucket: S3_BUCKET,
			Key: data.fileName,
			Conditions: [
				{ acl: "public-read" },
				{ bucket: S3_BUCKET },
				["starts-with", "$Content-Type", "image/"],
				["content-length-range", CONTENT_LENGTH_MIN, CONTENT_LENGTH_MAX]
			],
			Fields: {
				acl: "public-read",
				"content-type": data.fileType
			},
			Expires: 60 * 2 // in seconds
		});

		// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
		return { url, fields: fields as any };
	}
});
