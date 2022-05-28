import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef, useContext } from "react";
import tw, { styled } from "twin.macro";
import { FormContext } from "../Form/context";
import { FormGroupContext } from "../FormGroup/context";

const Root = styled.input<{ error?: boolean }>`
	${tw`
		inline-block
		h-10
		w-full
		px-2.5
		border
		border-solid
		rounded-sm
		shadow-inner
		bg-violet-50
		text-base
		leading-none
		font-sans
		text-black
		transition
		duration-300
		ease-in-out
		focus:bg-white
		disabled:cursor-not-allowed
		disabled:bg-gray-200
		disabled:opacity-60
	`}
	${({ error }) =>
		error
			? tw`
				border-red-600
				text-red-600
			`
			: tw`border-gray-400`}
`;

export type InputProps = InferComponentProps<typeof Root>;

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	const group = useContext(FormGroupContext);
	const form = useContext(FormContext);

	const disabled = props.disabled || form.disabled;
	const error = props.error || group.error;

	return <Root {...props} ref={ref} disabled={disabled} error={error} aria-disabled={disabled} />;
});

Input.displayName = "Input";
