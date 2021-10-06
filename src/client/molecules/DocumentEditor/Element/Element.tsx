import { CustomText } from "@/client/molecules/DocumentEditor/Leaf";
import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import { BulletedList } from "./BulletedList";
import { CodeBlock, CodeBlockSlateType } from "./CodeBlock";
import { Heading, HeadingSlateType } from "./Heading";
import { ListItem, ListItemSlateType, ListSlateType } from "./ListItem";

export type CustomElementType =
	| CodeBlockSlateType
	| HeadingSlateType
	| ListSlateType
	| ListItemSlateType
	| "numbered-list"
	| "paragraph";

export type CustomElement = {
	type: CustomElementType;
	children: (CustomText | CustomElement)[];
};

export const Element: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	if (element.type.startsWith("language-")) {
		return <CodeBlock {...props} />;
	}

	if (element.type.startsWith("heading-")) {
		return <Heading {...props} />;
	}

	switch (element.type) {
		case "bulleted-list":
			return <BulletedList {...props} />;
		case "list-item":
			return <ListItem {...props} />;
		default:
			return <div {...attributes}>{children}</div>;
	}
};
