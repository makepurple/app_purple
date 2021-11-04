import { Button, ButtonProps } from "@/client/atoms/Button";
import { FormContext } from "@/client/atoms/Form/context";
import React, { FC, useContext } from "react";

export type FormButtonProps = ButtonProps;

export const FormButton: FC<FormButtonProps> = (props) => {
	const form = useContext(FormContext);

	const disabled = props.disabled || form.disabled;

	return <Button {...props} disabled={disabled} />;
};
