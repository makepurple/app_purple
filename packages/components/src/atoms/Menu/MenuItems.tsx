import { Menu } from "@headlessui/react";
import { StyleUtils } from "@makepurple/utils";
import tw, { styled } from "twin.macro";

export const MenuItems = styled(Menu.Items)`
	${tw`
		absolute
		origin-top-right
		top-full
		left-0
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
	z-index: ${StyleUtils.getZIndex("menu")};
`;
