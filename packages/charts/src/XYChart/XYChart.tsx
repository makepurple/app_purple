import { ObjectUtils } from "@makepurple/utils";
import { ScaleLinear, ScaleTime } from "d3-scale";
import React, { CSSProperties, FC, memo, ReactElement, ReactNode, useState } from "react";
import { XYChartAxisBottom } from "./AxisBottom";
import { XYChartAxisLeft } from "./AxisLeft";
import { XYChartContext } from "./context";
import { XYChartLine, XYChartLineProps } from "./Line";
import {
	Tooltip,
	TooltipCrosshair,
	TooltipPanel,
	TooltipPanelProps,
	TooltipPoint,
	TooltipPointProps,
	TooltipProps
} from "./Tooltip";

const MARGINS: {
	top: number;
	right: number;
	bottom: number;
	left: number;
} = {
	top: 64,
	right: 64,
	bottom: 64,
	left: 64
};

const MIN_HEIGHT = 128;
const MIN_WIDTH = 128;

export interface XYChartProps<T extends any = any> {
	data: readonly T[];
	backgroundColor?: string;
	children?: ReactNode;
	className?: string;
	height: number;
	margin?: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
	style?: CSSProperties;
	width: number;
	xScale: ScaleLinear<any, any, any> | ScaleTime<any, any, any>;
	yScale: ScaleLinear<any, any, any> | ScaleTime<any, any, any>;
}

export type XYChartComponentType = <T extends any = any>(props: XYChartProps<T>) => ReactElement;

const _XYChart = memo(<T extends any = any>(props: XYChartProps<T>) => {
	const {
		data,
		backgroundColor = "#ffffff",
		children,
		className,
		height,
		margin = MARGINS,
		style,
		width,
		xScale,
		yScale
	} = props;

	const [containerElem, containerRef] = useState<SVGElement | null>(null);

	if (height <= MIN_HEIGHT || width <= MIN_WIDTH) {
		return null;
	}

	xScale.range([margin.left, width - margin.right]);
	yScale.range([height - margin.bottom, margin.top]);

	return (
		<div
			className={className}
			style={{
				position: "relative",
				display: "inline-flex",
				boxSizing: "border-box",
				borderRadius: 4,
				overflow: "hidden",
				...style
			}}
		>
			<XYChartContext.Provider
				value={{
					backgroundColor,
					containerElem,
					data: data as T[],
					height,
					width,
					margin,
					xScale,
					yScale
				}}
			>
				<svg ref={containerRef} height={height} width={width}>
					<rect x={0} y={0} height={height} width={width} fill={backgroundColor} />
					{children}
				</svg>
			</XYChartContext.Provider>
		</div>
	);
});

_XYChart.displayName = "XYChart";

const ofType = <T extends any = any>() => {
	const TypedXYChart: FC<XYChartProps<T>> = _XYChart;

	return ObjectUtils.setStatic(TypedXYChart, {
		AxisBottom: XYChartAxisBottom,
		AxisLeft: XYChartAxisLeft,
		Line: XYChartLine as FC<XYChartLineProps<T>>,
		Tooltip: ObjectUtils.setStatic(Tooltip as FC<TooltipProps<T>>, {
			Crosshair: TooltipCrosshair,
			Panel: TooltipPanel as FC<TooltipPanelProps<T>>,
			Point: TooltipPoint as FC<TooltipPointProps<T>>
		})
	});
};

export const XYChart = ObjectUtils.setStatic(ofType<any>(), { ofType });
