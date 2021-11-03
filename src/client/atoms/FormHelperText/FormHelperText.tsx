import { FormGroupContext } from "@/client/atoms/FormGroup/context";
import { InferComponentProps } from "@/client/types";
import React, { FC, useContext } from "react";
import tw, { styled } from "twin.macro";

const Root = styled.div<{ error?: boolean }>`
	${tw`
		text-sm
		transition
		duration-300
		ease-in-out
	`}
	${({ error }) => (error ? tw`text-red-600` : tw`text-gray-500`)}
`;

export type FormHelperTextProps = InferComponentProps<typeof Root>;

export const FormHelperText = styled(((props: FormHelperTextProps) => {
	const context = useContext(FormGroupContext);

	const error = props.error ?? context.error;

	return <Root {...props} error={error} />;
}) as FC<FormHelperTextProps>)<FormHelperTextProps>``;
