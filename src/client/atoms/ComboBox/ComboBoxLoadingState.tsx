import { Paper } from "@/client/atoms/Paper";
import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	absolute
	flex
	flex-col
	items-stretch
`;

const Item = tw.li`
	animate-pulse
	h-6
	m-1
	rounded-md
	bg-indigo-400
`;

export type ComboBoxLoadingStateProps = InferComponentProps<"ul"> & UseComboBoxState<any>;

export const ComboBoxLoadingState: FC<ComboBoxLoadingStateProps> = (props) => {
	const { combobox, ...ulProps } = props;

	if (!combobox.loading) return null;

	return (
		<Root as="ul" {...(ulProps as any)}>
			<Item />
			<Item />
			<Item />
		</Root>
	);
};
