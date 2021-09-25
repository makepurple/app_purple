import { useCallback } from "react";
import { Element as SlateElement, Transforms } from "slate";
import { useSlateStatic } from "slate-react";
import { useIsBlockActive } from ".";

export const useToggleBlock = () => {
	const editor = useSlateStatic();

	const isBlockActive = useIsBlockActive();

	const toggleBlock = useCallback(
		(blockType: SlateElement["type"], force?: boolean): void => {
			const isActive = isBlockActive(blockType);

			const toEnable: boolean = !!force || !isActive;

			Transforms.unwrapNodes(editor, {
				match: () => !isActive,
				split: true
			});

			Transforms.setNodes(editor, {
				type: toEnable ? blockType : "paragraph"
			});
		},
		[editor, isBlockActive]
	);

	return toggleBlock;
};
