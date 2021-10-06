import { useToggleMark } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { BoldIcon } from "@/client/svgs";
import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";

export const BoldToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("bold");
			}}
		>
			<BoldIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const Bold = tw.strong`
	font-semibold
`;

export const wrapLeafBold: WrapLeafWithType = (props) => {
	const { children, leaf } = props;

	if (!leaf.bold) return { children, leaf };

	return {
		children: <Bold>{children}</Bold>,
		leaf
	};
};
