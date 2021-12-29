import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef, useCallback, useContext } from "react";
import { Editable, RenderElementProps, RenderLeafProps } from "slate-react";
import tw, { styled } from "twin.macro";
import { DocumentEditorContext } from "./context";
import { Element } from "./Element";
import { Leaf } from "./Leaf";
import { Placeholder } from "./Placeholder";

/**
 * !HACK
 * @description Nothing in here should have visual focus, since the whole thing is a giant input
 * @author David Lee
 * @date October 31, 2021
 */
const EditableContainer = styled.div<{ $readOnly?: boolean }>`
	${tw`
		p-5
		bg-indigo-50
		transition
		duration-300
		ease-in-out
		focus-within:bg-white
	`}

	&, & > * {
		box-shadow: none !important;
	}

	${({ $readOnly }) =>
		$readOnly &&
		tw`
			bg-white
		`}
`;

const StyledEditable = styled(Editable)`
	min-height: 4rem !important;
`;

export type DocumentEditorEditableProps = InferComponentProps<typeof Editable>;

const _DocumentEditorEditable = forwardRef<HTMLDivElement, DocumentEditorEditableProps>(
	(props, ref) => {
		const { className, style, readOnly: _readOnly, ...restEditableProps } = props;

		const context = useContext(DocumentEditorContext);

		const renderElement = useCallback(
			(elementProps: RenderElementProps) => <Element {...elementProps} />,
			[]
		);
		const renderLeaf = useCallback((leafProps: RenderLeafProps) => <Leaf {...leafProps} />, []);

		const readOnly = _readOnly ?? context.readOnly;

		return (
			<EditableContainer ref={ref} className={className} style={style} $readOnly={readOnly}>
				<StyledEditable
					renderElement={renderElement}
					renderLeaf={renderLeaf}
					renderPlaceholder={Placeholder}
					readOnly={readOnly}
					aria-readonly={readOnly}
					{...restEditableProps}
				/>
			</EditableContainer>
		);
	}
);

_DocumentEditorEditable.displayName = "DocumentEditorEditable";

export const DocumentEditorEditable = styled(_DocumentEditorEditable)``;
