import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { ImageIcon } from "@/client/svgs";
import { UrlUtils } from "@/utils";
import NextImage from "next/image";
import React, { FC, useCallback } from "react";
import { Editor, Transforms } from "slate";
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

const insertImage = (editor: Editor, url: string): void => {
	const image: ImageElement = {
		type: "image",
		url,
		children: [{ text: "" }]
	};

	Transforms.insertNodes(editor, image);
};

const isImageUrl = (url: string): boolean => {
	if (!url) return false;
	if (!UrlUtils.isValid(url)) return false;

	const extension = new URL(url).pathname.split(".")[-1];

	return ["gif", "jpeg", "jpg", "png", "webp"].includes(extension);
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

export const ImageToolbarButton: FC<Record<string, never>> = () => {
	const editor = useSlateStatic();

	const makeImage = useCallback(() => {
		const url = window.prompt("Enter the URL for this image");

		if (!url) return;

		insertImage(editor, url);
	}, [editor]);

	return (
		<ToolbarButton
			onClick={(event) => {
				event.preventDefault();

				makeImage();
			}}
		>
			<ImageIcon height={20} width={20} />
		</ToolbarButton>
	);
};

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
