import { Listbox } from "@headlessui/react";
import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils } from "@makepurple/utils";
import tw, { styled } from "twin.macro";

export type SelectOptionsProps = InferComponentProps<typeof Listbox.Options>;

export const SelectOptions: typeof Listbox.Options = styled(Listbox.Options)`
	${tw`
		absolute
		inset-x-0
		bottom-0
		transform
		translate-y-full
		inline-flex
		flex-col
		items-stretch
		max-h-72
		mt-1
		p-0.5
		overflow-y-auto
		rounded-lg
		bg-white
		shadow-2xl
		empty:hidden
	`}
	z-index: ${StyleUtils.getZIndex("menu")};
` as typeof Listbox.Options;
