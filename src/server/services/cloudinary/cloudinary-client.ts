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

	public uploadFile(file: FileUpload): Promise<string> {
		return new Promise<string>((resolve, reject) => {
			file.createReadStream().pipe(
				cloudinary.v2.uploader.upload_stream((error, result) => {
					if (error) return reject(error);
					if (!result?.secure_url) return reject(new Error("No secure url"));
					resolve(result.secure_url);
				})
			);
		});
	}

	public uploadDataUrl(dataUrl: string): Promise<string> {
		return cloudinary.v2.uploader.upload(dataUrl).then((result) => result.secure_url);
	}
}
