import { ObjectUtils } from "@makepurple/utils";
import React, { FC, useContext } from "react";
import tw from "twin.macro";
import { Toolbar, ToolbarProps } from "../../atoms";
import { DocumentEditorContext } from "./context";
import {
	BlockQuoteToolbarButton,
	BulletedListToolbarButton,
	CodeBlockToolbarButton,
	HeadingToolbarButton,
	ImageToolbarButton,
	LinkToolbarButton,
	NumberedListToolbarButton
} from "./Element";
import {
	BoldToolbarButton,
	CodeToolbarButton,
	ItalicToolbarButton,
	UnderlineToolbarButton
} from "./Leaf";
import { ToolbarButton } from "./Shared";

const Root = tw(Toolbar)`
	grid
	grid-template-columns[repeat(auto-fill, minmax(3rem, 1fr))]
	grid-auto-rows[minmax(3rem, 1fr)]
	gap-1
	h-auto
	p-1
	shadow-none
	border-0
	border-t
	border-b
	border-solid
	border-gray-200
`;

export type DocumentEditorToolbarProps = ToolbarProps & {
	readOnly?: boolean;
};

const _DocumentEditorToolbar: FC<DocumentEditorToolbarProps> = (props) => {
	const { readOnly: _readOnly, ...toolbarProps } = props;
	const context = useContext(DocumentEditorContext);

	const readOnly = _readOnly ?? context.readOnly;

	if (readOnly) return null;

	return <Root {...toolbarProps} />;
};

_DocumentEditorToolbar.displayName = "DocumentEditorToolbar";

export const DocumentEditorToolbar = ObjectUtils.setStatic(_DocumentEditorToolbar, {
	BlockQuote: BlockQuoteToolbarButton,
	Bold: BoldToolbarButton,
	BulletedList: BulletedListToolbarButton,
	Button: ToolbarButton,
	Code: CodeToolbarButton,
	CodeBlock: CodeBlockToolbarButton,
	Heading: HeadingToolbarButton,
	Image: ImageToolbarButton,
	Italic: ItalicToolbarButton,
	Link: LinkToolbarButton,
	NumbedList: NumberedListToolbarButton,
	Underline: UnderlineToolbarButton
});
