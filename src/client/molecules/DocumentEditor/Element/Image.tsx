import { insertBlock } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { ImageIcon } from "@/client/svgs";
import { UrlUtils } from "@/utils";
import NextImage from "next/image";
import React, {
	CSSProperties,
	FC,
	forwardRef,
	MouseEvent,
	useCallback,
	useImperativeHandle
} from "react";
import { Editor } from "slate";
import { RenderElementProps, useFocused, useSelected, useSlateStatic } from "slate-react";
import tw, { css, styled, theme } from "twin.macro";

const Root = styled.div``;

const ImageContainer = styled.div<{ $focused?: boolean }>`
	${tw`
		relative
		flex
		justify-center
		items-center
		h-64
		cursor-pointer
	`}

	${({ $focused }) =>
		$focused &&
		css`
			box-shadow: 0 0 0 3px ${theme`colors.purple.300`};
		`}
`;

const isImageUrl = (url: string): boolean => {
	if (!url) return false;
	if (!UrlUtils.isValid(url)) return false;

	const extension = new URL(url).pathname.split(".").at(-1);

	if (!extension) return false;

	return ["gif", "jpeg", "jpg", "png", "webp"].includes(extension);
};

const insertImage = (editor: Editor, url: string): void => {
	if (!isImageUrl(url)) return;

	const image: ImageElement = {
		type: "image",
		url,
		children: [{ text: "" }]
	};

	insertBlock(editor, image);
};

export const withImages = (editor: Editor): Editor => {
	const { insertData, isVoid } = editor;

	editor.isVoid = (element) => {
		return element.type === "image" ? true : isVoid(element);
	};

	editor.insertData = (data) => {
		const text = data.getData("text/plain");
		const files = [...data.files];

		if (files.length) {
			files.forEach((file) => {
				const reader = new FileReader();
				const [mime] = file.type.split("/");

				if (mime !== "image") return;

				reader.addEventListener("load", () => {
					const url = reader.result;

					if (typeof url !== "string") return;

					insertImage(editor, url);
				});

				reader.readAsDataURL(file);
			});

			return;
		}

		if (isImageUrl(text)) {
			insertImage(editor, text);

			return;
		}

		insertData(data);
	};

	return editor;
};

export type ImageSlateType = "image";

export type ImageElement = {
	type: ImageSlateType;
	children: [{ text: string }];
	url: string;
};

export interface ImageToolbarButtonRef {
	onImageUrl: (url: string) => void;
}

export interface ImageToolbarButtonProps {
	className?: string;
	onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
	style?: CSSProperties;
}

export const ImageToolbarButton = forwardRef<ImageToolbarButtonRef, ImageToolbarButtonProps>(
	(props, ref) => {
		const { className, onClick, style } = props;

		const editor = useSlateStatic();

		const makeImage = useCallback(() => {
			const url = window.prompt("Enter the URL for this image");

			if (!url) return;

			insertImage(editor, url);
		}, [editor]);

		const onImageUrl = useCallback((url: string): void => insertImage(editor, url), [editor]);

		useImperativeHandle(ref, () => ({ onImageUrl }));

		return (
			<ToolbarButton
				className={className}
				onClick={(event) => {
					event.preventDefault();

					onClick ? onClick(event) : makeImage();
				}}
				style={style}
				aria-label="image"
			>
				<ImageIcon height={20} width={20} />
			</ToolbarButton>
		);
	}
);

ImageToolbarButton.displayName = "ImageToolbarButton";

export const Image: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	const selected = useSelected();
	const focused = useFocused();

	if (element.type !== "image") return null;

	return (
		<Root {...attributes}>
			<ImageContainer contentEditable={false} $focused={selected && focused}>
				<NextImage alt="" src={element.url} layout="fill" objectFit="contain" unoptimized />
			</ImageContainer>
			{children}
		</Root>
	);
};
