import { InferComponentProps } from "@makepurple/typings";
import tw, { styled } from "twin.macro";

export type MainContainerProps = InferComponentProps<typeof MainContainer>;

export const MainContainer = styled.div`
	${tw`
		my-0
		mx-auto
	`}
	flex: 1200 1 0;
	max-width: 1200px;
`;
