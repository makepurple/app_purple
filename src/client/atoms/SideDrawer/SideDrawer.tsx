import { getZIndex } from "@/client/styles";
import { Dialog as ReakitDialog, DialogProps as ReakitDialogProps } from "reakit";
import tw, { styled } from "twin.macro";

export type SideDrawerProps = ReakitDialogProps;

export const SideDrawer = styled(ReakitDialog)`
	${tw`
		fixed
		inset-y-0
		left-0
		w-72
		p-4
		transform
		-translate-x-full
		[&[data-enter]]:translate-x-0
		bg-white
		shadow-2xl
		transition-transform
		duration-300
		ease-in-out
	`}
	z-index: ${getZIndex("page-drawer")};
`;
