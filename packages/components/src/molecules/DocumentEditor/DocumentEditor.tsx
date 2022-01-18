import { useUncontrolledProp } from "@makepurple/hooks";
import { FunctionUtils, ObjectUtils } from "@makepurple/utils";
import React, { CSSProperties, forwardRef, ReactNode, useContext, useMemo } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { ReactEditor, Slate, withReact } from "slate-react";
import tw, { css, styled } from "twin.macro";
import { Paper } from "../../atoms";
import { FormContext } from "../../atoms/Form/context";
import { FormGroupContext } from "../../atoms/FormGroup/context";
import { DocumentEditorContext } from "./context";
import { DocumentEditorInfo } from "./DocumentEditorInfo";
import { DocumentEditorEditable } from "./Editable";
import { CustomElement, withCodeBlock, withImages, withLinks } from "./Element";
import { CustomText } from "./Leaf";
import { withKeyCommands } from "./plugins";
import { DocumentEditorToolbar } from "./Toolbar";

const Root = styled(Paper)<{ $disabled?: boolean; error?: boolean; $readOnly?: boolean }>`
	${tw`
		outline-none
		ring-indigo-500
		ring-opacity-80
		transition
		duration-300
		ease-in-out
		shadow-none
		rounded-lg
		focus-within:ring-2
		[& > *]:first:border-top-left-radius[inherit]
		[& > *]:first:border-top-right-radius[inherit]
		[& > *]:last:border-bottom-left-radius[inherit]
		[& > *]:last:border-bottom-right-radius[inherit]
	`}
	${({ $readOnly }) =>
		$readOnly &&
		css`
			background-color: inherit;
		`}
	${({ $disabled }) =>
		$disabled &&
		css`
			${tw`
				cursor-not-allowed
				opacity-60
			`}

			& ${DocumentEditorEditable} {
				${tw`bg-gray-200`}
			}
		`}
	${({ error }) =>
		error
			? tw`
				border-red-600
				text-red-600
			`
			: tw`border-gray-400`}
`;

declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

export type DocumentEditorValue = Descendant[];

export interface DocumentEditorProps {
	children?: ReactNode;
	className?: string;
	disabled?: boolean;
	error?: boolean;
	onChange?: (value: DocumentEditorValue) => void;
	readOnly?: boolean;
	style?: CSSProperties;
	value?: DocumentEditorValue;
}

const _DocumentEditor = forwardRef<HTMLDivElement, DocumentEditorProps>((props, ref) => {
	const { children, className, onChange, readOnly, style, value: _value } = props;

	const [value, setValue] = useUncontrolledProp<DocumentEditorValue>(_value, []);

	const form = useContext(FormContext);
	const group = useContext(FormGroupContext);

	const editor = useMemo(() => {
		const composed = FunctionUtils.compose(
			withReact,
			withHistory,
			withCodeBlock,
			withLinks,
			withImages,
			withKeyCommands
		);

		return composed(createEditor());
	}, []);

	const disabled = props.disabled ?? form.disabled;
	const error = props.error ?? group.error;

	return (
		<Root
			ref={ref}
			className={className}
			style={style}
			error={error}
			$disabled={disabled}
			$readOnly={readOnly}
			aria-disabled={disabled}
		>
			<Slate
				editor={editor}
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
					onChange?.(newValue);
				}}
			>
				<DocumentEditorContext.Provider value={{ readOnly }}>
					{children}
				</DocumentEditorContext.Provider>
			</Slate>
		</Root>
	);
});

_DocumentEditor.displayName = "DocumentEditor";

export const DocumentEditor = ObjectUtils.setStatic(_DocumentEditor, {
	Editable: DocumentEditorEditable,
	Info: DocumentEditorInfo,
	Toolbar: DocumentEditorToolbar
});
