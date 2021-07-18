import styled from "styled-components";

export const Anchor = styled.a`
	font-family: Gilroy, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
		Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-size: inherit;
	font-weight: 600;
	line-height: 1.5;
	color: inherit;
	margin: 0;
	padding: 0;
	border: 0;
	border-radius: 0;
	box-shadow: none;
	background: transparent;
	color: ${({ theme }) => theme.palette.blue};
	text-decoration: none;
	cursor: pointer;

	&:hover {
		color: ${({ theme }) => theme.palette.purple};
		text-decoration: underline;
	}
`;
