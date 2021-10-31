import { Menu as ReakitMenu } from "reakit";
import tw from "twin.macro";

export const Menu = tw(ReakitMenu)`
	flex
	flex-col
	items-stretch
	py-3
	px-2
	rounded-lg
	bg-white
	shadow-md
`;
