import React, { useCallback } from "react";
import { Editable, RenderElementProps, RenderLeafProps } from "slate-react";
import tw from "twin.macro";
import { Element } from "./Element";
import { Leaf } from "./Leaf";

const EditableContainer = tw.div`
	p-5
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
