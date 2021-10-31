import { Tooltip as ReakitTooltip } from "reakit";
import tw from "twin.macro";

export const Tooltip = tw(ReakitTooltip)`
	rounded-lg
	bg-black
	bg-opacity-80
	border
	border-solid
	border-gray-800
	shadow-md
	text-white
`;
