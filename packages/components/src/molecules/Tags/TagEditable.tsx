import { InferComponentProps } from "@makepurple/typings";
import composeRefs from "@seznam/compose-react-refs";
import React, { forwardRef, useContext } from "react";
import tw from "twin.macro";
import { TagsContext } from "./context";

const Root = tw.input`
	flex-grow
	w-20
	h-6
	bg-transparent
	truncate
	hover:shadow-none
	hover:border-transparent
	focus:ring-0
	focus-visible:outline-none
`;

export type TagEditableProps = InferComponentProps<typeof Root> & {
	editable?: boolean;
};

export const TagEditable = forwardRef<HTMLInputElement, TagEditableProps>((props, ref) => {
	const { editable, ...editableTextProps } = props;

	const context = useContext(TagsContext);

	const canAdd = editable ?? (context.editable === true || context.editable === "add-only");

	if (!canAdd) return null;

	return (
		<Root
			spellCheck={false}
			{...editableTextProps}
			ref={composeRefs(ref, context.editableRef)}
		/>
	);
});

TagEditable.displayName = "TagEditable";
