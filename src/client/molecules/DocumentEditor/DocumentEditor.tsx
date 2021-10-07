import { Toolbar } from "@/client/atoms";
import React, { CSSProperties, FC, useCallback, useMemo, useState } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import {
	Editable,
	ReactEditor,
	RenderElementProps,
	RenderLeafProps,
	Slate,
	withReact
} from "slate-react";
import tw from "twin.macro";
import {
	BulletedListToolbarButton,
	CodeBlockToolbarButton,
	CustomElement,
	Element,
	HeadingToolbarButton,
	LinkToolbarButton,
	NumberedListToolbarButton,
	withCodeBlock,
	withLinks
} from "./Element";
import { BlockQuoteToolbarButton } from "./Element/BlockQuote";
import {
	BoldToolbarButton,
	CodeToolbarButton,
	CustomText,
	ItalicToolbarButton,
	Leaf
} from "./Leaf";

const Root = tw.div`
	shadow-md
	border
	border-solid
	border-gray-200
	rounded-md
	overflow-hidden
`;

const EditorToolbar = tw(Toolbar)`
	shadow-none
	border-0
	border-b
	border-solid
	border-gray-200
`;

const EditableContainer = tw.div`
	p-5
`;

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
	name?: string;
	placeholder?: string;
	style?: CSSProperties;
}

export const DocumentEditor: FC<DocumentEditorProps> = ({
	readOnly,
	className,
	name,
	placeholder = "",
	style
}) => {
	const editor = useMemo(() => withLinks(withCodeBlock(withReact(createEditor()))), []);
	const [value, setValue] = useState<Descendant[]>([
		{
			type: "paragraph",
			children: [{ text: placeholder }]
		}
	]);

	const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
	const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

	return (
		<Root className={className} style={style}>
			<Slate editor={editor} value={value} onChange={(newValue) => setValue(newValue)}>
				<EditorToolbar>
					<CodeBlockToolbarButton />
					<HeadingToolbarButton />
					<BoldToolbarButton />
					<ItalicToolbarButton />
					<CodeToolbarButton />
					<BulletedListToolbarButton />
					<NumberedListToolbarButton />
					<BlockQuoteToolbarButton />
					<LinkToolbarButton />
				</EditorToolbar>
				<EditableContainer>
					<Editable
						readOnly={readOnly}
						autoFocus
						name={name}
						renderElement={renderElement}
						renderLeaf={renderLeaf}
						aria-label={name}
					/>
				</EditableContainer>
			</Slate>
		</Root>
	);
};
