import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import { styled } from "twin.macro";
import { ComboBoxInput } from "./ComboBoxInput";
import { ComboBoxOption } from "./ComboBoxOption";
import { ComboBoxOptions } from "./ComboBoxOptions";

export type ComboBoxProps = InferComponentProps<"div">;

const _ComboBox = styled.div``;

export const ComboBox = ObjectUtils.setStatic(_ComboBox, {
	Input: ComboBoxInput,
	Option: ComboBoxOption,
	Options: ComboBoxOptions
});
