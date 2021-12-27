import { InferComponentProps } from "@makepurple/typings";
import tw from "twin.macro";
import { Input } from "../Input";

export type ComboBoxInputProps = InferComponentProps<"input">;

export const ComboBoxInput = tw(Input)`
	flex-grow
`;

ComboBoxInput.displayName = "ComboBoxInput";
