import { useCallback } from "react";
import { useSlateStatic } from "slate-react";
import { MarkType, useIsMarkActive } from ".";

export const useToggleMark = () => {
	const editor = useSlateStatic();

	const isMarkActive = useIsMarkActive();

	const toggleMark = useCallback(
		(mark: MarkType) => {
			const isActive: boolean = isMarkActive(mark);

			isActive ? editor.removeMark(mark) : editor.addMark(mark, true);
		},
		[editor, isMarkActive]
	);

	return toggleMark;
};
