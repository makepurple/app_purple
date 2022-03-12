import { createContext, MutableRefObject } from "react";

export interface DocumentEditorContextValue {
	editableRef: MutableRefObject<HTMLDivElement | null>;
	readOnly?: boolean;
}

export const DocumentEditorContext = createContext<DocumentEditorContextValue>({
	editableRef: { current: null }
});
