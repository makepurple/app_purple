import cloudinary from "cloudinary";
import type { UploadApiResponse } from "cloudinary";
import { createHash } from "crypto";
import type { FileUpload } from "graphql-upload";

const MAX_UPLOAD_SIZE = 1_048_576;

export interface CloudinaryUploadImageFileOptions {
	folder?: string;
}

export class CloudinaryClient {
	constructor() {
		cloudinary.v2.config({
			cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
			api_key: process.env.CLOUDINARY_API_KEY,
			api_secret: process.env.CLOUDINARY_API_SECRET
		});
	}

	public uploadImageFile(
		file: FileUpload,
		options?: CloudinaryUploadImageFileOptions
	): Promise<UploadApiResponse> {
		const now = Date.now().toString();
		const hash = createHash("md5").update(now);
		const fileName = hash.digest("hex").toString();
		const publicId = options?.folder ? [options.folder, fileName].join("/") : fileName;

		let byteLength = 0;

		return new Promise<UploadApiResponse>((resolve, reject) => {
			const uploadStream = cloudinary.v2.uploader.upload_stream(
				{
					allowed_formats: ["gif", "jpeg", "jpg", "png", "webp"],
					public_id: publicId,
					overwrite: true,
					secure: true
				},
				(error, result) => {
					if (error) return reject(error);
					if (!result?.secure_url) return reject(new Error("No secure url"));
					resolve(result);
				}
			);

			file.createReadStream()
				.on("data", (data: Buffer) => {
					byteLength += data.byteLength;

					if (byteLength > MAX_UPLOAD_SIZE) {
						uploadStream.destroy(new Error("Max file size exceeded: 1MB"));
					}
				})
				.pipe(uploadStream);
		});
	}

	public async retrieveImageFile(publicId: string) {
		return await cloudinary.v2.api.resource(publicId);
	}

	public async deleteImageFile(publicId: string): Promise<boolean> {
		return await cloudinary.v2.uploader
			.destroy(publicId)
			.then(() => true)
			.catch(() => false);
	}
}
