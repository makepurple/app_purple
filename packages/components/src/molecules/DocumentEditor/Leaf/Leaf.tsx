import { FunctionUtils } from "@makepurple/utils";
import React, { FC, ReactElement } from "react";
import { RenderLeafProps } from "slate-react";
import { wrapLeafBold } from "./Bold";
import { wrapLeafCode } from "./Code";
import { wrapLeafItalic } from "./Italic";
import { wrapLeafUnderline } from "./Underline";

export type CustomText = {
	bold?: boolean;
	code?: boolean;
	italic?: boolean;
	text: string;
	underline?: boolean;
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
		wrapLeafItalic,
		wrapLeafUnderline
	);

	const { children } = composed(props);

	return <span {...attributes}>{children}</span>;
};
