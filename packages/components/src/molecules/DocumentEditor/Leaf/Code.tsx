import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";
import { CodeIcon } from "../../../svgs";
import { useToggleMark } from "../hooks/useToggleMark";
import { ToolbarButton } from "../Shared";

export const CodeToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("code");
			}}
			title="code"
			aria-label="code"
		>
			<CodeIcon height={20} width={20} />
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
