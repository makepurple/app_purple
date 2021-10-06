import type { CustomElementType } from "@/client/molecules/DocumentEditor/Element";
import { isListType } from "@/client/molecules/DocumentEditor/Element/ListItem";
import { useCallback } from "react";
import { Editor, Element as SlateElement, Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import { useIsBlockActive } from ".";

export const useToggleBlock = () => {
	const editor = useSlateStatic();

	const isBlockActive = useIsBlockActive();

	const toggleBlock = useCallback(
		(blockType: CustomElementType, force?: boolean): void => {
			const isActive = isBlockActive(blockType);
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
					type: !force ? "paragraph" : isList ? "list-item" : blockType
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
				type: isActive ? "paragraph" : isList ? "list-item" : blockType
			});

			if (!isActive && isList) {
				Transforms.wrapNodes(editor, {
					type: blockType,
					children: []
				});
			}
		},
		[editor, isBlockActive]
	);

	return toggleBlock;
};
