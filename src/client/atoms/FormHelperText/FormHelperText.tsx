import { FormGroupContext } from "@/client/atoms/FormGroup/context";
import { InferComponentProps } from "@/client/types";
import React, { forwardRef, ReactNode, useContext } from "react";
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

export type FormHelperTextProps = InferComponentProps<"div"> & {
	error?: ReactNode;
};

export const FormHelperText = styled(
	// eslint-disable-next-line react/display-name
	forwardRef<HTMLDivElement, FormHelperTextProps>((props, ref) => {
		const context = useContext(FormGroupContext);

		const error = !!props.error ?? context.error;

		if (!props.error || !props.children) return null;

		return (
			<Root {...props} ref={ref} error={error}>
				{props.error ?? props.children}
			</Root>
		);
	})
)<FormHelperTextProps>``;
