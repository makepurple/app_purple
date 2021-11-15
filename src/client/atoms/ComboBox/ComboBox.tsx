import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import { ObjectUtils } from "@/utils";
import React, { ComponentType, FC } from "react";
import { ComboBoxInput } from "./ComboBoxInput";
import { ComboBoxLoadingState } from "./ComboBoxLoadingState";
import { ComboBoxOption } from "./ComboBoxOption";
import { ComboBoxSelect } from "./ComboBoxSelect";

export type ComboBoxProps = InferComponentProps<"div"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

const _ComboBox: FC<ComboBoxProps> = (props) => {
	const { as: Type = "div", combobox, ...divProps } = props;

	return <Type {...divProps} {...combobox.getComboboxProps({ ...divProps })} />;
};

_ComboBox.displayName = "ComboBox";

export const ComboBox = ObjectUtils.setStatic(_ComboBox, {
	Input: ComboBoxInput,
	LoadingState: ComboBoxLoadingState,
	Option: ComboBoxOption,
	Select: ComboBoxSelect
});
