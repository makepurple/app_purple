import { getZIndex } from "@/client/styles";
import { Menu as HUIMenu } from "@headlessui/react";
import tw, { styled } from "twin.macro";

export const MenuItems = styled(HUIMenu.Items)`
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
	z-index: ${getZIndex("menu")}
`;
