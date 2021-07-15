import { InferComponentProps } from "@/client/types";
import styled from "styled-components";

export type ToolbarProps = InferComponentProps<typeof Toolbar>;

export const Toolbar = styled.div`
	display: flex;
	align-items: stretch;
	width: 100%;
	height: 48px;
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	box-shadow: ${({ theme }) => theme.shadows.md};
	font-size: 0.875rem;
`;
