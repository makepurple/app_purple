import { InferComponentProps } from "@/client/types";
import styled from "styled-components";

export type ButtonProps = InferComponentProps<typeof Button>;

export const Button = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	padding: 14px 16px;
	border-radius: 0.375rem;
	border: none;
	transition: all 0.15s cubic-bezier(0.4, 0, 0.2, 1);
	font-size: 1.125rem;
	line-height: 1.125em;
	font-weight: ${({ theme }) => theme.fontWeights.medium};
	background-color: ${({ theme }) => theme.palette.purple};
	color: ${({ theme }) => theme.palette.white};
	cursor: pointer;

	&:hover {
		opacity: 0.85;
	}
`;
