import { UseComboBoxState } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import React, { ComponentType, forwardRef } from "react";
import tw from "twin.macro";
import { Input } from "../Input";

const Root = tw.div`
	flex-grow
`;

export type ComboBoxInputProps = InferComponentProps<"input"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

export const ComboBoxInput = forwardRef<HTMLInputElement, ComboBoxInputProps>((props, ref) => {
	const { as = Input, combobox, ...inputProps } = props;

	return <Root as={as} {...inputProps} {...combobox.getInputProps({ ...inputProps, ref })} />;
});

ComboBoxInput.displayName = "ComboBoxInput";
