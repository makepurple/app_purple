import styled from "styled-components";

export const Code = styled.pre`
	box-sizing: border-box;
	padding: 4px;
	border: 1px solid ${({ theme }) => theme.palette.lightGrey};
	border-radius: 4px;
	font-family: "Source Code Pro", monospace;
	color: ${({ theme }) => theme.colors.primaryText};
	background-color: ${({ theme }) => theme.palette.mutedPurple};
`;
