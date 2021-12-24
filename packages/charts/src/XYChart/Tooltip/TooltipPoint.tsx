import type { AccessorForArrayItem } from "@visx/shape/lib/types";
import { TooltipInPortalProps } from "@visx/tooltip/lib/hooks/useTooltipInPortal";
import React, { memo, ReactElement, useContext } from "react";
import { XYChartContext } from "../context";
import { TooltipContext } from "./context";

export interface TooltipPointProps<T extends any = any> extends TooltipInPortalProps {
	className?: string;
	fill?: string;
	r?: number;
	stroke?: string;
	y: AccessorForArrayItem<T, any>;
}

export type TooltipPointComponentType = <T extends any = any>(
	props: TooltipPointProps<T>
) => ReactElement;

const _TooltipPoint = memo(<T extends any = any>(props: TooltipPointProps<T>) => {
	const {
		className,
		detectBounds = false,
		fill = "#000000",
		r = 4,
		stroke = "#ffffff",
		style = {},
		y: yAccessor,
		...restTooltipProps
	} = props;

	const { data, height, margin, yScale } = useContext(XYChartContext);
	const { Tooltip, tooltipData, tooltipLeft, tooltipOpen } = useContext(TooltipContext);

	if (!tooltipData || !tooltipOpen) {
		return null;
	}

	const innerHeight: number = height - margin.top - margin.bottom;

	const tooltipTop: number = Number(yScale(yAccessor(tooltipData.data, tooltipData.index, data)));

	const strokeWidth: number = Math.sqrt(r);

	return (
		<Tooltip
			key={Math.random()}
			top={margin.top}
			left={tooltipLeft}
			offsetTop={0}
			offsetLeft={0}
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
			<svg
				className={className}
				width="1"
				height={innerHeight}
				overflow="visible"
				pointerEvents="none"
			>
				<circle
					cx={0}
					cy={tooltipTop + 1 - margin.top}
					r={r}
					fill="#000000"
					fillOpacity={0.1}
					stroke="#000000"
					strokeOpacity={0.1}
					strokeWidth={strokeWidth}
				/>
				<circle
					cx={0}
					cy={tooltipTop - margin.top}
					r={r}
					fill={fill}
					stroke={stroke}
					strokeWidth={strokeWidth}
				/>
			</svg>
		</Tooltip>
	);
});

_TooltipPoint.displayName = "TooltipPoint";

export const TooltipPoint = _TooltipPoint as TooltipPointComponentType;
