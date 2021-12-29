import { DocumentEditor, DocumentEditorValue } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface CommentInputProps {
	className?: string;
	name?: string;
	onChange?: (newValue: DocumentEditorValue) => void;
	style?: CSSProperties;
	value?: DocumentEditorValue;
	"aria-label"?: string;
}

export const CommentInput: FC<CommentInputProps> = ({
	className,
	name,
	onChange,
	style,
	value,
	"aria-label": ariaLabel
}) => {
	return (
		<DocumentEditor className={className} onChange={onChange} style={style} value={value}>
			<DocumentEditor.Editable name={name} aria-label={ariaLabel} />
			<DocumentEditor.Toolbar>
				<DocumentEditor.Toolbar.CodeBlock />
				<DocumentEditor.Toolbar.Bold />
				<DocumentEditor.Toolbar.Italic />
				<DocumentEditor.Toolbar.Underline />
				<DocumentEditor.Toolbar.BulletedList />
				<DocumentEditor.Toolbar.NumbedList />
				<DocumentEditor.Toolbar.BlockQuote />
				<DocumentEditor.Toolbar.Code />
				<DocumentEditor.Toolbar.Link />
			</DocumentEditor.Toolbar>
		</DocumentEditor>
	);
};
