import { Typist } from "@makepurple/components";
import React, { CSSProperties, FC, useState } from "react";
import { keyframes } from "styled-components";
import tw, { css, styled } from "twin.macro";
import { LogoLeftWing, LogoRightWing } from "../../svgs";

const flapLeft = keyframes`
	0% {
		transform: skewY(0deg);
	}

	25% {
		transform: skewY(22deg);
	}

	50% {
		transform: skewY(0deg);
	}

	75% {
		transform: skewY(22deg);
	}

	to: {
		transform: skewY(0deg);
	}
`;

const flapRight = keyframes`
	0% {
		transform: skewY(0deg);
	}

	25% {
		transform: skewY(-22deg);
	}

	50% {
		transform: skewY(0deg);
	}

	75% {
		transform: skewY(-22deg);
	}

	to: {
		transform: skewY(0deg);
	}
`;

const Root = tw.div`
	inline-flex
	items-center
`;

const Wing = tw.svg`
	h-[5rem]
	w-[2.15rem]
	md:h-[8.075rem]
	md:w-[3.48rem]
`;

const LeftWing = styled(Wing)<{ $animate: boolean }>`
	${tw`
		origin-right
	`}
	${({ $animate }) =>
		$animate &&
		css`
			animation: ${flapLeft} 1.2s linear 1;
		`}
`;

const RightWing = styled(Wing)<{ $animate: boolean }>`
	${tw`
		origin-left
	`}
	${({ $animate }) =>
		$animate &&
		css`
			animation: ${flapRight} 1.2s linear 1;
		`}
`;

const StyledTypist = tw(Typist)`
	font-size[3.75rem]
	font-bold
	whitespace-nowrap
	md:font-size[5.75rem]
`;

const StyledCursor = tw(Typist.Cursor)`
	font-bold
	text-violet-600
`;

export interface TypistLogoProps {
	className?: string;
	sentences: readonly string[];
	style?: CSSProperties;
}

export const TypistLogo: FC<TypistLogoProps> = ({ className, sentences, style }) => {
	const [animate, setAnimate] = useState<boolean>(false);

	return (
		<Root className={className} style={style}>
			<LeftWing as={LogoLeftWing} $animate={animate} />
			<StyledTypist
				onChange={({ completed, mode }) => {
					setAnimate(completed && mode === "paused");
				}}
				sentences={sentences}
			>
				<StyledCursor />
			</StyledTypist>
			<RightWing as={LogoRightWing} $animate={animate} />
		</Root>
	);
};
