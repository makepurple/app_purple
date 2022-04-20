import ms from "ms";
import React, { CSSProperties, memo, ReactNode } from "react";
import { keyframes } from "styled-components";
import tw, { css, styled } from "twin.macro";

const turn = (direction: HomePage3dSkillRotationDirection) => {
	const [x, y, z] = direction;

	return keyframes`
		from {
			transform: rotate3d(0, 0, 0, 0);
		}
		to {
			transform: rotate3d(${x}, ${y}, ${z}, 360deg);
		}
	`;
};

const Root = styled.div<{ $direction: HomePage3dSkillRotationDirection; $speed: number }>`
	${tw`
		relative
		transform-style[preserve-3d]
	`}

	${({ $direction, $speed }) => css`
		animation: ${turn($direction)} ${$speed}ms linear infinite;
	`}
`;

const Face = tw.div`
	absolute
	transform-style[preserve-3d]
	flex
	items-center
	justify-center
	bg-blue-500/40
	border
	border-solid
	border-gray-300
	text-white
	text-lg
	font-semibold
	origin-center
`;

interface Dimensions {
	$depth: number;
	$height: number;
	$width: number;
}

const Front = styled(Face)<Dimensions>`
	${({ $depth, $height, $width }) => css`
		transform: translate3d(-50%, -50%, ${$depth / 2}px) rotateY(0);
		height: ${$height}px;
		width: ${$width}px;
	`}
`;

const Back = styled(Face)<Dimensions>`
	${({ $depth, $height, $width }) => css`
		transform: translate3d(-50%, -50%, -${$depth / 2}px) rotateY(180deg);
		height: ${$height}px;
		width: ${$width}px;
	`}
`;

const Left = styled(Face)<Dimensions>`
	${({ $depth, $height, $width }) => css`
		transform: translate3d(calc(-50% - -${$width / 2}px), -50%, 0) rotateY(-90deg);
		height: ${$height}px;
		width: ${$depth}px;
	`}
`;

const Right = styled(Face)<Dimensions>`
	${({ $depth, $height, $width }) => css`
		transform: translate3d(calc(-50% - ${$width / 2}px), -50%, 0) rotateY(90deg);
		height: ${$height}px;
		width: ${$depth}px;
	`}
`;

const Top = styled(Face)<Dimensions>`
	${({ $depth, $height, $width }) => css`
		transform: translate3d(-50%, calc(-50% - -${$height / 2}px), 0) rotateX(90deg);
		height: ${$depth}px;
		width: ${$width}px;
	`}
`;

const Bottom = styled(Face)<Dimensions>`
	${({ $depth, $height, $width }) => css`
		transform: translate3d(-50%, calc(-50% - ${$height / 2}px), 0) rotateX(-90deg);
		height: ${$depth}px;
		width: ${$width}px;
	`}
`;

export type HomePage3dSkillRotationDirection = [x: number, y: number, z: number];

export interface HomePage3dSkillProps {
	children?: ReactNode;
	className?: string;
	depth?: number;
	direction?: HomePage3dSkillRotationDirection;
	height?: number;
	speed?: number;
	style?: CSSProperties;
	width: number;
}

export const HomePage3dSkill = memo<HomePage3dSkillProps>((props) => {
	const {
		children,
		className,
		depth = 24,
		direction = [1, 1, 0],
		height = 32,
		speed = ms("5s"),
		style,
		width
	} = props;

	return (
		<Root className={className} style={style} $direction={direction} $speed={speed}>
			<Front $depth={depth} $height={height} $width={width}>
				{children}
			</Front>
			<Back $depth={depth} $height={height} $width={width} />
			<Left $depth={depth} $height={height} $width={width} />
			<Right $depth={depth} $height={height} $width={width} />
			<Top $depth={depth} $height={height} $width={width} />
			<Bottom $depth={depth} $height={height} $width={width} />
		</Root>
	);
});

HomePage3dSkill.displayName = "HomePage3dSkill";
