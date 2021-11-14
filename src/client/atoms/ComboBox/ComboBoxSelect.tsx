import { Paper } from "@/client/atoms";
import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import React, { ComponentType, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	absolute
`;

export type ComboBoxSelectProps = InferComponentProps<"ul"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

export const ComboBoxSelect: FC<ComboBoxSelectProps> = (props) => {
	const { as = "ul", combobox, ...ulProps } = props;

	return <Root as={as} {...ulProps} {...combobox.getMenuProps({ ...ulProps })} />;
};
