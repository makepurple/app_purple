import { InferComponentProps } from "@makepurple/typings";
import composeRefs from "@seznam/compose-react-refs";
import React, { forwardRef, useContext } from "react";
import tw from "twin.macro";
import { FormContext } from "../../atoms/Form/context";
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
	disabled:cursor-not-allowed
`;

export type TagEditableProps = InferComponentProps<typeof Root> & {
	editable?: boolean;
};

export const TagEditable = forwardRef<HTMLInputElement, TagEditableProps>((props, ref) => {
	const { editable, ...editableTextProps } = props;

	const form = useContext(FormContext);
	const tags = useContext(TagsContext);

	const canAdd = editable ?? (tags.editable === true || tags.editable === "add-only");
	const disabled = props.disabled || form.disabled;

	if (!canAdd) return null;

	return (
		<Root
			spellCheck={false}
			{...editableTextProps}
			disabled={disabled}
			ref={composeRefs(ref, tags.editableRef)}
		/>
	);
});

TagEditable.displayName = "TagEditable";
