import { InferComponentProps } from "@/client/types";
import { Button as ReakitButton } from "reakit";
import tw, { styled } from "twin.macro";

export type ButtonProps = InferComponentProps<typeof Button>;

export const Button = styled(ReakitButton)`
	${tw`
		relative
		flex
		items-center
		justify-center
		px-3
		py-3.5
		border
		border-solid
		border-transparent
		rounded-md
		text-lg
		leading-none
		bg-indigo-500
		text-white
		font-semibold
		cursor-pointer
		transition
		duration-300
		ease-in-out
		shadow-sm
		disabled:shadow-none
		disabled:opacity-60
		disabled:cursor-not-allowed
		not-disabled:active:shadow-none
		not-disabled:hover:shadow-lg
		not-disabled:hover:opacity-90
		disabled:after:absolute
		disabled:after:inset-0
		disabled:after:pointer-events-auto
		disabled:after:cursor-not-allowed
	`}
`;
