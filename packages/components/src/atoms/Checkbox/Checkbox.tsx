import { InferComponentProps } from "@makepurple/typings";
import tw, { styled } from "twin.macro";

export type CheckboxProps = InferComponentProps<typeof Checkbox>;

export const Checkbox = styled.input`
	${tw`
		h-6
		w-6
		rounded
		border-gray-400
	`}
`;

Checkbox.defaultProps = {
	type: "checkbox"
};
