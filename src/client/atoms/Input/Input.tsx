import { FormGroupContext } from "@/client/atoms/FormGroup/context";
import { InferComponentProps } from "@/client/types";
import { forwardRef, useContext } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.input<{ error?: boolean }>`
	${tw`
		inline-block
		h-10
		w-full
		px-2.5
		border
		border-solid
		rounded-lg
		shadow-inner
		bg-indigo-50
		text-base
		leading-none
		font-sans
		text-black
		transition
		duration-300
		ease-in-out
		placeholder:text-gray-400
		focus:bg-white
	`}
	${({ error }) => (error ? tw`border-red-600` : tw`border-gray-200`)}
`;

export type InputProps = InferComponentProps<typeof Root>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props) => {
	const context = useContext(FormGroupContext);

	const error = props.error ?? context.error;

	return <Root {...props} error={error} />;
});

Input.displayName = "Input";
