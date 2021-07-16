import { Toolbar } from "@/client/atoms";
import React, { CSSProperties, FC, useMemo, useState } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { Editable, ReactEditor, Slate, withReact } from "slate-react";
import { Code } from "./Code";
import { CodeBlock, CodeBlockSlateType, withCodeBlock } from "./CodeBlock";

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
		},
		{
			type: "language-tsx",
			children: [{ text: "Hello world" }]
		}
	]);

	return (
		<Slate editor={editor} value={value} onChange={setValue}>
			<Toolbar />
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
		</Slate>
	);
};
