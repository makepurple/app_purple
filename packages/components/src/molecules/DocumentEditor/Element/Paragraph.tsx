import React, { FC } from "react";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";

export type ParagraphSlateType = "paragraph";

export type ParagraphElement = {
	type: ParagraphSlateType;
	children: Descendant[];
};

export const Paragraph: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <div {...attributes}>{children}</div>;
};
