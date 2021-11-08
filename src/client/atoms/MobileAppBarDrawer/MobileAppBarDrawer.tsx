import { getZIndex } from "@/client/styles";
import { Menu as ReakitMenu, MenuProps as ReakitMenuProps } from "reakit";
import tw, { styled } from "twin.macro";

export type MobileAppBarDrawerProps = ReakitMenuProps;

export const MobileAppBarDrawer = styled(ReakitMenu)`
	${tw`
		pt-16
		flex
		flex-col
		items-stretch
		bg-white
		sm:display[none !important]
	`}
	position: fixed !important;
	top: 0 !important;
	right: 0 !important;
	left: 0 !important;
	bottom: 0 !important;
	transform: none !important;
	z-index: ${getZIndex("page-drawer")};
`;
