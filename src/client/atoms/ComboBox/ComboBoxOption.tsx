import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import React, { ComponentType } from "react";
import tw, { styled } from "twin.macro";

const Root = tw.li`
	flex
	items-center
	py-2
	px-3
	border-none
	rounded-md
	text-base
	leading-none
	font-semibold
	text-purple-800
	bg-transparent
	hover:bg-gray-50
	hover:bg-opacity-80
	transition
	duration-150
	ease-in-out
	cursor-pointer
	[&[aria-selected="true"]]:text-white
	[&[aria-selected="true"]]:bg-indigo-500
	[&[aria-selected="true"]]:hover:bg-indigo-500
`;

export type ComboBoxOptionProps = InferComponentProps<"li"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
		index: number;
		item: any;
	};

export const ComboBoxOption = styled((props: ComboBoxOptionProps) => {
	const { as = "li", combobox, index, item, ...liProps } = props;

	if (!combobox.isOpen) return null;
	if (combobox.loading) return null;

	return <Root as={as} {...liProps} {...combobox.getItemProps({ ...liProps, index, item })} />;
})<ComboBoxOptionProps>``;

ComboBoxOption.displayName = "ComboBoxOption";
