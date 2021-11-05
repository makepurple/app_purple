import tw, { styled } from "twin.macro";

export const ToolbarButton = styled.button`
	${tw`
		inline-flex
		items-center
		justify-center
		rounded-sm
		shadow-none
		text-black
		bg-transparent
		cursor-pointer
		transition
		duration-200
		ease-in-out
		ring-cyan-600
		ring-opacity-80
		ring-offset-1
		hover:ring
	`}
`;

ToolbarButton.defaultProps = {
	type: "button"
};
