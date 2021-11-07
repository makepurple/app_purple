import { Button, Spinner } from "@/client/atoms";
import { useUploadPostImageMutation } from "@/client/graphql";
import React, { ChangeEvent, CSSProperties, forwardRef, ReactNode } from "react";
import { toast } from "react-hot-toast";
import { VisuallyHidden } from "reakit";

const ACCEPTED_IMAGE_TYPES = ["image/gif", "image/jpeg", "image/jpg", "image/png", "image/webp"];

export interface PostImageInputProps {
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	onUpload?: (imageUrl: string) => void;
	postId: number;
	style?: CSSProperties;
	title?: string;
}

export const PostImageInput = forwardRef<HTMLInputElement, PostImageInputProps>((props, ref) => {
	const {
		children = "Upload an image",
		className,
		disabled,
		onUpload,
		postId,
		style,
		title
	} = props;

	const [{ fetching }, uploadPostImage] = useUploadPostImageMutation();

	return (
		<Button
			as={"label" as any}
			className={className}
			disabled={disabled || fetching}
			style={style}
			title={title}
		>
			{fetching ? (
				<>
					<Spinner tw="mr-2" />
					Uploading
				</>
			) : (
				children
			)}
			<VisuallyHidden
				as="input"
				disabled={fetching}
				ref={ref}
				accept={ACCEPTED_IMAGE_TYPES.join(",")}
				onChange={async (e: ChangeEvent<HTMLInputElement>) => {
					const file = e.target.files?.[0];

					if (!file) return;

					/**
					 * TODO
					 * @description Handle errors gracefully
					 * @author David Lee
					 * @date October 31, 2021
					 */
					const postImage = await uploadPostImage({
						where: { id: postId },
						data: {
							image: file
						}
					}).then((result) => result.data?.postImage ?? null);

					if (!postImage) {
						toast.error("Image could not be uploaded");

						return;
					}

					onUpload?.(postImage.url);

					toast.success("Image successfully uploaded!");
				}}
				type="file"
			/>
		</Button>
	);
});

PostImageInput.displayName = "PostImageInput";
