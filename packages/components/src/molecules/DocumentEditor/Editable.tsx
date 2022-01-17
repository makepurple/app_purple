import { InferComponentProps } from "@makepurple/typings";
import React, { forwardRef, useCallback, useContext } from "react";
import { Editable, RenderElementProps, RenderLeafProps } from "slate-react";
import tw, { css, styled } from "twin.macro";
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
		css`
			background-color: inherit;
		`}
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
				<Editable
					/**
					 * !HACK
					 * @magic
					 * @description For some reason, when we return a truthy value from this event
					 * handler, we can press -> (right arrow) at the end of a link element to move
					 * to the next text node (toggling off the link type), which desired.
					 *
					 * If this behavior ever breaks, consider replacing this with something more
					 * manual with slate operations.
					 * @author David Lee
					 * @date January 1, 2021
					 */
					onKeyDown={() => 1}
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
