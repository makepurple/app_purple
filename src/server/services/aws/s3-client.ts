import { S3Client } from "@aws-sdk/client-s3";

const appAwsAccessKeyId: string = process.env.APP_AWS_ACCESS_KEY_ID ?? "";
const appAwsSecretAccessKey: string = process.env.APP_AWS_SECRET_ACCESS_KEY ?? "";

export const s3 = new S3Client({
	credentials: {
		accessKeyId: appAwsAccessKeyId,
		secretAccessKey: appAwsSecretAccessKey
	},
	region: "us-west-2"
});
