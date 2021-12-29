import React, { FC } from "react";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";
import { ListUnorderedIcon } from "../../../svgs";
import { useIsBlockActive } from "../hooks/useIsBlockActive";
import { useToggleBlock } from "../hooks/useToggleBlock";
import { ToolbarButton } from "../Shared";

const Root = tw.ul`
	list-disc
	list-inside
`;

export type BulletedListSlateType = "bulleted-list";

export type BulletedListElement = {
	type: BulletedListSlateType;
	children: Descendant[];
};

export const BulletedListToolbarButton: FC<Record<string, never>> = () => {
	const toggleBlock = useToggleBlock();

	const isActive = useIsBlockActive();

	return (
		<ToolbarButton
			active={isActive("bulleted-list")}
			onMouseDown={(event) => {
				event.preventDefault();

				toggleBlock("bulleted-list");
			}}
			title="bulleted list"
			aria-label="bulleted list"
		>
			<ListUnorderedIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const BulletedList: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <Root {...attributes}>{children}</Root>;
};
