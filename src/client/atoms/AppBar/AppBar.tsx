import { getZIndex } from "@/client/styles/z-indicies";
import { InferComponentProps } from "@/client/types";
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
	z-index: ${getZIndex("app-bar")};
`;
