import { FormHelperText } from "@/client/atoms/FormHelperText/FormHelperText";
import React, { CSSProperties, FC, ReactNode } from "react";
import tw, { styled } from "twin.macro";
import { FormGroupContext } from "./context";

const Root = styled.div`
	${tw`
		flex
		flex-col
	`}

	& ${FormHelperText} {
		${tw`
			mt-1
		`}
	}
`;

export interface FormGroupProps {
	children?: ReactNode;
	className?: string;
	error?: boolean;
	style?: CSSProperties;
}

export const FormGroup: FC<FormGroupProps> = ({ children, className, error = false, style }) => {
	return (
		<FormGroupContext.Provider value={{ error }}>
			<Root className={className} style={style}>
				{children}
			</Root>
		</FormGroupContext.Provider>
	);
};
