import { useCallback } from "react";
import { BaseEditor, Editor, Text as SlateText } from "slate";
import { useSlateStatic } from "slate-react";

export type MarkType = keyof NonNullable<BaseEditor["marks"]>;

export const useIsMarkActive = () => {
	const editor = useSlateStatic();

	const isMarkActive = useCallback(
		(mark: MarkType): boolean => {
			const [match] = Editor.nodes(editor, {
				match: (node) => {
					return !Editor.isEditor(node) && SlateText.isText(node) && !!node[mark];
				}
			});

			return !!match;
		},
		[editor]
	);

	return isMarkActive;
};
