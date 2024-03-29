import { UrlUtils } from "@makepurple/utils";
import { useCallback } from "react";
import { Editor } from "slate";
import { useSlateStatic } from "slate-react";
import type { ImageElement } from "../Element";
import { insertBlock } from "./useInsertBlock";

export const insertImage = (editor: Editor, url: string): void => {
	if (!UrlUtils.isImage(url)) return;

	const image: ImageElement = {
		type: "image",
		url,
		children: [{ text: "" }]
	};

	insertBlock(editor, image);
};

export const useInsertImage = () => {
	const editor = useSlateStatic();

	return useCallback((url: string) => insertImage(editor, url), [editor]);
};
