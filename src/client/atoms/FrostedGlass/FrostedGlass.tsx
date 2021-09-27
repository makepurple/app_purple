import { InferComponentProps } from "@/client/types";
import { styled } from "twin.macro";

export type FrostedGlassProps = InferComponentProps<typeof FrostedGlass>;

export const FrostedGlass = styled.div`
	box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 3px 1px -2px rgba(0, 0, 0, 0.2),
		0 1px 5px 0 rgba(0, 0, 0, 0.12);
	backdrop-filter: blur(10px);
	background-color: rgba(255, 255, 255, 0.15);
`;
