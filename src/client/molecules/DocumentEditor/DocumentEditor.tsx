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
import tw, { styled } from "twin.macro";
import {
	BulletedListToolbarButton,
	CodeBlockToolbarButton,
	CustomElement,
	Element,
	HeadingToolbarButton,
	withCodeBlock
} from "./Element";
import {
	BoldToolbarButton,
	CodeToolbarButton,
	CustomText,
	ItalicToolbarButton,
	Leaf
} from "./Leaf";

const Root = styled.div`
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	border-radius: 0.375rem;
	overflow: hidden;
	${tw`shadow-md`}
`;

const EditorToolbar = styled(Toolbar)`
	box-shadow: none;
	border: none;
	border-bottom: 1px solid ${({ theme }) => theme.palette.lightGrey};
`;

const EditableContainer = styled.div`
	padding: 1.375rem;
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
	placeholder?: string;
	style?: CSSProperties;
}

export const DocumentEditor: FC<DocumentEditorProps> = ({
	readOnly,
	className,
	placeholder = "",
	style
}) => {
	const editor = useMemo(() => withCodeBlock(withReact(createEditor())), []);
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
				</EditorToolbar>
				<EditableContainer>
					<Editable
						readOnly={readOnly}
						autoFocus
						renderElement={renderElement}
						renderLeaf={renderLeaf}
					/>
				</EditableContainer>
			</Slate>
		</Root>
	);
};
