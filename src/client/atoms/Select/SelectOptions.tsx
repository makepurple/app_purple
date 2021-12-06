import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import { Listbox as HUIListbox } from "@headlessui/react";
import tw, { styled } from "twin.macro";

export type SelectOptionsProps = InferComponentProps<typeof HUIListbox.Options>;

export const SelectOptions = styled(HUIListbox.Options)`
	${tw`
		absolute
		inset-x-0
		bottom-0
		transform
		translate-y-full
		inline-flex
		flex-col
		items-stretch
		mt-1
		p-0.5
		rounded-lg
		bg-white
		shadow-2xl
		empty:hidden
	`}
	z-index: ${getZIndex("menu")};
`;
