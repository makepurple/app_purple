import { InferComponentProps } from "@/client/types";
import React, { useCallback } from "react";
import { Editable, RenderElementProps, RenderLeafProps, useReadOnly } from "slate-react";
import tw, { styled } from "twin.macro";
import { Element } from "./Element";
import { Leaf } from "./Leaf";
import { Placeholder } from "./Placeholder";

/**
 * !HACK
 * @description Nothing in here should have visual focus, since the whole thing is a giant input
 * @author David Lee
 * @date October 31, 2021
 */
const EditableContainer = styled.div<{ $readOnly: boolean }>`
	${tw`
		p-5
		bg-indigo-50
		transition
		duration-300
		ease-in-out
		placeholder:text-gray-400
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

export const DocumentEditorEditable = styled((({
	className,
	style,
	...restEditableProps
}: DocumentEditorEditableProps) => {
	const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
	const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

	const readOnly = useReadOnly();

	return (
		<EditableContainer className={className} style={style} $readOnly={readOnly}>
			<StyledEditable
				renderElement={renderElement}
				renderLeaf={renderLeaf}
				renderPlaceholder={Placeholder}
				{...restEditableProps}
			/>
		</EditableContainer>
	);
}) as typeof Editable)``;

DocumentEditorEditable.displayName = "DocumentEditorEditable";
