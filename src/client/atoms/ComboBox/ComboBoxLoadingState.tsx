import { Paper } from "@/client/atoms/Paper";
import { UseComboBoxState } from "@/client/hooks";
import { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	absolute
`;

const Item = tw.li`
	animate-pulse
	h-6
	w-64
	m-1
	rounded-md
	bg-indigo-400
`;

export type ComboBoxLoadingStateProps = InferComponentProps<"ul"> & UseComboBoxState<any>;

export const ComboBoxLoadingState: FC<ComboBoxLoadingStateProps> = (props) => {
	const { combobox } = props;

	if (!combobox.loading) return null;

	return (
		<Root as="ul">
			<Item />
			<Item />
			<Item />
		</Root>
	);
};
