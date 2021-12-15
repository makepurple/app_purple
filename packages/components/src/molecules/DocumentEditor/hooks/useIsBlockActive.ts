import { useCallback } from "react";
import { Editor, Element as SlateElement } from "slate";
import { useSlateStatic } from "slate-react";
import type { CustomElementType } from "../Element";

export const isBlockActive = (editor: Editor, blockType: CustomElementType): boolean => {
	const [match] = Editor.nodes(editor, {
		match: (node) => {
			return (
				!Editor.isEditor(node) && SlateElement.isElement(node) && node.type === blockType
			);
		}
	});

	return !!match;
};

export const useIsBlockActive = () => {
	const editor = useSlateStatic();

	return useCallback(
		(blockType: CustomElementType): boolean => isBlockActive(editor, blockType),
		[editor]
	);
};
