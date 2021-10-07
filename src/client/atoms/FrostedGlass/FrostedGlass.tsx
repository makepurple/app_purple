import { InferComponentProps } from "@/client/types";
import tw from "twin.macro";

export type FrostedGlassProps = InferComponentProps<typeof FrostedGlass>;

export const FrostedGlass = tw.div`
	backdrop-blur-md
	shadow-md
	bg-white
	bg-opacity-20
`;
