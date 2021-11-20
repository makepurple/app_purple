import { Paper } from "@/client/atoms/Paper";
import { UseComboBoxState } from "@/client/hooks";
import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import React, { ComponentType, FC } from "react";
import tw, { styled } from "twin.macro";

const Root = styled(Paper)<{ $hidden: boolean }>`
	${tw`
		absolute
		empty:hidden
	`}
	z-index: ${getZIndex("menu")};

	${({ $hidden }) =>
		$hidden &&
		tw`
			hidden
		`}
`;

export type ComboBoxOptionsProps = InferComponentProps<"ul"> &
	UseComboBoxState<any> & {
		as?: string | ComponentType<any>;
	};

export const ComboBoxOptions: FC<ComboBoxOptionsProps> = (props) => {
	const { as = "ul", combobox, ...ulProps } = props;

	return (
		<Root
			as={as}
			{...ulProps}
			{...combobox.getMenuProps({ ...ulProps })}
			$hidden={!combobox.isOpen || combobox.loading}
		/>
	);
};
