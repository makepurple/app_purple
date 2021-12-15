import { UseComboBoxState } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils } from "@makepurple/utils";
import React, { ComponentType, FC } from "react";
import tw, { styled } from "twin.macro";
import { Paper } from "../Paper";

const Root = styled(Paper)<{ $hidden: boolean }>`
	${tw`
		absolute
		empty:hidden
	`}
	z-index: ${StyleUtils.getZIndex("menu")};

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
