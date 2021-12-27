import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import tw from "twin.macro";
import { ComboBoxInput } from "./ComboBoxInput";
import { ComboBoxOption } from "./ComboBoxOption";
import { ComboBoxOptions } from "./ComboBoxOptions";

export type ComboBoxProps = InferComponentProps<"div">;

const _ComboBox = tw.div`
	flex
`;

export const ComboBox = ObjectUtils.setStatic(_ComboBox, {
	Input: ComboBoxInput,
	Option: ComboBoxOption,
	Options: ComboBoxOptions
});
