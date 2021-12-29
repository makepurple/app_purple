import React, { forwardRef, useImperativeHandle } from "react";
import { useWordCount } from "./hooks";

// eslint-disable-next-line @typescript-eslint/ban-types
export type DocumentEditorInfoProps = {};

export interface DocumentEditorInfoRef {
	wordCount: number;
}

export const DocumentEditorInfo = forwardRef<DocumentEditorInfoRef, DocumentEditorInfoProps>(
	(props, ref) => {
		const wordCount = useWordCount();

		useImperativeHandle(ref, () => ({ wordCount }));

		return <></>;
	}
);

DocumentEditorInfo.displayName = "DocumentEditorInfo";
