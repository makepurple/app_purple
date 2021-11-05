import Schema, { array, boolean, string } from "computed-types";

const SUPPORTED_LANGUAGES = [
	"language-jsx",
	"language-tsx",
	"language-handlebars",
	"language-scss",
	"language-graphql",
	"language-python",
	"language-go",
	"language-sql",
	"language-yaml"
] as const;

const SUPPORTED_HEADINGS = [
	"heading-one",
	"heading-two",
	"heading-three",
	"heading-four",
	"heading-five",
	"heading-six"
] as const;

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
	type: string.test((value) => {
		return SUPPORTED_LANGUAGES.includes(value as any);
	}),
	children: array.of(CustomText)
});

const HeadingElement = Schema({
	type: string.test((value) => {
		return SUPPORTED_HEADINGS.includes(value as any);
	}),
	children: array.of(CustomText)
});

const ImageElement = Schema({
	type: string.equals("image"),
	children: array.of(CustomText),
	url: string
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
	children: array.of(CustomText)
});

const CustomElement = Schema.either(
	BlockQuoteElement,
	BulletedListElement,
	CodeBlockElement,
	HeadingElement,
	ImageElement,
	LinkElement,
	NumberedListElement,
	ParagraphElement
);

export const PostContent = array.of(CustomElement);
