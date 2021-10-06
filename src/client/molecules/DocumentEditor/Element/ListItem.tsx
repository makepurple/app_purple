import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import type { CustomElementType } from ".";
import type { BulletedListSlateType } from "./BulletedList";

export type ListSlateType = BulletedListSlateType | "numbered-list";

export type ListItemSlateType = "list-item";

export const isListType = (type: CustomElementType): type is ListSlateType => {
	return ["bulleted-list", "numbered-list"].includes(type);
};

export const ListItem: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <li {...attributes}>{children}</li>;
};
