import { Menu, Popover, Typography } from "@/client/atoms";
import { useIsBlockActive, useToggle, useToggleBlock } from "@/client/hooks";
import { HeadingIcon } from "@/client/svgs";
import React, { FC } from "react";
import { RenderElementProps } from "slate-react";
import { styled } from "twin.macro";
import { ToolbarButton } from "./ToolbarButton";

const HeadingOne = styled(Typography)`
	font-size: 32px;
`;

const HeadingTwo = styled(Typography)`
	font-size: 24px;
`;

const HeadingThree = styled(Typography)`
	font-size: 20px;
`;

const HeadingFour = styled(Typography)`
	font-size: 16px;
`;

const HeadingFive = styled(Typography)`
	font-size: 14px;
`;

const HeadingSix = styled(Typography)`
	font-size: 12px;
`;

export type HeadingSlateType =
	| "heading-one"
	| "heading-two"
	| "heading-three"
	| "heading-four"
	| "heading-five"
	| "heading-six";

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
				title="Heading"
			>
				<HeadingIcon height={16} width={16} />
			</ToolbarButton>
		</Popover>
	);
};

export type HeadingProps = RenderElementProps;

export const Heading: FC<HeadingProps> = (props) => {
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
			return (
				<Typography as="div" {...attributes}>
					{children}
				</Typography>
			);
	}
};

Heading.displayName = "Heading";
