import { useOnKeyDown } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { CodeBlockType } from "@makepurple/validators";
import composeRefs from "@seznam/compose-react-refs";
import Prism from "prism-react-renderer/prism";
import React, { forwardRef, useCallback, useContext } from "react";
import { BaseRange, Editor, Element as SlateElement, Text as SlateText, Transforms } from "slate";
import { Editable, RenderElementProps, RenderLeafProps, useSlateStatic } from "slate-react";
import tw, { css, styled } from "twin.macro";
import { DocumentEditorContext } from "./context";
import { Element, normalizeTokens } from "./Element";
import { isBlockActive } from "./hooks";
import { Leaf } from "./Leaf";
import { Placeholder } from "./Placeholder";

(typeof global !== "undefined" ? global : window).Prism = Prism;

require("prismjs/components/prism-go");
require("prismjs/components/prism-graphql");
require("prismjs/components/prism-handlebars");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-python");
require("prismjs/components/prism-scss");
require("prismjs/components/prism-sql");
require("prismjs/components/prism-tsx");
require("prismjs/components/prism-yaml");

/**
 * !HACK
 * @description Nothing in here should have visual focus, since the whole thing is a giant input
 * @author David Lee
 * @date October 31, 2021
 */
const EditableContainer = styled.div<{ $readOnly?: boolean }>`
	${tw`
		p-5
		bg-indigo-50
		transition
		duration-300
		ease-in-out
		focus-within:bg-white
	`}

	&, & > * {
		box-shadow: none !important;
	}

	${({ $readOnly }) =>
		$readOnly &&
		css`
			background-color: inherit;
		`}
`;

export type DocumentEditorEditableProps = InferComponentProps<typeof Editable>;

const _DocumentEditorEditable = forwardRef<HTMLDivElement, DocumentEditorEditableProps>(
	(props, ref) => {
		const { className, style, readOnly: _readOnly, ...restEditableProps } = props;

		const context = useContext(DocumentEditorContext);

		const editor = useSlateStatic();

		const composedRef = composeRefs(ref, context.editableRef);

		const renderElement = useCallback(
			(elementProps: RenderElementProps) => <Element {...elementProps} />,
			[]
		);
		const renderLeaf = useCallback((leafProps: RenderLeafProps) => <Leaf {...leafProps} />, []);

		const readOnly = _readOnly ?? context.readOnly;

		const onTabKey = useOnKeyDown({ key: "TAB" }, (e) => {
			if (e.shiftKey) return;

			e.preventDefault();

			editor.insertText("\t");
		});
		const onRightKey = useOnKeyDown({ key: "RIGHT" }, () => undefined);
		const onEnterKey = useOnKeyDown({ key: "ENTER" }, (e) => {
			const isCode = Object.values(CodeBlockType).some((codeType) =>
				isBlockActive(editor, codeType)
			);

			if (isCode) {
				e.preventDefault();

				editor.insertText("\n");
			}
		});
		const onDownKey = useOnKeyDown({ key: "DOWN" }, (e) => {
			const isCursorEnd = !Editor.next(editor);

			if (!isCursorEnd) return;

			e.preventDefault();

			editor.apply({
				type: "insert_node",
				node: { type: "paragraph", children: [{ text: "" }] },
				path: [editor.children.length]
			});

			Transforms.move(editor, { distance: 1, unit: "line" });
		});

		return (
			<EditableContainer
				ref={composedRef}
				className={className}
				style={style}
				$readOnly={readOnly}
			>
				<Editable
					decorate={(entry) => {
						const ranges: BaseRange[] = [];

						const [node, path] = entry;

						if (!SlateText.isText(node)) return ranges;

						const [parentNode] = Editor.parent(editor, path);

						if (!SlateElement.isElement(parentNode)) return ranges;

						const parentType = parentNode.type;

						if (!Object.values(CodeBlockType).includes(parentType as CodeBlockType)) {
							return ranges;
						}

						const language = parentType.replace(/^language-/g, "");
						const grammar = Prism.languages[language];

						if (!grammar) return ranges;

						const tokens = Prism.tokenize(node.text, grammar, language as any);
						const codeLines = normalizeTokens(tokens as any);

						let start = 0;

						codeLines.forEach((codeLine) => {
							codeLine.forEach((codeToken) => {
								const length = codeToken.content?.length ?? 1;
								const end = start + length;

								const leaf = {
									codeToken,
									anchor: { path, offset: start },
									focus: { path, offset: end }
								};

								start = end;

								ranges.push(leaf);
							});
						});

						return ranges;
					}}
					/**
					 * !HACK
					 * @magic
					 * @description For some reason, when we return a truthy value from this event
					 * handler, we can press -> (right arrow) at the end of a link element to move
					 * to the next text node (toggling off the link type), which desired.
					 *
					 * If this behavior ever breaks, consider replacing this with something more
					 * manual with slate operations.
					 * @author David Lee
					 * @date January 1, 2021
					 */
					onKeyDown={(e) => {
						if (onTabKey(e)) return 1;
						if (onRightKey(e)) return 1;

						onEnterKey(e);
						onDownKey(e);
					}}
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					renderPlaceholder={Placeholder}
					readOnly={readOnly}
					aria-readonly={readOnly}
					{...restEditableProps}
				/>
			</EditableContainer>
		);
	}
);

_DocumentEditorEditable.displayName = "DocumentEditorEditable";

export const DocumentEditorEditable = styled(_DocumentEditorEditable)``;
