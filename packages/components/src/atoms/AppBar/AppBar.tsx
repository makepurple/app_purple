import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils } from "@makepurple/utils";
import tw, { styled } from "twin.macro";

export type AppBarProps = InferComponentProps<typeof AppBar>;

export const AppBar = styled.div`
	${tw`
		fixed
		top-0
		inset-x-0
		h-16
		bg-white
		shadow-lg
	`}
	z-index: ${StyleUtils.getZIndex("app-bar")};
`;
