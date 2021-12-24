import { LangUtils } from "@makepurple/utils";
import { curveCardinal } from "@visx/curve";
import { Group } from "@visx/group";
import { Area, LinePath } from "@visx/shape";
import type { LinePathProps } from "@visx/shape/lib/shapes/LinePath";
import type { AccessorForArrayItem, AddSVGProps } from "@visx/shape/lib/types";
import type { CurveFactory } from "d3-shape";
import React, { memo, ReactElement, useCallback, useContext, useMemo } from "react";
import { XYChartContext } from "./context";

export interface XYChartLineProps<T extends any = any>
	extends Omit<AddSVGProps<LinePathProps<T>, SVGPathElement>, "data"> {
	curve?: CurveFactory;
	paintArea?: boolean;
	x?: AccessorForArrayItem<T, any>;
	y?: AccessorForArrayItem<T, any>;
}

export type XYChartLineComponentType = <T extends any = any>(
	props: XYChartLineProps<T>
) => ReactElement;

const _XYChartLine = memo(<T extends any = any>(props: XYChartLineProps<T>) => {
	const {
		className,
		curve = curveCardinal,
		paintArea,
		stroke = "#000000",
		strokeOpacity = 1,
		strokeWidth = 2,
		style,
		x,
		y,
		...restPathProps
	} = props;

	const { data, xScale, yScale } = useContext(XYChartContext);

	const yBaseLine: Maybe<number> = useMemo(() => yScale.range()[0], [yScale]);

	const xAccessor = useCallback(
		(d: T, index: number) => {
			return xScale(x?.(d, index, data) ?? 0);
		},
		[data, x, xScale]
	);

	const yAccessor = useCallback(
		(d: T, index: number) => {
			return yScale(y?.(d, index, data) ?? 0);
		},
		[data, y, yScale]
	);

	return (
		<Group className={className}>
			<LinePath data={data} x={xAccessor} y={yAccessor} curve={curve}>
				{({ path }) => (
					<path
						{...restPathProps}
						stroke={stroke}
						strokeOpacity={strokeOpacity}
						strokeWidth={strokeWidth}
						fill="transparent"
						d={path(data) ?? ""}
					/>
				)}
			</LinePath>
			{paintArea && !LangUtils.isNil(yBaseLine) && (
				<Area data={data} x={xAccessor} y0={yBaseLine} y1={yAccessor} curve={curve}>
					{({ path }) => (
						<path
							d={path(data) ?? ""}
							stroke="transparent"
							fill={stroke}
							fillOpacity={0.3}
						/>
					)}
				</Area>
			)}
		</Group>
	);
});

_XYChartLine.displayName = "XYChartLine";

export const XYChartLine = _XYChartLine as XYChartLineComponentType;
