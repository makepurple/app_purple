import { InferComponentProps } from "@makepurple/typings";
import { oneLine } from "common-tags";
import { rgba } from "polished";
import tw, { styled, theme } from "twin.macro";

export type GradientHeaderProps = InferComponentProps<typeof GradientHeader>;

export const GradientHeader = styled.div`
	${tw`
		absolute
		top-0
		inset-x-0
	`}
	min-height: 100px;
	height: 60vh;
	z-index: -1;
	background-image: ${oneLine`
		linear-gradient(
			${rgba(theme`colors.indigo.400`, 0.3)},
			${rgba(theme`colors.indigo.400`, 0.15)},
			rgba(255, 255, 255, 0) 70%
		),
		radial-gradient(
			${rgba(theme`colors.indigo.400`, 0.15)},
			rgba(255, 255, 255, 0) 70%,
			rgba(255, 255, 255, 0) 150%
		);
	`};
`;
