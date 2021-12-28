import React, { forwardRef, useImperativeHandle } from "react";
import { useWordCount } from "./hooks";

export type DocumentEditorInfoProps = Record<string, never>;

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
