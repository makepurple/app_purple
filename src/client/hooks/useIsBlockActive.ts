import { useCallback } from "react";
import { Editor, Element as SlateElement } from "slate";
import { useSlateStatic } from "slate-react";

export const useIsBlockActive = () => {
	const editor = useSlateStatic();

	const isBlockActive = useCallback(
		(blockType: string): boolean => {
			const [match] = Editor.nodes(editor, {
				match: (node) => {
					return (
						!Editor.isEditor(node) &&
						SlateElement.isElement(node) &&
						node.type === blockType
					);
				}
			});

			return !!match;
		},
		[editor]
	);

	return isBlockActive;
};
