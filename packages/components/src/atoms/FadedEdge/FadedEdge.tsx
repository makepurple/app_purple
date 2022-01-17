import { rgba } from "polished";
import tw, { css, styled, theme } from "twin.macro";

export type FadedEdgeSide = "top" | "right" | "bottom" | "left";

export interface FadedEdgeProps {
	side?: FadedEdgeSide;
	size?: number;
}

export const FadedEdge = styled.div<FadedEdgeProps>`
	position: absolute;
	${({ side }) => {
		switch (side) {
			case "top":
				return tw`
					top-0
					inset-x-0
				`;
			case "left":
				return tw`
					left-0
					inset-y-0
				`;
			case "right":
				return tw`
					right-0
					inset-y-0
				`;
			case "bottom":
			default:
				return tw`
					bottom-0
					inset-x-0
				`;
		}
	}}
	${({ side, size }) => {
		switch (side) {
			case "top":
			case "bottom":
				return css`
					height: ${size}px;
				`;
			default:
				return css`
					width: ${size}px;
				`;
		}
	}}
	background-image: ${({ side }) => css`
		linear-gradient(
			to ${side},
			${rgba(theme`colors.white`, 0)},
			${theme`colors.white`} 90%
		)
	`};
	pointer-events: none;
	z-index: 1;
`;

FadedEdge.defaultProps = {
	side: "bottom",
	size: 64
};
