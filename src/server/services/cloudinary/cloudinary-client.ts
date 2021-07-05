import type { FileUpload } from "@apollographql/graphql-upload-8-fork";
import cloudinary from "cloudinary";

export class CloudinaryClient {
	constructor() {
		cloudinary.v2.config({
			cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET
		});
	}

	public uploadImageFile(file: FileUpload): Promise<string> {
		const { filename } = file;

		return new Promise<string>((resolve, reject) => {
			file.createReadStream().pipe(
				cloudinary.v2.uploader.upload_stream(
					{
						type: "image",
						public_id: `${process.env.CLOUDINARY_CLOUD_NAME}/images/${filename}`,
						overwrite: true,
						secure: true
					},
					(error, result) => {
						if (error) return reject(error);
						if (!result?.secure_url) return reject(new Error("No secure url"));
						resolve(result.secure_url);
					}
				)
			);
		});
	}

	public uploadImageDataUrl(filename: string, dataUrl: string): Promise<string> {
		return cloudinary.v2.uploader
			.upload(dataUrl, {
				type: "image",
				public_id: `${process.env.CLOUDINARY_CLOUD_NAME}/images/${filename}`,
				overwrite: true,
				secure: true
			})
			.then((result) => result.secure_url);
	}
}
