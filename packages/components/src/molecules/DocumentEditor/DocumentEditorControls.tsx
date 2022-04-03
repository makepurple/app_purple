import React, { forwardRef, useCallback, useImperativeHandle } from "react";
import { useSlateStatic } from "slate-react";

// eslint-disable-next-line @typescript-eslint/ban-types
export type DocumentEditorControlsProps = {};

export interface DocumentEditorControlsRef {
	reset: () => void;
}

export const DocumentEditorControls = forwardRef<
	DocumentEditorControlsRef,
	DocumentEditorControlsProps
>((props, ref) => {
	const editor = useSlateStatic();

	const reset = useCallback((): void => {
		editor.children.forEach((node) => editor.apply({ type: "remove_node", path: [0], node }));

		editor.apply({
			type: "insert_node",
			path: [0],
			node: {
				type: "paragraph",
				children: [{ text: "" }]
			}
		});
	}, [editor]);

	useImperativeHandle(ref, () => ({
		reset
	}));

	return <></>;
});

DocumentEditorControls.displayName = "DocumentEditorControls";
