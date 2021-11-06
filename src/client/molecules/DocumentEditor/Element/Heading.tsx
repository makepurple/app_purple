import { Menu, MenuItem } from "@/client/atoms";
import { useIsBlockActive, useOnClickOutside, useToggle, useToggleBlock } from "@/client/hooks";
import { ToolbarButton } from "@/client/molecules/DocumentEditor/Shared";
import { HeadingIcon } from "@/client/svgs";
import { HeadingType } from "@/validators";
import React, { FC, useRef } from "react";
import { MenuButton, useMenuState } from "reakit";
import { Descendant } from "slate";
import { RenderElementProps } from "slate-react";
import tw from "twin.macro";

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

export const HeadingToolbarButton: FC<Record<string, never>> = () => {
	const isBlockActive = useIsBlockActive();
	const toggleBlock = useToggleBlock();
	const menu = useMenuState({
		placement: "bottom-start"
	});

	const buttonRef = useRef<HTMLButtonElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	const [open, toggle] = useToggle(false);

	useOnClickOutside(buttonRef, (e) => {
		if (!menuRef.current || menuRef.current.contains(e.target as Node | null)) return;

		toggle.off();
	});

	return (
		<>
			<MenuButton
				as={ToolbarButton}
				ref={buttonRef}
				{...menu}
				onMouseDown={(event) => {
					event.preventDefault();

					toggle.on();
				}}
				title="heading"
				aria-label="heading"
			>
				<HeadingIcon height={20} width={20} />
			</MenuButton>
			<Menu ref={menuRef} {...menu} visible={open}>
				{supportedHeadings.map(([name, slateType]) => (
					<MenuItem
						key={slateType}
						{...menu}
						onClick={() => {
							toggleBlock(slateType);

							toggle.off();
						}}
						selected={isBlockActive(slateType)}
					>
						{name}
					</MenuItem>
				))}
			</Menu>
		</>
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
