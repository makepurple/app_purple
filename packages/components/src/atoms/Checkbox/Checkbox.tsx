import { InferComponentProps } from "@makepurple/typings";
import tw, { styled } from "twin.macro";

export type CheckboxProps = InferComponentProps<typeof Checkbox>;

export const Checkbox = styled.input`
	${tw`
		form-checkbox
		h-6
		w-6
		rounded
		border-gray-400
		text-indigo-500
		focus:ring-indigo-500
	`}
`;

Checkbox.defaultProps = {
	type: "checkbox"
};
