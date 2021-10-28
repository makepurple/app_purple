import type { FileUpload } from "@apollographql/graphql-upload-8-fork";
import cloudinary, { UploadApiResponse } from "cloudinary";
import { nanoid } from "nanoid";

export class CloudinaryClient {
	constructor() {
		cloudinary.v2.config({
			cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET
		});
	}

	public static getImageFileName(filename: string): string {
		return `${process.env.CLOUDINARY_CLOUD_NAME}/images/${filename}`;
	}

	public uploadImageFile(file: FileUpload): Promise<UploadApiResponse> {
		const filename: string = nanoid();

		return new Promise<UploadApiResponse>((resolve, reject) => {
			file.createReadStream().pipe(
				cloudinary.v2.uploader.upload_stream(
					{
						allowed_formats: ["gif", "jpeg", "jpg", "png", "webp"],
						public_id: CloudinaryClient.getImageFileName(filename),
						overwrite: true,
						secure: true
					},
					(error, result) => {
						if (error) return reject(error);
						if (!result?.secure_url) return reject(new Error("No secure url"));
						resolve(result);
					}
				)
			);
		});
	}

	public async retrieveImageFile(publicId: string) {
		return await cloudinary.v2.api.resource(publicId);
	}

	public async deleteImageFile(filename: string): Promise<boolean> {
		return await cloudinary.v2.uploader
			.destroy(CloudinaryClient.getImageFileName(filename))
			.then(() => true)
			.catch(() => false);
	}

	public uploadImageDataUrl(filename: string, dataUrl: string): Promise<UploadApiResponse> {
		return cloudinary.v2.uploader.upload(dataUrl, {
			public_id: CloudinaryClient.getImageFileName(filename),
			overwrite: true,
			secure: true
		});
	}
}
