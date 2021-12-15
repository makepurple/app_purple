import { InferComponentProps } from "@makepurple/typings";
import tw from "twin.macro";

export type EditableTextProps = InferComponentProps<typeof EditableText>;

export const EditableText = tw.input`
	inline-flex
	p-1
	border
	border-solid
	border-transparent
	rounded-md
	bg-transparent
	hover:shadow-inner
	hover:border-gray-200
`;
