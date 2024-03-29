import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";
import { ItalicIcon } from "../../../svgs";
import { useIsMarkActive } from "../hooks/useIsMarkActive";
import { useToggleMark } from "../hooks/useToggleMark";
import { ToolbarButton } from "../Shared";

export const ItalicToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	const isActive = useIsMarkActive();

	return (
		<ToolbarButton
			active={isActive("italic")}
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("italic");
			}}
			title="italic"
			aria-label="italic"
		>
			<ItalicIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const Italic = tw.em``;

export const wrapLeafItalic: WrapLeafWithType = (props) => {
	const { children, leaf } = props;

	if (!leaf.italic) return { children, leaf };

	return {
		children: <Italic>{children}</Italic>,
		leaf
	};
};
