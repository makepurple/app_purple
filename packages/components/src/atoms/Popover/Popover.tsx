import Tippy, { TippyProps } from "@tippyjs/react";
import React, { FC } from "react";
import tw from "twin.macro";

const Root = tw(Tippy)`
	bg-white
	text-black
	shadow-lg
`;

export type PopoverProps = TippyProps;

export const Popover: FC<PopoverProps> = (props) => {
	const { children, ...tippyProps } = props;

	return (
		<Root arrow={false} offset={[0, 12]} trigger="click" {...tippyProps}>
			{children}
		</Root>
	);
};
