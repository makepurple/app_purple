import { UseComboBoxState } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { StyleUtils } from "@makepurple/utils";
import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import { Paper } from "../Paper";
import { Skeleton } from "../Skeleton";

const Root = styled(Paper)`
	${tw`
		absolute
		flex
		flex-col
		items-stretch	
	`}
	z-index: ${StyleUtils.getZIndex("menu")};
`;

const Item = tw(Skeleton)`
	h-6
	m-1
`;

export type ComboBoxLoadingStateProps = InferComponentProps<"ul"> & UseComboBoxState<any>;

export const ComboBoxLoadingState: FC<ComboBoxLoadingStateProps> = (props) => {
	const { combobox, ...ulProps } = props;

	if (!combobox.loading) return null;

	return (
		<Root as="ul" {...(ulProps as any)}>
			<Item as="li" />
			<Item as="li" />
			<Item as="li" />
		</Root>
	);
};
