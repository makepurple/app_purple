import { Toolbar } from "@/client/atoms";
import { ObjectUtils } from "@/utils";
import tw, { styled } from "twin.macro";
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

export const DocumentEditorToolbar = ObjectUtils.setStatic(
	styled(Toolbar)`
		${tw`
			grid
			gap-1
			h-auto
			p-1
			shadow-none
			border-0
			border-b
			border-solid
			border-gray-200
		`}
		grid-template-columns: repeat(auto-fill, minmax(3rem, 1fr));
		grid-auto-rows: minmax(3rem, 1fr);
	`,
	{
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
	}
);

DocumentEditorToolbar.displayName = "DocumentEditorToolbar";
