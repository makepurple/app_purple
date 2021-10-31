import { TooltipArrow as ReakitTooltipArrow } from "reakit";
import tw, { styled } from "twin.macro";

export const TooltipArrow = styled(ReakitTooltipArrow)`
	${tw`
		text-black
		fill-current
	`}
	fill-opacity: 0.8;
`;
