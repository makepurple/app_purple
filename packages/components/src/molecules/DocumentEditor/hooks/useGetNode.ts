import { useCallback } from "react";
import { Editor, Element as SlateElement, NodeEntry as SlateNodeEntry } from "slate";
import { useSlate } from "slate-react";
import { CustomElementType } from "../Element";

export const getNode = (editor: Editor, blockType: CustomElementType): Maybe<SlateNodeEntry> => {
	const [entry] = Array.from(
		Editor.nodes(editor, {
			match: (node) => {
				return (
					!Editor.isEditor(node) &&
					SlateElement.isElement(node) &&
					node.type === blockType
				);
			}
		})
	);

	if (!entry) return null;

	const [matchNode, matchPath] = entry;

	return [matchNode, matchPath];
};

export const useGetNode = () => {
	const editor = useSlate();

	return useCallback(
		(blockType: CustomElementType): Maybe<SlateNodeEntry> => getNode(editor, blockType),
		[editor]
	);
};
