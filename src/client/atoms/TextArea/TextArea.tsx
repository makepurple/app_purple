import { FormContext } from "@/client/atoms/Form/context";
import { FormGroupContext } from "@/client/atoms/FormGroup/context";
import { InferComponentProps } from "@/client/types";
import composeRefs from "@seznam/compose-react-refs";
import { forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import { useWindowSize } from "react-use";
import tw, { styled } from "twin.macro";

const Root = styled.textarea<{ error?: boolean }>`
	${tw`
		w-full
		px-2.5
		py-2
		border
		border-solid
		rounded-lg
		shadow-inner
		text-base
		leading-snug
		bg-indigo-50
		transition
		duration-300
		ease-in-out
		resize-none
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
	&::-webkit-scrollbar {
		${tw`
			w-0
			bg-transparent
		`}
	}
`;

export type TextAreaProps = Omit<InferComponentProps<typeof Root>, "ref">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
	const { width } = useWindowSize();

	const form = useContext(FormContext);
	const group = useContext(FormGroupContext);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const setTextAreaHeight = useCallback(() => {
		const textArea = textAreaRef.current;

		if (!textArea) return;

		const oldHeight: number = textArea.scrollHeight;

		textArea.style.height = "";

		const textHeight: number = textArea.scrollHeight;

		textArea.style.height = `${Math.min(oldHeight, textHeight) + 2}px`;
	}, []);

	const disabled = props.disabled || form.disabled;
	const error = props.error || group.error;

	useEffect(() => {
		setTextAreaHeight();
	}, [setTextAreaHeight, width]);

	return (
		<Root
			{...props}
			ref={composeRefs(ref, textAreaRef)}
			disabled={disabled}
			error={error}
			onChange={(e) => {
				props.onChange?.(e);

				setTextAreaHeight();
			}}
			role="textbox"
			aria-multiline
		/>
	);
});

TextArea.displayName = "TextArea";
