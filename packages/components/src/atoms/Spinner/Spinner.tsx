import { InferComponentProps } from "@makepurple/typings";
import { keyframes } from "styled-components";
import tw, { styled } from "twin.macro";
import { SpinnerIcon } from "../../svgs";

const dash = (width: number) => {
	const ratio = width / 24;

	return keyframes`
		0% {
			stroke-dasharray: ${1 * ratio}, ${75 * ratio};
			stroke-dashoffset: 0;
		}
		50% {
			stroke-dasharray: ${45 * ratio}, ${75 * ratio};
			stroke-dashoffset: -18;
		}
		100% {
			stroke-dasharray: ${45 * ratio}, ${75 * ratio};
			stroke-dashoffset: ${-62 * ratio};
		}
	`;
};

export type SpinnerProps = InferComponentProps<"svg">;

export const Spinner = styled(SpinnerIcon)`
	${tw`
		animate-spin
		text-sky-200
		opacity-80
	`}

	& > circle {
		animation: ${({ width = 24 }) => dash(width as number)} 1.5s ease-in-out infinite;
	}
`;
