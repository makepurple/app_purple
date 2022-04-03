import { FunctionUtils } from "@makepurple/utils";
import React, { FC, ReactElement } from "react";
import { RenderLeafProps } from "slate-react";
import type { NormalizedToken } from "../Element";
import { wrapLeafBold } from "./Bold";
import { wrapLeafCode } from "./Code";
import { wrapLeafCodeToken } from "./CodeToken";
import { wrapLeafItalic } from "./Italic";
import { wrapLeafUnderline } from "./Underline";

export type CustomText = {
	bold?: boolean;
	code?: boolean;
	codeToken?: NormalizedToken;
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
	const { attributes, leaf } = props;

	if (leaf.codeToken) {
		return wrapLeafCodeToken(props).children;
	}

	const composed = FunctionUtils.compose<WrapLeafWithType>(
		wrapLeafBold,
		wrapLeafCode,
		wrapLeafItalic,
		wrapLeafUnderline
	);

	const { children } = composed(props);

	return <span {...attributes}>{children}</span>;
};
