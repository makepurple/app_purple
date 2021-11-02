import { useUncontrolledProp } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import composeRefs from "@seznam/compose-react-refs";
import { forwardRef, useCallback, useEffect, useRef } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.textarea`
	${tw`
		px-2.5
		py-2
		border
		border-solid
		border-gray-200
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
	&::-webkit-scrollbar {
		${tw`
			w-0
			bg-transparent
		`}
	}
`;

export type TextAreaProps = Omit<InferComponentProps<"textarea">, "ref">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
	const { value: _value } = props;

	const [value, setValue] = useUncontrolledProp(_value, "");

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const setTextAreaHeight = useCallback(() => {
		const textArea = textAreaRef.current;

		if (!textArea) return;

		const oldHeight: number = textArea.scrollHeight;

		textArea.style.height = "";

		const textHeight: number = textArea.scrollHeight;

		textArea.style.height = `${Math.min(oldHeight, textHeight) + 2}px`;
	}, []);

	useEffect(() => {
		setTextAreaHeight();
	}, [setTextAreaHeight, value]);

	return (
		<Root
			{...props}
			ref={composeRefs(ref, textAreaRef)}
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
