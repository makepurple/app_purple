import { Toolbar } from "@/client/atoms";
import React, { CSSProperties, FC, useMemo, useState } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import styled from "styled-components";
import { Code } from "./Code";
import { CodeBlock, CodeBlockSlateType, CodeBlockToolbarButton, withCodeBlock } from "./CodeBlock";

const Root = styled.div`
	box-shadow: ${({ theme }) => theme.shadows.md};
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	border-radius: 0.375rem;
	overflow: hidden;
`;

const EditorToolbar = styled(Toolbar)`
	box-shadow: none;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey};
`;

const EditableContainer = styled.div`
	padding: 1.375rem;
`;

type CustomElementType =
	| "bulleted-list"
	| "code"
	| "heading-one"
	| "heading-two"
	| CodeBlockSlateType
	| "numbered-list"
	| "paragraph";
type CustomText = { text: string };
type CustomElement = { type: CustomElementType; children: (CustomText | CustomElement)[] };

declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

export interface DocumentEditorProps {
	readOnly?: boolean;
	className?: string;
	style?: CSSProperties;
}

export const DocumentEditor: FC<DocumentEditorProps> = ({ readOnly, className, style }) => {
	const editor = useMemo(() => withCodeBlock(withReact(createEditor())), []);
	const [value, setValue] = useState<Descendant[]>([
		{
			type: "paragraph",
			children: [{ text: "Hello world" }]
		}
	]);

	return (
		<Root>
			<Slate editor={editor} value={value} onChange={setValue}>
				<EditorToolbar>
					<CodeBlockToolbarButton />
				</EditorToolbar>
				<EditableContainer>
					<Editable
						readOnly={readOnly}
						className={className}
						renderElement={(renderElementProps) => {
							const { attributes, children, element } = renderElementProps;

							if (element.type.startsWith("language-")) {
								return <CodeBlock {...renderElementProps} />;
							}

							switch (element.type) {
								case "code":
									return <Code {...attributes}>{children}</Code>;
								default:
									return <div {...attributes}>{children}</div>;
							}
						}}
						style={style}
					/>
				</EditableContainer>
			</Slate>
		</Root>
	);
};
