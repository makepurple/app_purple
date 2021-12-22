import tw from "twin.macro";

export const ControlGroup = tw.div`
	flex
	[& > *]:not-first:rounded-l-none
	[& > *]:not-last:rounded-r-none
`;
