import tw, { styled } from "twin.macro";

export const ToolbarButton = styled.button`
	${tw`
		inline-flex
		items-center
		justify-center
		w-12
		mr-0.5
		rounded-sm
		text-black
		bg-transparent
		cursor-pointer
		transition
		duration-200
		ease-in-out
		ring-cyan-600
		ring-opacity-80
		ring-offset-2
		hover:ring
		not-first:ml-0.5
	`}
`;

ToolbarButton.defaultProps = {
	type: "button"
};
