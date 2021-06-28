import type { FileUpload } from "@apollographql/graphql-upload-8-fork";
import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

const appAwsAccessKeyId: string = process.env.APP_AWS_ACCESS_KEY_ID ?? "";
const appAwsSecretAccessKey: string = process.env.APP_AWS_SECRET_ACCESS_KEY ?? "";
const appAwsImageBucket: string = process.env.APP_AWS_IMAGE_BUCKET ?? "";

export class AwsS3 {
	public instance = new S3Client({
		credentials: {
			accessKeyId: appAwsAccessKeyId,
			secretAccessKey: appAwsSecretAccessKey
		},
		region: "us-west-2"
	});

	public upload = async (key: string, file: FileUpload) => {
		const { filename } = file;

		const result = await this.instance
			.send(
				new PutObjectCommand({
					Bucket: appAwsImageBucket,
					Body: file.createReadStream(),
					Key: `${key}/${filename}`
				})
			)
			.catch(() => null);

		if (!result) {
			return null;
		}

		const region = await this.instance.config.region();
		const fileUrl = `https://${appAwsImageBucket}.s3.${region}.amazonaws.com/${key}`;

		return fileUrl;
	};
}
