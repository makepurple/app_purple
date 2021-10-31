import React, { useCallback } from "react";
import { Editable, RenderElementProps, RenderLeafProps } from "slate-react";
import tw, { styled } from "twin.macro";
import { Element } from "./Element";
import { Leaf } from "./Leaf";

/**
 * !HACK
 * @description Nothing in here should have visual focus, since the whole thing is a giant input
 * @author David Lee
 * @date October 31, 2021
 */
const EditableContainer = styled.div`
	${tw`
		p-5
	`}
	&, & > * {
		box-shadow: none !important;
	}
`;

export const DocumentEditorEditable: typeof Editable = ({
	className,
	style,
	...restEditableProps
}) => {
	const renderElement = useCallback((props: RenderElementProps) => <Element {...props} />, []);
	const renderLeaf = useCallback((props: RenderLeafProps) => <Leaf {...props} />, []);

	return (
		<EditableContainer className={className} style={style}>
			<Editable
				renderElement={renderElement}
				renderLeaf={renderLeaf}
				{...restEditableProps}
			/>
		</EditableContainer>
	);
};
