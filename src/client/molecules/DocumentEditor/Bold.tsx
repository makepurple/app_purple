import { useToggleMark } from "@/client/hooks";
import { BoldIcon } from "@/client/svgs";
import React, { FC } from "react";
import tw, { styled } from "twin.macro";
import type { WrapLeafWithType } from "./Leaf";
import { ToolbarButton } from "./ToolbarButton";

export const BoldToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("bold");
			}}
		>
			<BoldIcon height={16} width={16} />
		</ToolbarButton>
	);
};

export const Bold = styled.strong`
	${tw`font-semibold`}
`;

export const wrapLeafBold: WrapLeafWithType = (props) => {
	const { children, leaf } = props;

	if (!leaf.bold) return { children, leaf };

	return {
		children: <Bold>{children}</Bold>,
		leaf
	};
};
