import { Paper } from "@/client/atoms/Paper";
import { Skeleton } from "@/client/atoms/Skeleton";
import { UseComboBoxState } from "@/client/hooks";
import { getZIndex } from "@/client/styles";
import { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import tw, { styled } from "twin.macro";

const Root = styled(Paper)`
	${tw`
		absolute
		flex
		flex-col
		items-stretch	
	`}
	z-index: ${getZIndex("menu")};
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
