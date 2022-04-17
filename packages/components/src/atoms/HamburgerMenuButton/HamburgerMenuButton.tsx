import { InferComponentProps } from "@makepurple/typings";
import React, { FC } from "react";
import tw, { styled } from "twin.macro";

const Bar = styled.span`
	${tw`
		absolute
		left-0
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
		first:top-0.5
		not-first:not-last:top-2.5
		last:top[1.125rem]
	`}
`;

const Root = styled.button`
	${tw`
		flex
		items-center
		justify-center
		h-11
		w-11
		border
		border-solid
		border-gray-300
		rounded-md
		bg-white
	`}

	&[aria-expanded="true"] ${Bar} {
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

const Bars = tw.div`
	relative
	w-6
	h-6
	transition
	duration-300
	ease-in-out
	cursor-pointer
`;

export type HamburgerMenuButtonProps = InferComponentProps<"button"> & {
	open?: boolean;
};

export const HamburgerMenuButton: FC<HamburgerMenuButtonProps> = (props) => {
	const { open, ...divProps } = props;

	return (
		<Root type="button" aria-expanded={open} aria-label="Open menu" {...divProps}>
			<Bars>
				<Bar />
				<Bar />
				<Bar />
				<Bar />
			</Bars>
		</Root>
	);
};
