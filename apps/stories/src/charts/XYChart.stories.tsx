import { XYChart } from "@makepurple/charts";
import { dayjs } from "@makepurple/utils";
import { ParentSize } from "@visx/responsive";
import { scaleLinear, scaleTime } from "@visx/scale";
import { extent, max } from "d3-array";
import Faker from "faker";
import React, { FC, useCallback } from "react";

Faker.seed(1);

const DATA_SIZE = 365;

let currValue = 500;
let currIndex = 0;

interface MockData {
	i: number;
	date: number;
	value: number;
}

const data = Array.from({ length: DATA_SIZE }, (_, i) => {
	currIndex += Faker.datatype.number({
		min: 1,
		max: 5
	});

	currValue += Faker.datatype.number({
		min: -5,
		max: 5
	});

	return {
		i,
		date: dayjs("01-01-19").add(currIndex, "day").toDate().getTime(),
		value: currValue
	};
});

const TypedXYChart = XYChart.ofType<MockData>();

const formatDate = (d) => dayjs(d).format("MM-DD-YY");

export default {
	title: "charts/XYChart",
	component: XYChart
};

export const Standard: FC = () => {
	const xAccessor = useCallback((datum: MockData): number => Number(datum?.date), []);
	const yAccessor = useCallback((datum: MockData): number => Number(datum?.value), []);

	return (
		<div style={{ height: 500, width: 800, margin: 10 }}>
			<ParentSize>
				{({ height, width }) => (
					<TypedXYChart
						data={data}
						height={height}
						width={width}
						xScale={scaleTime({
							range: [0, width],
							domain: extent(data, xAccessor) as [number, number]
						})}
						yScale={scaleLinear({
							range: [height, 0],
							domain: [0, (max(data, yAccessor) ?? 0) + height / 3],
							nice: true
						})}
					>
						<TypedXYChart.Line x={xAccessor} y={yAccessor} paintArea={true} />
						<TypedXYChart.AxisLeft label="Value" numTicks={10} />
						<TypedXYChart.AxisBottom label="Date" tickFormat={formatDate} />
						<TypedXYChart.Tooltip x={xAccessor}>
							<TypedXYChart.Tooltip.Crosshair />
							<TypedXYChart.Tooltip.Point y={yAccessor} />
							<TypedXYChart.Tooltip.Panel y={yAccessor}>
								{({ tooltipData }) => (
									<div>
										<div>{formatDate(tooltipData?.data.date)}</div>
										<div>{tooltipData?.data.value}</div>
									</div>
								)}
							</TypedXYChart.Tooltip.Panel>
						</TypedXYChart.Tooltip>
					</TypedXYChart>
				)}
			</ParentSize>
		</div>
	);
};
