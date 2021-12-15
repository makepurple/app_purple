import { useCallback } from "react";
import { Editor, Element as SlateElement, Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import type { CustomElement } from "../Element";
import { isListType } from "../Element/ListItem";

export const insertBlock = (editor: Editor, element: CustomElement): void => {
	Transforms.insertNodes(editor, element);

	Transforms.unwrapNodes(editor, {
		match: (node) =>
			isListType(
				(!Editor.isEditor(node) && SlateElement.isElement(node) && node.type) as any
			),
		split: true
	});
};

export const useInsertBlock = () => {
	const editor = useSlateStatic();

	return useCallback((element: CustomElement) => insertBlock(editor, element), [editor]);
};
