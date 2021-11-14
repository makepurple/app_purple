import { InferComponentProps } from "@/client/types";
import React, { FC, useContext } from "react";
import tw from "twin.macro";
import { TagsContext } from "./context";

const Root = tw.input`
	flex-grow
	w-20
	h-6
	bg-transparent
	hover:shadow-none
	hover:border-transparent
	focus:ring-0
	focus-visible:outline-none
`;

export type TagEditableProps = InferComponentProps<typeof Root>;

export const TagEditable: FC<TagEditableProps> = (props) => {
	const { ...editableTextProps } = props;

	const { editable } = useContext(TagsContext);

	if (!editable) return null;

	return <Root spellCheck={false} {...editableTextProps} />;
};