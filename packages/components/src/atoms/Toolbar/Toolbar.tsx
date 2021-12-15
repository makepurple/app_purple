import { InferComponentProps } from "@makepurple/typings";
import tw from "twin.macro";

export type ToolbarProps = InferComponentProps<typeof Toolbar>;

export const Toolbar = tw.div`
	flex
	items-stretch
	w-full
	h-12
	border
	border-solid
	border-gray-200
	shadow-md
	text-sm
	leading-none
`;
