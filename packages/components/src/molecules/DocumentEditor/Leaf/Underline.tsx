import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";
import { UnderlineIcon } from "../../../svgs";
import { useToggleMark } from "../hooks/useToggleMark";
import { ToolbarButton } from "../Shared";

export const UnderlineToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("underline");
			}}
			title="underline"
			aria-label="underline"
		>
			<UnderlineIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const Underline = tw.u`
	underline
`;

export const wrapLeafUnderline: WrapLeafWithType = (props) => {
	const { children, leaf } = props;

	if (!leaf.underline) return { children, leaf };

	return {
		children: <Underline>{children}</Underline>,
		leaf
	};
};
