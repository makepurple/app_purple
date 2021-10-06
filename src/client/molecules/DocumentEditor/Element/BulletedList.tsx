import { useToggleBlock } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { ListUnorderedIcon } from "@/client/svgs";
import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";

const Root = tw.ul`
	list-disc
	list-inside
`;

export type BulletedListSlateType = "bulleted-list";

export const BulletedListToolbarButton: FC<Record<string, never>> = () => {
	const toggleBlock = useToggleBlock();

	return (
		<ToolbarButton
			onMouseDown={(event) => {
				event.preventDefault();

				toggleBlock("bulleted-list");
			}}
		>
			<ListUnorderedIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const BulletedList: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <Root {...attributes}>{children}</Root>;
};
