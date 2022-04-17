import ms from "ms";
import React, { CSSProperties, FC, ReactElement } from "react";
import { keyframes } from "styled-components";
import tw, { css, styled } from "twin.macro";

interface SlideTrackProps {
	$direction: "left" | "right";
	$itemSize: number;
	$length: number;
	$speed: number;
}

const scroll = ({ $direction, $itemSize, $length }: SlideTrackProps) => {
	const start = css`
		transform: translateX(0);
	`;
	const end = css`
		transform: translateX(calc(-${$itemSize}px * ${$length}));
	`;

	return keyframes`
		0% {
			${$direction === "left" ? start : end}
		}

		100% {
			${$direction === "left" ? end : start}
		}
	`;
};

const Root = styled.div<{ $itemSize: number }>`
	${tw`
		relative
		overflow-hidden
	`}
	&::before,
	&::after {
		${tw`
			absolute
			inset-y-0
			z-[1]
		`}
		content: "";
		width: ${({ $itemSize }) => 0.8 * $itemSize}px;
	}

	&::before {
		${tw`
			left-0
		`}
		background: linear-gradient(
			to right,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}

	&::after {
		${tw`
			right-0
		`}
		background: linear-gradient(
			to left,
			rgba(255, 255, 255, 1) 0%,
			rgba(255, 255, 255, 0) 100%
		);
	}
`;

const SlideTrack = styled.div<SlideTrackProps>`
	${tw`
		flex
		items-center
		h-full
	`}
	width: ${({ $itemSize, $length }) => `calc(${$itemSize}px * ${$length * 2})`};
	animation: ${(props) => scroll(props)} ${({ $speed }) => $speed}ms linear infinite;

	& > * {
		width: ${({ $itemSize }) => $itemSize}px;
	}
`;

export interface InfiniteAutoplayCarouselProps {
	children: ReactElement[];
	className?: string;
	direction?: "left" | "right";
	itemSize: number;
	speed?: number;
	style?: CSSProperties;
}

export const InfiniteAutoplayCarousel: FC<InfiniteAutoplayCarouselProps> = ({
	children,
	className,
	direction = "left",
	itemSize,
	speed = ms("45s"),
	style
}) => {
	return (
		<Root className={className} style={style} $itemSize={itemSize}>
			<SlideTrack
				$direction={direction}
				$itemSize={itemSize}
				$length={children.length}
				$speed={speed}
			>
				{children}
				{children}
			</SlideTrack>
		</Root>
	);
};
