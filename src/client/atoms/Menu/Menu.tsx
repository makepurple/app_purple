import { getZIndex } from "@/client/styles";
import { Menu as ReakitMenu } from "reakit";
import tw, { styled } from "twin.macro";

export const Menu = styled(ReakitMenu)`
	${tw`
		flex
		flex-col
		items-stretch
		py-3
		px-2
		rounded-lg
		bg-white
		shadow-md
	`}
	z-index: ${getZIndex("menu")}
`;
