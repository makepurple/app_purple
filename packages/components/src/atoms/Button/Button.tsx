import { InferComponentProps } from "@makepurple/typings";
import tw, { css, styled } from "twin.macro";

export type ButtonVariant = "success" | "error" | "alert" | "primary" | "secondary" | "input";

export type ButtonProps = InferComponentProps<typeof Button>;

export const Button = styled.button<{
	bounce?: boolean;
	hasInput?: boolean;
	size?: "small" | "medium" | "large";
	variant?: ButtonVariant;
}>`
	${tw`
		relative
		flex
		items-center
		justify-center
		border
		border-solid
		border-transparent
		rounded-md
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
		not-disabled:hover:opacity-80
		disabled:after:absolute
		disabled:after:inset-0
		disabled:after:pointer-events-auto
		disabled:after:cursor-not-allowed
	`}

	${({ bounce = true }) => bounce && tw`not-disabled:hover:-translate-y-0.5`}

	${({ hasInput, variant = "primary" }) => {
		switch (variant) {
			case "alert":
				return tw`bg-pink-600`;
			case "error":
				return tw`bg-rose-600`;
			case "input":
				return css`
					${tw`
						bg-indigo-50
						border
						border-solid
						border-gray-400
						shadow-inner
						text-gray-400
					`}
					${hasInput && tw`text-black`}
				`;
			case "primary":
				return tw`bg-indigo-500`;
			case "secondary":
				return tw`
					bg-white/80
					text-black
					border-gray-300
					not-disabled:hover:bg-indigo-50
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
					py-3.5
					text-lg
				`;
			case "small":
				return tw`
					px-1.5
					py-1
					text-base
					rounded
				`;
			case "medium":
			default:
				return tw`
					px-2.5
					py-2
					text-lg
				`;
		}
	}}
	
	${tw`
		leading-snug
	`}
`;

Button.defaultProps = {
	role: "button",
	type: "button"
};
