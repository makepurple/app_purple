import { Paper } from "@/client/atoms";
import { useUncontrolledProp } from "@/client/hooks";
import { FunctionUtils, ObjectUtils } from "@/utils";
import React, { CSSProperties, FC, ReactNode, useMemo } from "react";
import { BaseEditor, createEditor, Descendant } from "slate";
import { withHistory } from "slate-history";
import { ReactEditor, Slate, withReact } from "slate-react";
import tw from "twin.macro";
import { DocumentEditorEditable } from "./Editable";
import { CustomElement, withCodeBlock, withImages, withLinks } from "./Element";
import { CustomText } from "./Leaf";
import { DocumentEditorToolbar } from "./Toolbar";

const Root = tw(Paper)`
	outline-none
	ring-indigo-500
	ring-opacity-80
	focus-within:ring-2
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
	onChange?: (value: Descendant[]) => void;
	style?: CSSProperties;
	value?: Descendant[];
}

const _DocumentEditor: FC<DocumentEditorProps> = ({
	children,
	className,
	onChange,
	style,
	value: _value
}) => {
	const [value, setValue] = useUncontrolledProp<Descendant[]>(_value, []);

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

	return (
		<Root className={className} style={style}>
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
