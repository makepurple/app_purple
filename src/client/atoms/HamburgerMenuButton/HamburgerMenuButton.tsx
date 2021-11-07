import React, { FC } from "react";
import { MenuButton as ReakitMenuButton, MenuButtonProps as ReakitMenuButtonProps } from "reakit";
import tw, { styled } from "twin.macro";

const Bar = tw.div`
	absolute
	left-0
	block
	h-1
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
	not-first:not-last:top-2.5
	last:top-5
`;

const Root = styled(ReakitMenuButton)`
	${tw`
		relative
		w-6
		h-6
		transition
		duration-300
		ease-in-out
		cursor-pointer
	`}

	&[aria-expanded="true"] > div {
		&:first-child,
		&:last-child {
			${tw`
				top-2.5
				w-0
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
