import { UrlUtils } from "@makepurple/utils";
import React, { FC, useCallback } from "react";
import { Descendant, Editor, Element, Path, Range, Transforms } from "slate";
import { RenderElementProps, useSlateStatic } from "slate-react";
import tw from "twin.macro";
import { Anchor } from "../../../atoms";
import { LinkIcon } from "../../../svgs";
import { isBlockActive, useIsBlockActive } from "../hooks/useIsBlockActive";
import { toggleBlock } from "../hooks/useToggleBlock";
import { ToolbarButton } from "../Shared";

export type LinkSlateType = "link";

export type LinkElement = {
	type: LinkSlateType;
	children: Descendant[];
	url: string;
};

const wrapLink = (editor: Editor, url: string): void => {
	const isLinkActive = isBlockActive(editor, "link");

	if (isLinkActive) toggleBlock(editor, "link", false);

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
	const { insertBreak, insertData, insertText, isInline } = editor;

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

	/**
	 * @description We're not allowing for multi-line links. If a user inserts a break at or before
	 * a link, a new empty paragraph is inserted after the link and the cursor is moved there
	 * instead.
	 * @author David Lee
	 * @date January 1, 2022
	 */
	editor.insertBreak = (...args) => {
		if (!editor.selection) return insertBreak(...args);

		const [elementNode, elementPath] = Editor.parent(editor, editor.selection.focus.path);

		if ((elementNode as Element).type !== "link") return insertBreak(...args);

		const [, parentPath] = Editor.parent(editor, elementPath);
		const nextPath = Path.next(parentPath);

		Transforms.insertNodes(
			editor,
			{ type: "paragraph", children: [{ text: "" }] },
			{ at: nextPath, select: true }
		);
	};

	return editor;
};

export const LinkToolbarButton: FC<Record<string, never>> = () => {
	const editor = useSlateStatic();

	const isActive = useIsBlockActive();

	const makeLink = useCallback(() => {
		if (!editor.selection) return;

		const url = window.prompt("Enter the URL for this link:");

		if (!url) return;

		wrapLink(editor, url);
	}, [editor]);

	return (
		<ToolbarButton
			active={isActive("link")}
			onMouseDown={(event) => {
				event.preventDefault();

				if (!isActive("link")) {
					makeLink();

					return;
				}

				Transforms.unwrapNodes(editor, {
					match: (n) => !Editor.isEditor(n) && Element.isElement(n) && n.type === "link"
				});
			}}
			title="link"
			aria-label="link"
		>
			<LinkIcon height={20} width={20} />
		</ToolbarButton>
	);
};

const LinkAnchor = tw(Anchor)`
	whitespace-normal
`;

export const Link: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	if (element.type !== "link") return null;

	return (
		<LinkAnchor {...attributes} href={element.url} rel="noreferrer noopener" target="_blank">
			{children}
		</LinkAnchor>
	);
};
