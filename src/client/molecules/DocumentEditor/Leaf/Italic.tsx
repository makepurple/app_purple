import { useToggleMark } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { ItalicIcon } from "@/client/svgs";
import React, { FC } from "react";
import tw from "twin.macro";
import type { WrapLeafWithType } from ".";

export const ItalicToolbarButton: FC<Record<string, never>> = () => {
	const toggleMark = useToggleMark();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleMark("bold");
			}}
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
