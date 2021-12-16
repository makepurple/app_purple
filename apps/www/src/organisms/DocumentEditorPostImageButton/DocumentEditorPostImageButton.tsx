import { DocumentEditor, ImageIcon, useInsertImage } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import { PostImageInput } from "../PostImageInput";

export interface DocumentEditorPostImageButtonProps {
	className?: string;
	postId: number;
	style?: CSSProperties;
}

export const DocumentEditorPostImageButton: FC<DocumentEditorPostImageButtonProps> = ({
	className,
	postId,
	style
}) => {
	const insertImage = useInsertImage();

	return (
		<DocumentEditor.Toolbar.Button
			as={PostImageInput}
			className={className}
			onUpload={(imageUrl: string) => {
				insertImage(imageUrl);
			}}
			postId={postId}
			style={style}
			title="image"
			aria-label="image"
		>
			<ImageIcon height={20} width={20} />
		</DocumentEditor.Toolbar.Button>
	);
};
