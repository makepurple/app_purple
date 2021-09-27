import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type ToolbarProps = InferComponentProps<typeof Toolbar>;

export const Toolbar = styled.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	height: 48px;
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	font-size: 0.875rem;
	${tw`shadow-md`}
`;
