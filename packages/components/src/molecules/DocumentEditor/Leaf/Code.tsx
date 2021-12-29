import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";
import { CodeIcon } from "../../../svgs";
import { useIsMarkActive } from "../hooks/useIsMarkActive";
import { useToggleMark } from "../hooks/useToggleMark";
import { ToolbarButton } from "../Shared";

export const CodeToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	const isActive = useIsMarkActive();

	return (
		<ToolbarButton
			active={isActive("code")}
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
	text-gray-800
	bg-indigo-100
`;

export const wrapLeafCode: WrapLeafWithType = (props) => {
	const { children, leaf } = props;

	if (!leaf.code) return { children, leaf };

	return {
		children: <Code>{children}</Code>,
		leaf
	};
};
