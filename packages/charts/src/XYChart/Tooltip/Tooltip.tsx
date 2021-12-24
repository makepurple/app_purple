import { localPoint } from "@visx/event";
import { Bar } from "@visx/shape";
import type { AccessorForArrayItem } from "@visx/shape/lib/types";
import { useTooltip } from "@visx/tooltip";
import useTooltipInPortal, {
	TooltipInPortalProps
} from "@visx/tooltip/lib/hooks/useTooltipInPortal";
import { bisector } from "d3-array";
import React, {
	FC,
	memo,
	MouseEvent,
	ReactElement,
	ReactNode,
	TouchEvent,
	useCallback,
	useContext
} from "react";
import { XYChartContext } from "../context";
import { TooltipContext } from "./context";

export interface TooltipChildProps {
	Tooltip: FC<TooltipInPortalProps>;
}

export interface TooltipProps<T extends any = any> {
	children?: ReactNode;
	className?: string;
	x: AccessorForArrayItem<T, any>;
}

export type TooltipComponentType = <T extends any = any>(props: TooltipProps<T>) => ReactElement;

const _Tooltip = memo(<T extends any = any>(props: TooltipProps<T>) => {
	const { children, className, x: xAccessor } = props;

	const { containerElem, data, height, margin, width, xScale } = useContext(XYChartContext);
	const tooltip = useTooltip<{ data: T; index: number }>();
	const { containerRef, TooltipInPortal } = useTooltipInPortal({ scroll: true });

	const handleTooltip = useCallback(
		(event: TouchEvent<SVGRectElement> | MouseEvent<SVGRectElement>) => {
			const { x } = localPoint(event) ?? { x: 0 };
			const x0 = Number(xScale.invert(x));
			const index = bisector<any, any>((d) => Number(xAccessor(d, -1, data))).left(
				data,
				x0,
				1
			);
			const d0 = data[index - 1];
			const d1 = data[index];

			const [d, dIndex] = xAccessor(d1, index, data)
				? x0.valueOf() - Number(xAccessor(d0, index - 1, data)).valueOf() >
				  Number(xAccessor(d1, index, data)).valueOf() - x0.valueOf()
					? [d1, index]
					: [d0, index - 1]
				: [d0, index - 1];

			tooltip.updateTooltip(() => {
				return {
					tooltipOpen: true,
					tooltipData: {
						data: d,
						index: dIndex
					},
					tooltipLeft: x
				};
			});
		},
		[data, tooltip, xAccessor, xScale]
	);

	const innerWidth: number = width - margin.left - margin.right;
	const innerHeight: number = height - margin.top - margin.bottom;

	containerRef(containerElem);

	return (
		<>
			<Bar
				className={className}
				x={margin.left}
				y={margin.top}
				width={innerWidth}
				height={innerHeight}
				fill="transparent"
				onTouchStart={handleTooltip}
				onTouchMove={handleTooltip}
				onMouseMove={handleTooltip}
				onMouseLeave={tooltip.hideTooltip}
			/>
			<TooltipContext.Provider value={{ ...tooltip, Tooltip: TooltipInPortal }}>
				{children}
			</TooltipContext.Provider>
		</>
	);
});

_Tooltip.displayName = "Tooltip";

export const Tooltip = _Tooltip as TooltipComponentType;
