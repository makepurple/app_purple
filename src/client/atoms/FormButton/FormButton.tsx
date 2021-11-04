import { Button, ButtonProps } from "@/client/atoms/Button";
import { FormContext } from "@/client/atoms/Form/context";
import React, { FC, useContext } from "react";
import { styled } from "twin.macro";

export type FormButtonProps = ButtonProps;

export const FormButton = styled(((props: FormButtonProps) => {
	const form = useContext(FormContext);

	const disabled = props.disabled || form.disabled;

	return <Button {...props} disabled={disabled} />;
}) as FC<FormButtonProps>)``;

FormButton.displayName = "FormButton";
