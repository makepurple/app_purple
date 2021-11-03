import { FormGroupContext } from "@/client/atoms/FormGroup/context";
import { useUncontrolledProp } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import composeRefs from "@seznam/compose-react-refs";
import { forwardRef, useCallback, useContext, useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.textarea<{ error?: boolean }>`
	${tw`
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
		placeholder:text-gray-400
		focus:bg-white
	`}
	${({ error }) => (error ? tw`border-red-600` : tw`border-gray-200`)}
	&::-webkit-scrollbar {
		${tw`
			w-0
			bg-transparent
		`}
	}
`;

export type TextAreaProps = Omit<InferComponentProps<typeof Root>, "ref">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
	const { value: _value } = props;

	const [value, setValue] = useUncontrolledProp(_value, "");

	const context = useContext(FormGroupContext);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const setTextAreaHeight = useCallback(() => {
		const textArea = textAreaRef.current;

		if (!textArea) return;

		const oldHeight: number = textArea.scrollHeight;

		textArea.style.height = "";

		const textHeight: number = textArea.scrollHeight;

		textArea.style.height = `${Math.min(oldHeight, textHeight) + 2}px`;
	}, []);

	const error = props.error ?? context.error;

	useEffect(() => {
		setTextAreaHeight();
	}, [setTextAreaHeight, value]);

	return (
		<Root
			{...props}
			ref={composeRefs(ref, textAreaRef)}
			error={error}
			onChange={(e) => {
				props.onChange?.(e);

				setValue(e.target.value);
			}}
			value={value}
			role="textbox"
			aria-multiline
		/>
	);
});

TextArea.displayName = "TextArea";
