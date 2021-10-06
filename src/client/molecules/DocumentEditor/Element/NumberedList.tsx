import { useToggleBlock } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { ListOrderedIcon } from "@/client/svgs";
import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";

const Root = tw.ol`
	list-decimal
	list-inside
`;

export type NumberedListSlateType = "numbered-list";

export const NumberedListToolbarButton: FC<Record<string, never>> = () => {
	const toggleBlock = useToggleBlock();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleBlock("numbered-list");
			}}
			title="numbered list"
		>
			<ListOrderedIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const NumberedList: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <Root {...attributes}>{children}</Root>;
};
