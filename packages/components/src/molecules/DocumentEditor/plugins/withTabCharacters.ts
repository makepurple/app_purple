import { Editor } from "slate";

export const withTabCharacters = (editor: Editor) => {
	const { insertText } = editor;

	editor.insertText = (text) => {
		insertText(text.replace(/\t/g, "    "));
	};

	return editor;
};
