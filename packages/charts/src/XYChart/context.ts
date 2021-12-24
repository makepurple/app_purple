import { scaleLinear } from "@visx/scale";
import { ScaleLinear, ScaleTime } from "d3-scale";
import { createContext } from "react";

export interface IXYChartContextProps<T extends any = any> {
	backgroundColor: string;
	containerElem: SVGElement | HTMLElement | null;
	data: T[];
	height: number;
	width: number;
	margin: {
		top: number;
		right: number;
		bottom: number;
		left: number;
	};
	xScale: ScaleLinear<any, any, any> | ScaleTime<any, any, any>;
	yScale: ScaleLinear<any, any, any> | ScaleTime<any, any, any>;
}

export const XYChartContext = createContext<IXYChartContextProps>({
	backgroundColor: "#ffffff",
	containerElem: null,
	data: [],
	height: 0,
	width: 0,
	margin: {
		top: 0,
		right: 0,
		bottom: 0,
		left: 0
	},
	xScale: scaleLinear(),
	yScale: scaleLinear()
});
