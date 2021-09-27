import { styled } from "twin.macro";

export const Footer = styled.footer`
	width: 100%;
	height: 100px;
	border-top: 1px solid ${({ theme }) => theme.colors.outlineColor};
	background-color: ${({ theme }) => theme.colors.surfaceColor};
`;
