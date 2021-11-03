import { Paper } from "@/client/atoms";
import { FormGroupContext } from "@/client/atoms/FormGroup/context";
import { useUncontrolledProp } from "@/client/hooks";
import { FunctionUtils, ObjectUtils } from "@/utils";
import React, { CSSProperties, FC, ReactNode, useContext, useMemo } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { ReactEditor, Slate, withReact } from "slate-react";
import tw, { styled } from "twin.macro";
import { DocumentEditorEditable } from "./Editable";
import { CustomElement, withCodeBlock, withImages, withLinks } from "./Element";
import { CustomText } from "./Leaf";
import { DocumentEditorToolbar } from "./Toolbar";

const Root = styled(Paper)<{ error?: boolean }>`
	${tw`
		overflow-hidden
		outline-none
		ring-indigo-500
		ring-opacity-80
		focus-within:ring-2
		transition
		duration-300
		ease-in-out
	`}
	${({ error }) => (error ? tw`border-red-600` : tw`border-gray-200`)}
`;

declare module "slate" {
	interface CustomTypes {
		Editor: BaseEditor & ReactEditor;
		Element: CustomElement;
		Text: CustomText;
	}
}

export interface DocumentEditorProps {
	children?: ReactNode;
	className?: string;
	error?: boolean;
	onChange?: (value: Descendant[]) => void;
	style?: CSSProperties;
	value?: Descendant[];
}

const _DocumentEditor: FC<DocumentEditorProps> = (props) => {
	const { children, className, onChange, style, value: _value } = props;

	const [value, setValue] = useUncontrolledProp<Descendant[]>(_value, []);

	const context = useContext(FormGroupContext);

	const editor = useMemo(() => {
		const composed = FunctionUtils.compose(
			withReact,
			withHistory,
			withCodeBlock,
			withLinks,
			withImages
		);

		return composed(createEditor());
	}, []);

	const error = props.error ?? context.error;

	return (
		<Root className={className} style={style} error={error}>
			<Slate
				editor={editor}
				value={value}
				onChange={(newValue) => {
					setValue(newValue);
					onChange?.(newValue);
				}}
			>
				{children}
			</Slate>
		</Root>
	);
};

_DocumentEditor.displayName = "DocumentEditor";

export const DocumentEditor = ObjectUtils.setStatic(_DocumentEditor, {
	Editable: DocumentEditorEditable,
	Toolbar: DocumentEditorToolbar
});
