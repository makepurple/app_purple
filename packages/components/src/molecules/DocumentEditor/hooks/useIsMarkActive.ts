import { useCallback } from "react";
import { BaseEditor, Editor } from "slate";
import { useSlate } from "slate-react";

export type MarkType = keyof NonNullable<BaseEditor["marks"]>;

export const isMarkActive = (editor: Editor, mark: MarkType): boolean => {
	return !!Editor.marks(editor)?.[mark];
};

export const useIsMarkActive = () => {
	const editor = useSlate();

	return useCallback((mark: MarkType): boolean => isMarkActive(editor, mark), [editor]);
};
