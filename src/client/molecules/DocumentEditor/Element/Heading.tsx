import { Menu, Popover, Typography } from "@/client/atoms";
import { useIsBlockActive, useToggle, useToggleBlock } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { HeadingIcon } from "@/client/svgs";
import React, { FC } from "react";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import tw, { styled } from "twin.macro";

const HeadingOne = tw(Typography)`
	text-3xl
`;

const HeadingTwo = tw(Typography)`
	text-2xl
`;

const HeadingThree = tw(Typography)`
	text-xl
`;

const HeadingFour = tw(Typography)`
	text-base
`;

const HeadingFive = tw(Typography)`
	text-sm
`;

const HeadingSix = tw(Typography)`
	text-xs
`;

export type HeadingSlateType =
	| "heading-one"
	| "heading-two"
	| "heading-three"
	| "heading-four"
	| "heading-five"
	| "heading-six";

export type HeadingElement = {
	type: HeadingSlateType;
	children: Descendant[];
};

type HeadingOption = [name: string, slateType: HeadingSlateType];

const supportedHeadings: readonly HeadingOption[] = [
	["Heading One", "heading-one"],
	["Heading Two", "heading-two"],
	["Heading Three", "heading-three"],
	["Heading Four", "heading-four"],
	["Heading Five", "heading-five"],
	["Heading Six", "heading-six"]
];

export const HeadingToolbarButton: FC<Record<string, never>> = () => {
	const isBlockActive = useIsBlockActive();
	const toggleBlock = useToggleBlock();

	const [open, toggle] = useToggle(false);

	return (
		<Popover
			content={
				<Menu>
					{supportedHeadings.map(([name, slateType]) => (
						<Menu.Item
							key={slateType}
							onClick={() => {
								toggleBlock(slateType);

								toggle.off();
							}}
							selected={isBlockActive(slateType)}
						>
							{name}
						</Menu.Item>
					))}
				</Menu>
			}
			onClose={toggle.off}
			open={open}
			placement="bottom"
		>
			<ToolbarButton
				onMouseDown={(event) => {
					event.preventDefault();

					toggle.on();
				}}
				title="heading"
				aria-label="heading"
			>
				<HeadingIcon height={20} width={20} />
			</ToolbarButton>
		</Popover>
	);
};

export const Heading: FC<RenderElementProps> = (props) => {
	const { attributes, children, element } = props;

	switch (element.type) {
		case "heading-one":
			return (
				<HeadingOne as="h1" {...attributes}>
					{children}
				</HeadingOne>
			);
		case "heading-two":
			return (
				<HeadingTwo as="h2" {...attributes}>
					{children}
				</HeadingTwo>
			);
		case "heading-three":
			return (
				<HeadingThree as="h3" {...attributes}>
					{children}
				</HeadingThree>
			);
		case "heading-four":
			return (
				<HeadingFour as="h4" {...attributes}>
					{children}
				</HeadingFour>
			);
		case "heading-five":
			return (
				<HeadingFive as="h5" {...attributes}>
					{children}
				</HeadingFive>
			);
		case "heading-six":
			return (
				<HeadingSix as="h6" {...attributes}>
					{children}
				</HeadingSix>
			);
		default:
			return null;
	}
};

Heading.displayName = "Heading";
