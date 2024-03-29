import { InferComponentProps } from "@makepurple/typings";
import tw from "twin.macro";

export type FormLabelProps = InferComponentProps<typeof FormLabel>;

export const FormLabel = tw.label`
	block
	text-base
	text-gray-500
	mb-1
`;
