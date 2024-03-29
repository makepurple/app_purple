import React, { FC } from "react";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import type { CustomElementType } from ".";
import type { BulletedListSlateType } from "./BulletedList";
import { NumberedListSlateType } from "./NumberedList";

export type ListSlateType = BulletedListSlateType | NumberedListSlateType;

export type ListItemSlateType = "list-item";

export type ListItemElement = {
	type: ListItemSlateType;
	children: Descendant[];
};

export const isListType = (type: CustomElementType): type is ListSlateType => {
	return ["bulleted-list", "numbered-list"].includes(type);
};

export const ListItem: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <li {...attributes}>{children}</li>;
};
