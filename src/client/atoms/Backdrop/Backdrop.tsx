import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type BackdropProps = InferComponentProps<"div">;

export const Backdrop = styled.div`
	${tw`
		fixed
		inset-0
		bg-black
		bg-opacity-0
		backdrop-blur-lg
		[&[data-enter]]:bg-opacity-40
		transition
		duration-150
		ease-in-out
	`}
	z-index: ${getZIndex("backdrop")};
`;
