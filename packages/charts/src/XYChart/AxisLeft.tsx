import { AxisLeft, AxisScale, SharedAxisProps } from "@visx/axis";
import React, { memo, useContext } from "react";
import { XYChartContext } from "./context";

export type XYChartAxisLeftProps = Omit<SharedAxisProps<AxisScale>, "scale">;

export const XYChartAxisLeft = memo<XYChartAxisLeftProps>((props) => {
	const {
		labelProps,
		numTicks = 5,
		stroke = "#000000",
		tickLabelProps,
		tickStroke = stroke,
		...restAxisProps
	} = props;

	const { margin, yScale } = useContext(XYChartContext);

	return (
		<AxisLeft
			left={margin.left}
			top={0}
			numTicks={numTicks}
			scale={yScale}
			stroke={stroke}
			tickLabelProps={(value, index, values) => ({
				fill: tickStroke,
				fontSize: "0.875rem",
				textAnchor: "end",
				...tickLabelProps?.(value, index, values)
			})}
			tickStroke={tickStroke}
			labelProps={{
				color: stroke,
				fontSize: "1rem",
				fontWeight: 700,
				...labelProps
			}}
			{...restAxisProps}
		/>
	);
});

XYChartAxisLeft.displayName = "XYChartAxisLeft";
