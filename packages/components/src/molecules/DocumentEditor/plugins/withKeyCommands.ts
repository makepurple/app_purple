import { Editor, Element, Node, Path, Transforms } from "slate";

export const withKeyCommands = (editor: Editor) => {
	const { deleteBackward, insertBreak, isVoid } = editor;

	editor.deleteBackward = (...args) => {
		if (!editor.selection) return deleteBackward(...args);

		const [parentNode, parentPath] = Editor.parent(editor, editor.selection.focus.path);

		if (
			editor.children.length > 1 &&
			(isVoid(parentNode as Element) || !Node.string(parentNode).length)
		) {
			Transforms.removeNodes(editor, { at: parentPath });

			return;
		}

		deleteBackward(...args);
	};

	editor.insertBreak = (...args) => {
		if (!editor.selection) return insertBreak(...args);

		const [parentNode, parentPath] = Editor.parent(editor, editor.selection.focus.path);
		const nextPath = Path.next(parentPath);

		if (isVoid(parentNode as Element)) {
			Transforms.insertNodes(
				editor,
				{ type: "paragraph", children: [{ text: "" }] },
				{ at: nextPath, select: true }
			);

			return;
		}

		return insertBreak(...args);
	};

	return editor;
};
