import tw, { styled } from "twin.macro";

export const Anchor = styled.a`
	${tw`
		font-sans
		text-cyan-600
		cursor-pointer
		no-underline
		hover:text-cyan-600
		hover:underline
	`}
`;

Anchor.defaultProps = {
	spellCheck: false
};
