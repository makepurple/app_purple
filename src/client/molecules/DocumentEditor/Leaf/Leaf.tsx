import { FunctionUtils } from "@/utils";
import React, { FC, ReactElement } from "react";
import { RenderLeafProps } from "slate-react";
import { wrapLeafCode, wrapLeafItalic } from ".";
import { wrapLeafBold } from "./Bold";

export type CustomText = {
	bold?: boolean;
	code?: boolean;
	italic?: boolean;
	text: string;
};

export type WrapLeafWithTypeParams = {
	leaf: RenderLeafProps["leaf"];
	children: ReactElement;
};

export type WrapLeafWithType = (params: WrapLeafWithTypeParams) => WrapLeafWithTypeParams;

export const Leaf: FC<RenderLeafProps> = (props) => {
	const { attributes } = props;

	const composed = FunctionUtils.compose<WrapLeafWithType>(
		wrapLeafBold,
		wrapLeafCode,
		wrapLeafItalic
	);

	const { children } = composed(props);

	return <span {...attributes}>{children}</span>;
};
