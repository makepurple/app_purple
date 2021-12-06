import Tippy, { TippyProps } from "@tippyjs/react";
import React, { FC } from "react";

export type TooltipProps = TippyProps;

export const Tooltip: FC<TooltipProps> = (props) => {
	const { children, ...tippyProps } = props;

	return <Tippy {...tippyProps}>{children}</Tippy>;
};
