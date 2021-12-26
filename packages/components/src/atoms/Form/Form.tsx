import { InferComponentProps } from "@makepurple/typings";
import React, { FC } from "react";
import { FormContext } from "./context";

export type FormProps = InferComponentProps<"form"> & {
	disabled?: boolean;
};

export const Form: FC<FormProps> = (props) => {
	const { disabled, ...restFormProps } = props;

	return (
		<FormContext.Provider value={{ disabled }}>
			<form {...restFormProps} />
		</FormContext.Provider>
	);
};
