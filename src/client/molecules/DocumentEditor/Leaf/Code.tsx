import { useToggleMark } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/ToolbarButton";
import { CodeIcon } from "@/client/svgs";
import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";

export const CodeToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("bold");
			}}
		>
			<CodeIcon height={16} width={16} />
		</ToolbarButton>
	);
};

export const Code = tw.code`
	p-1
	border
	border-solid
	border-gray-200
	font-mono
	text-black
	bg-purple-400
`;

export const wrapLeafCode: WrapLeafWithType = (props) => {
	const { children, leaf } = props;

	if (!leaf.code) return { children, leaf };

	return {
		children: <Code>{children}</Code>,
		leaf
	};
};
