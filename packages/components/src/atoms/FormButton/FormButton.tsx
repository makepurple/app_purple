import React, { forwardRef, useContext } from "react";
import { styled } from "twin.macro";
import { Button, ButtonProps } from "../Button";
import { FormContext } from "../Form/context";

export type FormButtonProps = ButtonProps;

export const FormButton = styled(
	// eslint-disable-next-line react/display-name
	forwardRef<HTMLButtonElement, FormButtonProps>((props: FormButtonProps, ref) => {
		const form = useContext(FormContext);

		const disabled = props.disabled || form.disabled;

		return <Button {...props} ref={ref} disabled={disabled} />;
	})
)``;

FormButton.displayName = "FormButton";
