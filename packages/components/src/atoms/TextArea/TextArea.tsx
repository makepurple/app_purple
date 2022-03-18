import { useResizeObserver } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { WindowUtils } from "@makepurple/utils";
import composeRefs from "@seznam/compose-react-refs";
import React, { forwardRef, useCallback, useContext, useEffect, useRef, useState } from "react";
import tw, { styled } from "twin.macro";
import { FormContext } from "../Form/context";
import { FormGroupContext } from "../FormGroup/context";

const Root = styled.textarea<{ error?: boolean }>`
	${tw`
		w-full
		min-height[5rem]
		px-2.5
		py-2
		border
		border-solid
		rounded-sm
		overflow-y-auto
		shadow-inner
		text-base
		leading-snug
		bg-indigo-50
		transition
		duration-300
		ease-in-out
		resize-y
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
			bg-transparent
		`}
	}
`;

export type TextAreaProps = Omit<InferComponentProps<typeof Root>, "ref">;

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>((props, ref) => {
	const [width, setWidth] = useState<number>(0);

	useResizeObserver(
		WindowUtils.getElement(() => document.body),
		({ contentRect }) => {
			setWidth(contentRect.width);
		}
	);

	const form = useContext(FormContext);
	const group = useContext(FormGroupContext);

	const textAreaRef = useRef<HTMLTextAreaElement>(null);

	const setTextAreaHeight = useCallback(() => {
		const textArea = textAreaRef.current;

		if (!textArea) return;

		const oldHeight: number = textArea.scrollHeight;

		textArea.style.height = "";

		const textHeight: number = textArea.scrollHeight;

		textArea.style.height = `${Math.min(oldHeight, textHeight) + 24}px`;
	}, []);

	const disabled = props.disabled || form.disabled;
	const error = props.error || group.error;

	useEffect(() => {
		setTextAreaHeight();
	}, [ref, setTextAreaHeight, width]);

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
