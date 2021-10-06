import { Anchor } from "@/client/atoms";
import { isBlockActive, toggleBlock } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { LinkIcon } from "@/client/svgs";
import { UrlUtils } from "@/utils";
import React, { FC, useCallback } from "react";
import { Descendant, Editor, Range, Transforms } from "slate";
import { RenderElementProps, useSlateStatic } from "slate-react";

export type LinkSlateType = "link";

export type LinkElement = {
	type: LinkSlateType;
	children: Descendant[];
	url: string;
};

const wrapLink = (editor: Editor, url: string): void => {
	const isLinkActive = isBlockActive(editor, "link");

	if (isLinkActive) {
		toggleBlock(editor, "link", false);
	}

	const isCollapsed = editor.selection && Range.isCollapsed(editor.selection);

	const newLink: LinkElement = {
		type: "link",
		url,
		children: isCollapsed ? [{ text: url }] : []
	};

	if (isCollapsed) {
		Transforms.insertNodes(editor, newLink);
	} else {
		Transforms.wrapNodes(editor, newLink, { split: true });
		Transforms.collapse(editor, { edge: "end" });
	}
};

export const withLinks = (editor: Editor): Editor => {
	const { insertData, insertText, isInline } = editor;

	editor.isInline = (element) => {
		return element.type === "link" ? true : isInline(element);
	};

	editor.insertText = (text) => {
		if (text && UrlUtils.isValid(text)) {
			wrapLink(editor, text);
		} else {
			insertText(text);
		}
	};

	editor.insertData = (data) => {
		const text = data.getData("text/plain");

		if (text && UrlUtils.isValid(text)) {
			wrapLink(editor, text);
		} else {
			insertData(data);
		}
	};

	return editor;
};

export const LinkToolbarButton: FC<Record<string, never>> = () => {
	const editor = useSlateStatic();

	const makeLink = useCallback(() => {
		if (!editor.selection) return;

		const url = window.prompt("Enter the URL for this link:");

		if (!url) return;

		wrapLink(editor, url);
	}, [editor]);

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				const isLinkActive = isBlockActive(editor, "link");

				isLinkActive ? toggleBlock(editor, "link", false) : makeLink();
			}}
			title="link"
			aria-label="link"
		>
			<LinkIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const Link: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	if (element.type !== "link") return null;

	return (
		<Anchor {...attributes} href={element.url} rel="noreferrer noopener" target="_blank">
			{children}
		</Anchor>
	);
};
