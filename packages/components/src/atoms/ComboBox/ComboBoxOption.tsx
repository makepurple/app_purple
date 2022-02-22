import { InferComponentProps } from "@makepurple/typings";
import tw from "twin.macro";

export const ComboBoxOption = tw.div`
	flex
	items-center
	py-2
	px-3
	border-none
	rounded-md
	text-base
	leading-none
	font-semibold
	text-black
	bg-transparent
	hover:bg-indigo-50/80
	transition
	duration-150
	ease-in-out
	cursor-pointer
	[&[aria-selected="true"]]:text-white
	[&[aria-selected="true"]]:bg-indigo-500
	[&[aria-selected="true"]]:hover:bg-indigo-500/80
	[&[data-selected="true"]]:text-white
	[&[data-selected="true"]]:bg-indigo-500
`;

export type ComboBoxOptionProps = InferComponentProps<typeof ComboBoxOption>;
