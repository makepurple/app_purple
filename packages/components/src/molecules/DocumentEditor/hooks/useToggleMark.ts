import { useCallback } from "react";
import { Editor } from "slate";
import { useSlateStatic } from "slate-react";
import { isMarkActive, MarkType } from "./useIsMarkActive";

export const toggleMark = (editor: Editor, mark: MarkType, force?: boolean) => {
	const isActive: boolean = isMarkActive(editor, mark);

	if (typeof force === "boolean") {
		!force ? editor.removeMark(mark) : editor.addMark(mark, true);

		return;
	}

	isActive ? editor.removeMark(mark) : editor.addMark(mark, true);
};

export const useToggleMark = () => {
	const editor = useSlateStatic();

	return useCallback(
		(mark: MarkType, force?: boolean): void => toggleMark(editor, mark, force),
		[editor]
	);
};
