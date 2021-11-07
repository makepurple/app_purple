import React, { FC } from "react";
import { MenuButton as ReakitMenuButton, MenuButtonProps as ReakitMenuButtonProps } from "reakit";
import tw, { styled } from "twin.macro";

const Bar = tw.div`
	absolute
	left-0
	block
	height[9px]
	w-full
	bg-black
	rounded-full
	opacity-100
	transform
	rotate-0
	transition-all
	duration-150
	ease-in-out
	first:top-0
	not-first:not-last:top[18px]
	last:top[36px]
`;

const Root = styled(ReakitMenuButton)`
	${tw`
		relative
		width[60px]
		height[45px]
		transition
		duration-300
		ease-in-out
		cursor-pointer
	`}

	&[aria-expanded="true"] > div {
		&:first-child,
		&:last-child {
			${tw`
				top[18px]
				width[0%]
				left-1/2
			`}
		}

		&:nth-child(2) {
			${tw`
				transform
				rotate-45
			`}
		}

		&:nth-child(3) {
			${tw`
				transform
				-rotate-45
			`}
		}
	}
`;

export type HamburgerMenuButtonProps = ReakitMenuButtonProps;

export const HamburgerMenuButton: FC<HamburgerMenuButtonProps> = (props) => {
	return (
		<Root {...props}>
			<Bar />
			<Bar />
			<Bar />
			<Bar />
		</Root>
	);
};
