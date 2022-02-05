import { InferComponentProps } from "@makepurple/typings";
import tw, { css, styled } from "twin.macro";

export type MainContainerProps = InferComponentProps<typeof MainContainer>;

export const MainContainer = styled.div<{ size?: "small" | "medium" | "large" }>`
	${tw`
		my-0
		mx-auto
	`}

	${({ size }) => {
		switch (size) {
			case "small":
				return tw`
					flex[1000 1 0]
					max-width[1000px]
				`;
			case "large":
				return css``;
			case "medium":
			default:
				return tw`
					flex[1200 1 0]
					max-width[1200px]
				`;
		}
	}}
`;
