import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";
import { BoldIcon } from "../../../svgs";
import { useToggleMark } from "../hooks/useToggleMark";
import { ToolbarButton } from "../Shared";

export const BoldToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("bold");
			}}
			title="bold"
			aria-label="bold"
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
