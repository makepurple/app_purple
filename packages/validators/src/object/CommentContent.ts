import Schema, { array, boolean, string } from "computed-types";
import { CodeBlockType } from "./DocumentEditorValue";

const CustomText = Schema({
	bold: boolean.strictOptional(),
	code: boolean.strictOptional(),
	italic: boolean.strictOptional(),
	text: string,
	underline: boolean.strictOptional()
});

const BlockQuoteElement = Schema({
	type: string.equals("block-quote"),
	children: array.of(CustomText)
});

const ListItemElement = Schema({
	type: string.equals("list-item"),
	children: array.of(CustomText)
});

const BulletedListElement = Schema({
	type: string.equals("bulleted-list"),
	children: array.of(ListItemElement)
});

const CodeBlockElement = Schema({
	type: Schema.enum(CodeBlockType),
	children: array.of(CustomText)
});

const LinkElement = Schema({
	type: string.equals("link"),
	children: array.of(CustomText),
	url: string
});

const NumberedListElement = Schema({
	type: string.equals("numbered-list"),
	children: array.of(ListItemElement)
});

const ParagraphElement = Schema({
	type: string.equals("paragraph"),
	children: array.of(
		Schema.either(
			CustomText,
			BlockQuoteElement,
			BulletedListElement,
			CodeBlockElement,
			LinkElement,
			NumberedListElement
		)
	)
});

const CustomElement = Schema.either(
	BlockQuoteElement,
	BulletedListElement,
	CodeBlockElement,
	LinkElement,
	NumberedListElement,
	ParagraphElement
);

const schema = array.of(CustomElement);

export const CommentContent: typeof schema = schema;
