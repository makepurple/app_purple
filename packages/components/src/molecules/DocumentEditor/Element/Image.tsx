import { UrlUtils } from "@makepurple/utils";
import NextImage from "next/image";
import React, {
	CSSProperties,
	FC,
	forwardRef,
	MouseEvent,
	useCallback,
	useImperativeHandle
} from "react";
import { Descendant, Editor } from "slate";
import { RenderElementProps, useFocused, useSelected, useSlateStatic } from "slate-react";
import tw, { css, styled, theme } from "twin.macro";
import { ImageIcon } from "../../../svgs";
import { insertImage } from "../hooks/useInsertImage";
import { useIsBlockActive } from "../hooks/useIsBlockActive";
import { ToolbarButton } from "../Shared";

const Root = styled.div``;

const ImageContainer = styled.div<{ $focused?: boolean }>`
	${tw`
		relative
		flex
		justify-center
		items-center
		h-64
	`}

	${({ $focused }) =>
		$focused &&
		css`
			box-shadow: 0 0 0 3px ${theme`colors.purple.300`};
		`}
`;

export const withImages = (editor: Editor): Editor => {
	const { insertData, isVoid } = editor;

	editor.isVoid = (element) => {
		return element.type === "image" ? true : isVoid(element);
	};

	editor.insertData = (data) => {
		const text = data.getData("text/plain");
		const files = Array.from(data.files);

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

		if (UrlUtils.isImage(text)) {
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
	children: Descendant[];
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

		const isActive = useIsBlockActive();

		const makeImage = useCallback(() => {
			const url = window.prompt("Enter the URL for this image");

			if (!url) return;

			insertImage(editor, url);
		}, [editor]);

		const onImageUrl = useCallback((url: string): void => insertImage(editor, url), [editor]);

		useImperativeHandle(ref, () => ({ onImageUrl }));

		return (
			<ToolbarButton
				active={isActive("image")}
				className={className}
				onClick={(event) => {
					event.preventDefault();

					onClick ? onClick(event) : makeImage();
				}}
				style={style}
				title="image"
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
