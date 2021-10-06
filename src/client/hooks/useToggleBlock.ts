import type { CustomElementType } from "@/client/molecules/DocumentEditor/Element";
import { isListType } from "@/client/molecules/DocumentEditor/Element/ListItem";
import { useCallback } from "react";
import { Editor, Element as SlateElement, Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import { isBlockActive } from "./useIsBlockActive";

export const toggleBlock = (
	editor: Editor,
	blockType: CustomElementType,
	force?: boolean
): void => {
	const isActive = isBlockActive(editor, blockType);
	const isList = isListType(blockType);

	Transforms.unwrapNodes(editor, {
		match: (node) =>
			isListType(
				(!Editor.isEditor(node) && SlateElement.isElement(node) && node.type) as any
			),
		split: true
	});

	if (typeof force === "boolean") {
		Transforms.setNodes(editor, {
			type: (!force ? "paragraph" : isList ? "list-item" : blockType) as any
		});

		if (force && isList) {
			Transforms.wrapNodes(editor, {
				type: blockType,
				children: []
			});
		}

		return;
	}

	Transforms.setNodes(editor, {
		type: (isActive ? "paragraph" : isList ? "list-item" : blockType) as any
	});

	if (!isActive && isList) {
		Transforms.wrapNodes(editor, {
			type: blockType,
			children: []
		});
	}
};

export const useToggleBlock = () => {
	const editor = useSlateStatic();

	return useCallback(
		(blockType: CustomElementType, force?: boolean): void => {
			return toggleBlock(editor, blockType, force);
		},
		[editor]
	);
};
