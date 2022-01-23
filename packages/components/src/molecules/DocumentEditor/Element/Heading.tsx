import { Menu } from "@headlessui/react";
import { WindowUtils } from "@makepurple/utils";
import { HeadingType } from "@makepurple/validators";
import React, { FC, Fragment, useState } from "react";
import { createPortal } from "react-dom";
import { usePopper } from "react-popper";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";
import { ListItem } from "../../../atoms";
import { HeadingIcon } from "../../../svgs";
import { useIsBlockActive } from "../hooks/useIsBlockActive";
import { useToggleBlock } from "../hooks/useToggleBlock";
import { ToolbarButton } from "../Shared";

const HeadingOne = tw.span`
	text-3xl
	font-bold
`;

const HeadingTwo = tw.span`
	text-2xl
	font-semibold
`;

const HeadingThree = tw.span`
	text-xl
	font-semibold
`;

const HeadingFour = tw.span`
	text-base
	font-semibold
`;

const HeadingFive = tw.span`
	text-sm
	font-semibold
`;

const HeadingSix = tw.span`
	text-xs
	font-semibold
`;

export type HeadingSlateType = HeadingType;

export type HeadingElement = {
	type: HeadingSlateType;
	children: Descendant[];
};

type HeadingOption = [name: string, slateType: HeadingSlateType];

const supportedHeadings: readonly HeadingOption[] = [
	["Heading One", HeadingType.One],
	["Heading Two", HeadingType.Two],
	["Heading Three", HeadingType.Three],
	["Heading Four", HeadingType.Four],
	["Heading Five", HeadingType.Five],
	["Heading Six", HeadingType.Six]
];

const HeaderItems = tw.div`
	inline-flex
	flex-col
	items-stretch
	mt-1
	p-0.5
	rounded-lg
	bg-white
	shadow-2xl
`;

export const HeadingToolbarButton: FC<Record<string, never>> = () => {
	const isActive = useIsBlockActive();
	const toggleBlock = useToggleBlock();

	const [reference, referenceRef] = useState<HTMLButtonElement | null>(null);
	const [popper, popperRef] = useState<HTMLDivElement | null>(null);
	const { styles, attributes } = usePopper(reference, popper, {
		placement: "bottom-start"
	});

	const isHeadingActive =
		isActive(HeadingType.One) ||
		isActive(HeadingType.Two) ||
		isActive(HeadingType.Three) ||
		isActive(HeadingType.Four) ||
		isActive(HeadingType.Five) ||
		isActive(HeadingType.Six);

	return (
		<Menu as={Fragment}>
			<Menu.Button
				as={ToolbarButton}
				ref={referenceRef}
				active={isHeadingActive}
				title="heading"
				aria-label="heading"
			>
				<HeadingIcon height={20} width={20} />
			</Menu.Button>
			{WindowUtils.isBrowser() &&
				createPortal(
					<Menu.Items
						as={HeaderItems}
						ref={popperRef}
						style={styles.popper}
						{...attributes.popper}
					>
						{supportedHeadings.map(([name, slateType]) => (
							<Menu.Item key={slateType}>
								{(itemProps) => (
									<ListItem
										{...itemProps}
										onClick={() => {
											toggleBlock(slateType);
										}}
										selected={isActive(slateType)}
									>
										{name}
									</ListItem>
								)}
							</Menu.Item>
						))}
					</Menu.Items>,
					document.body
				)}
		</Menu>
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
