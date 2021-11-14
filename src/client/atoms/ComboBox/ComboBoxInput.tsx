import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import React, { ComponentType, forwardRef } from "react";

export type ComboBoxInputProps = InferComponentProps<"input"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

export const ComboBoxInput = forwardRef<HTMLInputElement, ComboBoxInputProps>((props, ref) => {
	const { as: Type = "input", combobox, ...inputProps } = props;

	return <Type {...inputProps} {...combobox.getInputProps({ ...inputProps, ref })} />;
});

ComboBoxInput.displayName = "ComboBoxInput";
