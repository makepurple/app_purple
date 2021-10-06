import { CustomText } from "@/client/molecules/DocumentEditor/Leaf";
import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import { CodeBlock, CodeBlockSlateType } from "./CodeBlock";
import { Heading, HeadingSlateType } from "./Heading";

export type CustomElementType =
	| "bulleted-list"
	| CodeBlockSlateType
	| HeadingSlateType
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
		default:
			return <div {...attributes}>{children}</div>;
	}
};
