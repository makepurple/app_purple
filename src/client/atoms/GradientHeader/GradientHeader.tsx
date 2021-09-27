import { InferComponentProps } from "@/client/types";
import { oneLine } from "common-tags";
import { rgba } from "polished";
import { styled } from "twin.macro";

export type GradientHeaderProps = InferComponentProps<typeof GradientHeader>;

export const GradientHeader = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	min-height: 100px;
	height: 60vh;
	z-index: -1;
	background-image: ${({ theme }) => oneLine`
		linear-gradient(
			${rgba(theme.palette.lightPurple, 0.3)},
			${rgba(theme.palette.lightPurple, 0.15)},
			rgba(255, 255, 255, 0) 70%
		),
		radial-gradient(
			${rgba(theme.palette.lightPurple, 0.15)},
			rgba(255, 255, 255, 0) 70%,
			rgba(255, 255, 255, 0) 150%
		);
	`};
`;
