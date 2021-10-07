import tw, { styled } from "twin.macro";

export const ToolbarButton = styled.button`
	${tw`
		inline-flex
		items-center
		justify-center
		w-12
		shadow-sm
		border
		border-solid
		border-gray-200
		text-black
		bg-transparent
		cursor-pointer
		transition
		duration-200
		ease-in-out
		hover:shadow-inner
	`}
`;

ToolbarButton.defaultProps = {
	type: "button"
};
