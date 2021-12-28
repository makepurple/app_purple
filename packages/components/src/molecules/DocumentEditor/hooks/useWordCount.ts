import { useMemo } from "react";
import { Node as SlateNode } from "slate";
import { useSlateStatic } from "slate-react";

export const useWordCount = () => {
	const editor = useSlateStatic();

	const wordCount = useMemo(() => {
		const lines = editor.children.map((child) => SlateNode.string(child)).join("\n");

		return lines.trim().split(/\s+/).length;
	}, [editor.children]);

	return wordCount;
};
