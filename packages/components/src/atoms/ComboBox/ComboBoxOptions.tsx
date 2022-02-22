import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils } from "@makepurple/utils";
import React, { forwardRef } from "react";
import tw, { styled } from "twin.macro";
import { Paper } from "../Paper";

const Root = styled(Paper)<{ $hidden: boolean }>`
	${tw`
		absolute
		inset-x-0
		bottom-0
		translate-y-full
		flex
		flex-col
		items-stretch
		gap-1
		p-1
		empty:hidden
	`}
	z-index: ${StyleUtils.getZIndex("menu")};

	${({ $hidden }) =>
		$hidden &&
		tw`
			hidden
		`}
`;

export type ComboBoxOptionsProps = InferComponentProps<"div"> & {
	isOpen?: boolean;
};

export const ComboBoxOptions = forwardRef<HTMLDivElement, ComboBoxOptionsProps>((props, ref) => {
	const { isOpen, ...ulProps } = props;

	return <Root {...ulProps} ref={ref} $hidden={!isOpen} />;
});

ComboBoxOptions.displayName = "ComboBoxOptions";
