import React, { FC } from "react";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";
import { QuoteIcon } from "../../../svgs";
import { useIsBlockActive } from "../hooks/useIsBlockActive";
import { useToggleBlock } from "../hooks/useToggleBlock";
import { ToolbarButton } from "../Shared";

const Root = tw.blockquote`
	border-l-2
	border-solid
	border-gray-300
	pl-2
	text-gray-400
	italic
`;

export type BlockQuoteSlateType = "block-quote";

export type BlockQuoteElement = {
	type: BlockQuoteSlateType;
	children: Descendant[];
};

export const BlockQuoteToolbarButton: FC<Record<string, never>> = () => {
	const toggleBlock = useToggleBlock();

	const isActive = useIsBlockActive();

	return (
		<ToolbarButton
			active={isActive("block-quote")}
			onMouseDown={(event) => {
				event.preventDefault();

				toggleBlock("block-quote");
			}}
			title="block quote"
			aria-label="block quote"
		>
			<QuoteIcon height={20} width={20} />
		</ToolbarButton>
	);
};

export const BlockQuote: FC<RenderElementProps> = (props) => {
	const { attributes, children } = props;

	return <Root {...attributes}>{children}</Root>;
};
