import tw, { styled } from "twin.macro";

export const Anchor = styled.a`
	${tw`font-sans`}
	font-size: inherit;
	font-weight: 600;
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

Anchor.defaultProps = {
	spellCheck: false
};
