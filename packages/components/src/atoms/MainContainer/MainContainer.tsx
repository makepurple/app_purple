import { InferComponentProps } from "@makepurple/typings";
import tw from "twin.macro";

export type MainContainerProps = InferComponentProps<typeof MainContainer>;

export const MainContainer = tw.div`
	my-0
	mx-auto
	flex[1200 1 0]
	max-width[1200px]
`;
