import React, { FC, ReactElement } from "react";
import { RenderLeafProps } from "slate-react";
import { wrapLeafBold } from "./Bold";

export type WrapLeafWithTypeParams = {
	leaf: RenderLeafProps["leaf"];
	children: ReactElement;
};

export type WrapLeafWithType = (params: WrapLeafWithTypeParams) => WrapLeafWithTypeParams;

export const Leaf: FC<RenderLeafProps> = (props) => {
	const { attributes } = props;

	const { children } = wrapLeafBold(props);

	return <span {...attributes}>{children}</span>;
};
