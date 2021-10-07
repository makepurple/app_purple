import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type MainContainerProps = InferComponentProps<typeof MainContainer>;

export const MainContainer = styled.div`
	${tw`
		my-0
		mx-auto
	`}
	flex: 1000 1 0;
	max-width: 1000px;
`;
