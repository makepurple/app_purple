import { createContext } from "react";

export interface DocumentEditorContextValue {
	readOnly?: boolean;
}

export const DocumentEditorContext = createContext<DocumentEditorContextValue>({});
