import { InferComponentProps } from "@/client/types";
import { Button as ReakitButton } from "reakit";
import tw, { styled } from "twin.macro";

export type ButtonProps = InferComponentProps<typeof Button>;

export const Button = styled(ReakitButton)`
	${tw`
		flex
		items-center
		justify-center
		px-3
		py-3.5
		rounded-md
		text-lg
		leading-none
		font-medium
		bg-indigo-500
		text-white
		cursor-pointer
		duration-150
		ease-in-out
		active:shadow-inner
		disabled:cursor-not-allowed
		hover:shadow-lg
		hover:opacity-80
	`}
`;
