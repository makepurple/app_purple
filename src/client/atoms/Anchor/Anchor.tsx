import tw, { styled } from "twin.macro";

export const Anchor = styled.a`
	${tw`
		font-sans
		font-semibold
		text-blue-500
		cursor-pointer
		no-underline
		hover:text-blue-500
		hover:underline
	`}
`;

Anchor.defaultProps = {
	spellCheck: false
};
