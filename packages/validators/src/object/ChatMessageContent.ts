import { ArrayUtils } from "@makepurple/utils";
import Schema, { array, boolean, string, Type } from "computed-types";
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
	children: array.of(CustomText).min(1).max(1),
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

const isAllWhitespace = (element: Type<typeof CustomElement>): boolean => {
	return [...element.children].every((child) => {
		const [, text] = CustomText.destruct()(child as any);
		const [, link] = LinkElement.destruct()(child as any);

		if (text) return !text.text.trim().length;
		if (link) return link.children.every((linkText) => !linkText.text.trim().length);

		return false;
	});
};

const schema = array
	.of(CustomElement)
	.transform((value) => {
		const trimStart = ArrayUtils.dropWhile(value, (element) => isAllWhitespace(element));
		const trimEnd = ArrayUtils.dropRightWhile(trimStart, (element) => isAllWhitespace(element));

		return trimEnd.slice();
	})
	.test((value) => {
		if (!value.length) throw new Error("Content cannot be blank");

		return value;
	});

export const ChatMessageContent: typeof schema = schema;
