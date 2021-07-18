import styled from "styled-components";

export type TagType = "positive" | "neutral" | "negative";

export const Tag = styled.span<{ type?: TagType }>`
	display: inline-flex;
	align-items: center;
	justify-content: center;
	box-sizing: border-box;
	height: 1.5em;
	margin: 0.25em;
	padding: 0 0.75em;
	border-radius: 0.25em;
	background-color: ${({ theme, type }) => {
		switch (type) {
			case "positive":
				return theme.palette.blue;
			case "negative":
				return theme.palette.red;
			case "neutral":
				return theme.palette.grey;
			default:
				return "initial";
		}
	}};
	font-size: 1rem;
	font-weight: 500;
	color: ${({ theme }) => theme.colors.contrastingPrimaryText};
`;
