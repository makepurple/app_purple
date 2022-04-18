import ms from "ms";
import React, { CSSProperties, FC, ReactElement } from "react";
import { keyframes } from "styled-components";
import tw, { css, styled } from "twin.macro";

interface SlideTrackProps {
	$direction: "left" | "right";
	$speed: number;
}

const scroll = ({ $direction }: SlideTrackProps) => {
	const start = css`
		transform: translate3d(0, 0, 0);
	`;
	const end = css`
		transform: translate3d(-50%, 0, 0);
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

const Root = styled.div`
	${tw`
		relative
		overflow-hidden
	`}
	&::before,
	&::after {
		${tw`
			absolute
			inset-y-0
			pointer-events-none
			z-[1]
		`}
		content: "";
		width: 10rem;
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
	width: max-content;
	animation: ${(props) => scroll(props)} ${({ $speed }) => $speed}ms linear infinite;

	&:hover {
		animation-play-state: paused;
	}

	& > * {
		${tw`
			flex-shrink-0
		`}
	}
`;

export interface InfiniteAutoplayCarouselProps {
	children: ReactElement[];
	className?: string;
	direction?: "left" | "right";
	speed?: number;
	style?: CSSProperties;
}

export const InfiniteAutoplayCarousel: FC<InfiniteAutoplayCarouselProps> = ({
	children,
	className,
	direction = "left",
	speed = ms("30s"),
	style
}) => {
	return (
		<Root className={className} style={style}>
			<SlideTrack $direction={direction} $speed={speed}>
				{children}
				{children}
			</SlideTrack>
		</Root>
	);
};
