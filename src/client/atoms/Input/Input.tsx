import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type InputProps = InferComponentProps<typeof Input>;

export const Input = styled.input`
	display: inline-block;
	box-sizing: border-box;
	height: 2.625rem;
	padding: 0 0.625rem;
	border-radius: 0.5rem;
	border: 1px solid ${({ theme }) => theme.colors.inputBackgroundColor};
	${tw`font-sans`}
	font-size: 1rem;
	line-height: 1.3em;
	font-weight: 600;
	color: ${({ theme }) => theme.colors.primaryText};
	background-color: ${({ theme }) => theme.colors.inputBackgroundColor};
	transition: border-color 0.15s ease-in-out 0s;

	&::placeholder {
		color: ${({ theme }) => theme.colors.secondaryText};
	}

	&:focus {
		outline: none;
		background-color: ${({ theme }) => theme.colors.surfaceColor};
		border: 1px solid ${({ theme }) => theme.palette.purple};
	}
`;

Input.defaultProps = {
	type: "text"
};
