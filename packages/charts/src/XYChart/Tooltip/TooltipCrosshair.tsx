import { Line } from "@visx/shape";
import { TooltipInPortalProps } from "@visx/tooltip/lib/hooks/useTooltipInPortal";
import React, { memo, useContext } from "react";
import { XYChartContext } from "../context";
import { TooltipContext } from "./context";

export interface TooltipCrosshairProps extends TooltipInPortalProps {
	stroke?: string;
	strokeWidth?: number;
}

export const TooltipCrosshair = memo<TooltipCrosshairProps>((props) => {
	const {
		className,
		detectBounds = false,
		offsetLeft = 0,
		offsetTop = 0,
		stroke = "#000000",
		strokeWidth = 2,
		style = {},
		...restTooltipProps
	} = props;

	const { height, margin } = useContext(XYChartContext);
	const { Tooltip, tooltipData, tooltipLeft, tooltipOpen } = useContext(TooltipContext);

	if (!tooltipData || !tooltipOpen) return null;

	const innerHeight: number = height - margin.top - margin.bottom;

	return (
		<Tooltip
			key={Math.random()}
			top={margin.top}
			left={tooltipLeft}
			offsetTop={offsetTop}
			offsetLeft={offsetLeft}
			detectBounds={detectBounds}
			{...restTooltipProps}
			style={{
				position: "absolute",
				pointerEvents: "none",
				fontSize: 0,
				lineHeight: 0,
				...style
			}}
		>
			<svg className={className} width="1" height={innerHeight} overflow="visible">
				<Line
					x1={0}
					x2={0}
					y1={0}
					y2={innerHeight}
					stroke={stroke}
					strokeWidth={strokeWidth}
					pointerEvents="none"
				/>
			</svg>
		</Tooltip>
	);
});

TooltipCrosshair.displayName = "TooltipCrosshair";
