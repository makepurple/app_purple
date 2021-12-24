import type { AccessorForArrayItem } from "@visx/shape/lib/types";
import { UseTooltipParams } from "@visx/tooltip/lib/hooks/useTooltip";
import { TooltipInPortalProps } from "@visx/tooltip/lib/hooks/useTooltipInPortal";
import React, { FC, memo, ReactElement, useContext } from "react";
import tw from "twin.macro";
import { XYChartContext } from "../context";
import { TooltipContext, TooltipContextProps } from "./context";

const Root = tw.div`
	rounded-lg
	bg-white
	border
	border-solid
	border-gray-200
	shadow-lg
`;

export type TooltipPanelChildProps<T extends any = any> = TooltipContextProps<T>;

export interface TooltipPanelProps<T extends any = any> extends TooltipInPortalProps {
	children?: FC<UseTooltipParams<{ data: T; index: number }>>;
	y: AccessorForArrayItem<T, any>;
}

export type TooltipPanelComponentType = <T extends any = any>(
	props: TooltipPanelProps<T>
) => ReactElement;

const _TooltipPanel = memo(<T extends any = any>(props: TooltipPanelProps<T>) => {
	const { children, className, style, y: yAccessor, ...restTooltipPanelProps } = props;

	const { Tooltip, ...tooltip } = useContext(TooltipContext);
	const { data, yScale } = useContext(XYChartContext);

	const { tooltipData, tooltipLeft, tooltipOpen } = tooltip;

	if (!tooltipData || !tooltipOpen) return null;
	if (!children) return null;

	return (
		<Tooltip
			key={Math.random()}
			top={yScale(yAccessor(tooltipData.data, tooltipData.index, data))}
			left={tooltipLeft}
			{...restTooltipPanelProps}
			style={{ pointerEvents: "none", position: "absolute", ...style }}
		>
			<Root className={className}>{children?.(tooltip)}</Root>
		</Tooltip>
	);
});

_TooltipPanel.displayName = "TooltipPanel";

export const TooltipPanel = _TooltipPanel as TooltipPanelComponentType;
