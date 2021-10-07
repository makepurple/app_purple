import { InferComponentProps } from "@/client/types";
import tw, { styled } from "twin.macro";

export type ButtonProps = InferComponentProps<typeof Button>;

export const Button = styled.button`
	${tw`
		flex
		items-center
		justify-center
		px-3
		py-4
		rounded-md
		text-lg
		leading-none
		font-medium
		bg-purple-500
		text-white
		cursor-pointer
		hover:opacity-80
		transition-opacity
		duration-150
		ease-in-out
	`}
`;

Button.defaultProps = {
	type: "button"
};
