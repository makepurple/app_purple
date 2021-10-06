import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import { BlockQuote, BlockQuoteElement } from "./BlockQuote";
import { BulletedList, BulletedListElement } from "./BulletedList";
import { CodeBlock, CodeBlockElement } from "./CodeBlock";
import { Heading, HeadingElement } from "./Heading";
import { ListItem, ListItemElement } from "./ListItem";
import { NumberedList, NumberedListElement } from "./NumberedList";
import { Paragraph, ParagraphElement } from "./Paragraph";

export type CustomElement =
	| BlockQuoteElement
	| BulletedListElement
	| CodeBlockElement
	| HeadingElement
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
		case "numbered-list":
			return <NumberedList {...props} />;
		case "list-item":
			return <ListItem {...props} />;
		default:
			return <Paragraph {...props} />;
	}
};
