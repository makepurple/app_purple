import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import { BlockQuote, BlockQuoteElement } from "./BlockQuote";
import { BulletedList, BulletedListElement } from "./BulletedList";
import { CodeBlock, CodeBlockElement } from "./CodeBlock";
import { Heading, HeadingElement } from "./Heading";
import { Image, ImageElement } from "./Image";
import { Link, LinkElement } from "./Link";
import { ListItem, ListItemElement } from "./ListItem";
import { NumberedList, NumberedListElement } from "./NumberedList";
import { Paragraph, ParagraphElement } from "./Paragraph";

export type CustomElement =
	| BlockQuoteElement
	| BulletedListElement
	| CodeBlockElement
	| HeadingElement
	| ImageElement
	| LinkElement
	| ListItemElement
	| NumberedListElement
	| ParagraphElement;

export type CustomElementType = CustomElement["type"];

export const Element: FC<RenderElementProps> = (props) => {
	const { element } = props;

	if (element.type.startsWith("language-")) {
		return <CodeBlock {...props} />;
	}

	if (element.type.startsWith("heading-")) {
		return <Heading {...props} />;
	}

	switch (element.type) {
		case "block-quote":
			return <BlockQuote {...props} />;
		case "bulleted-list":
			return <BulletedList {...props} />;
		case "image":
			// eslint-disable-next-line jsx-a11y/alt-text
			return <Image {...props} />;
		case "link":
			return <Link {...props} />;
		case "list-item":
			return <ListItem {...props} />;
		case "numbered-list":
			return <NumberedList {...props} />;
		default:
			return <Paragraph {...props} />;
	}
};
