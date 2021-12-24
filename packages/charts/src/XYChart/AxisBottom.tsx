import { AxisBottom, AxisScale, SharedAxisProps } from "@visx/axis";
import React, { memo, useContext } from "react";
import { XYChartContext } from "./context";

export type XYChartAxisBottomProps = Omit<SharedAxisProps<AxisScale>, "scale">;

export const XYChartAxisBottom = memo<XYChartAxisBottomProps>((props) => {
	const {
		labelProps,
		numTicks = 5,
		stroke = "#000000",
		tickLabelProps,
		tickStroke = stroke,
		...restAxisProps
	} = props;

	const { height, margin, xScale } = useContext(XYChartContext);

	const innerHeight: number = height - margin.top - margin.bottom;

	return (
		<AxisBottom
			left={0}
			top={innerHeight + margin.top}
			numTicks={numTicks}
			scale={xScale}
			stroke={stroke}
			tickLabelProps={(value, index, values) => ({
				fill: tickStroke,
				fontSize: "0.875rem",
				textAnchor: "middle",
				...tickLabelProps?.(value, index, values)
			})}
			tickStroke={tickStroke}
			labelOffset={20}
			labelProps={{
				color: stroke,
				fontSize: "1rem",
				fontWeight: 700,
				textAnchor: "middle",
				...labelProps
			}}
			{...restAxisProps}
		/>
	);
});

XYChartAxisBottom.displayName = "XYChartAxisBottom";
