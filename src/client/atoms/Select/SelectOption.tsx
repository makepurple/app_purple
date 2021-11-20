import { InferComponentProps } from "@/client/types";
import React, { ComponentType, useContext } from "react";
import tw, { styled } from "twin.macro";
import { SelectContext } from "./context";

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

export type SelectOptionProps = InferComponentProps<"li"> & {
	as?: string | ComponentType<any>;
	index: number;
};

export const SelectOption = styled((props: SelectOptionProps) => {
	const { as = "li", index, ...liProps } = props;

	const select = useContext(SelectContext);

	if (!select?.isOpen) return null;

	const item = select.items[index];

	return <Root as={as} {...liProps} {...select.getItemProps({ ...liProps, index, item })} />;
})<SelectOptionProps>``;
