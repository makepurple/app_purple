import React, { FC } from "react";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";
import { ListOrderedIcon } from "../../../svgs";
import { useToggleBlock } from "../hooks/useToggleBlock";
import { ToolbarButton } from "../Shared";

const Root = tw.ol`
	list-decimal
	list-inside
`;

export type NumberedListSlateType = "numbered-list";

export type NumberedListElement = {
	type: NumberedListSlateType;
	children: Descendant[];
};

export const NumberedListToolbarButton: FC<Record<string, never>> = () => {
	const toggleBlock = useToggleBlock();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleBlock("numbered-list");
			}}
			title="numbered list"
			aria-label="numbered list"
		>
			<ListOrderedIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const NumberedList: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <Root {...attributes}>{children}</Root>;
};
