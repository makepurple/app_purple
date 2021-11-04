import { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import tw from "twin.macro";
import { FormContext } from "./context";

export const Root = tw.form`
	flex
	flex-col
`;

export type FormProps = InferComponentProps<typeof Root> & {
	disabled?: boolean;
};

export const Form: FC<FormProps> = (props) => {
	const { disabled, ...restFormProps } = props;

	return (
		<FormContext.Provider value={{ disabled }}>
			<Root {...restFormProps} />
		</FormContext.Provider>
	);
};
