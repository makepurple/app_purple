import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type VisuallyHiddenProps = InferComponentProps<typeof VisuallyHidden>;

export const VisuallyHidden = styled.span`
	${tw`
		absolute
		height[1px]
		width[1px]
		margin[-1px]
		p-0
		border-0
		overflow-hidden
		clip[rect(0 0 0 0)]
		whitespace-nowrap
	`}
`;
