import { ObjectUtils } from "@makepurple/utils";
import Tippy, { TippyProps } from "@tippyjs/react";
import React, { FC } from "react";
import tw from "twin.macro";
import { PopoverModifiers } from "./modifiers";

const Root = tw(Tippy)`
	bg-white
	text-black
	shadow-lg
`;

export type PopoverProps = TippyProps;

const _Popover: FC<PopoverProps> = (props) => {
	const { children, ...tippyProps } = props;

	return (
		<Root arrow={false} offset={[0, 12]} trigger="click" {...tippyProps}>
			{children}
		</Root>
	);
};

_Popover.displayName = "Popover";

export const Popover = ObjectUtils.setStatic(_Popover, { Modifiers: PopoverModifiers });
