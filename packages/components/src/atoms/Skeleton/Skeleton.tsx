import tw, { styled } from "twin.macro";

export const Skeleton = styled.div.attrs(() => ({ children: null }))`
	${tw`
		animate-pulse
		rounded-md
		bg-violet-400
	`}
`;
