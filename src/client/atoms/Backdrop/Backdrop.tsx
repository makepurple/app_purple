import { getZIndex } from "@/client/styles";
import {
	DialogBackdrop as ReakitDialogBackdrop,
	DialogBackdropProps as ReakitDialogBackdropProps
} from "reakit";
import tw, { styled } from "twin.macro";

export type BackdropProps = ReakitDialogBackdropProps;

export const Backdrop = styled(ReakitDialogBackdrop)`
	${tw`
		fixed
		inset-0
		bg-black
		opacity-0
		backdrop-filter
		backdrop-blur-lg
		[&[data-enter]]:opacity-40
		transition-opacity
		duration-150
		ease-in-out
	`}
	z-index: ${getZIndex("backdrop")};
`;
