import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import React, { ComponentType, FC } from "react";

export type ComboBoxProps = InferComponentProps<"div"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

export const ComboBox: FC<ComboBoxProps> = (props) => {
	const { as: Type = "div", combobox, ...divProps } = props;

	return <Type {...divProps} {...combobox.getComboboxProps({ ...divProps })} />;
};
