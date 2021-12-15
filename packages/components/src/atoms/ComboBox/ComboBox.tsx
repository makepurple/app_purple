import { UseComboBoxState } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { ObjectUtils } from "@makepurple/utils";
import React, { ComponentType, FC } from "react";
import tw from "twin.macro";
import { ComboBoxInput } from "./ComboBoxInput";
import { ComboBoxLoadingState } from "./ComboBoxLoadingState";
import { ComboBoxOption } from "./ComboBoxOption";
import { ComboBoxOptions } from "./ComboBoxOptions";

const Root = tw.div`
	flex
`;

export type ComboBoxProps = InferComponentProps<"div"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

const _ComboBox: FC<ComboBoxProps> = (props) => {
	const { as = "div", combobox, ...divProps } = props;

	return <Root as={as} {...divProps} {...combobox.getComboboxProps({ ...divProps })} />;
};

_ComboBox.displayName = "ComboBox";

export const ComboBox = ObjectUtils.setStatic(_ComboBox, {
	Input: ComboBoxInput,
	LoadingState: ComboBoxLoadingState,
	Option: ComboBoxOption,
	Options: ComboBoxOptions
});
