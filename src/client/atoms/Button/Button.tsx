import { InferComponentProps } from "@/client/types";
import { Button as ReakitButton } from "reakit";
import tw, { styled } from "twin.macro";

export type ButtonVariant = "success" | "error" | "alert" | "primary" | "secondary";

export type ButtonProps = InferComponentProps<"button"> & {
	size?: "small" | "medium" | "large";
	variant?: ButtonVariant;
};

export const Button = styled(ReakitButton)<ButtonProps>`
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
		duration-150
		ease-in-out
		shadow-sm
		transform
		disabled:shadow-none
		disabled:opacity-60
		disabled:cursor-not-allowed
		not-disabled:active:shadow-none
		not-disabled:hover:shadow-md
		not-disabled:hover:opacity-90
		not-disabled:hover:-translate-y-0.5
		disabled:after:absolute
		disabled:after:inset-0
		disabled:after:pointer-events-auto
		disabled:after:cursor-not-allowed
	`}
	${({ variant = "primary" }) => {
		switch (variant) {
			case "alert":
				return tw`bg-pink-600`;
			case "error":
				return tw`bg-red-600`;
			case "primary":
				return tw`bg-indigo-500`;
			case "secondary":
				return tw`
					bg-white
					text-black
					border-gray-400
				`;
			case "success":
				return tw`bg-blue-500`;
			default:
				return null;
		}
	}}
	${({ size = "medium" }) => {
		switch (size) {
			case "large":
				return tw`
					px-4
					py-5
				`;
			case "medium":
				return tw`
					px-3
					py-3.5
				`;
			case "small":
				return tw`
					px-1
					py-1.5
				`;
			default:
				return null;
		}
	}}
`;
