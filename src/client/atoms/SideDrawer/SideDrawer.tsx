import { Dialog as ReakitDialog } from "reakit";
import tw from "twin.macro";

export const SideDrawer = tw(ReakitDialog)`
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
`;
