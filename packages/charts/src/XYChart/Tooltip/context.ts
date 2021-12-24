import { UseTooltipParams } from "@visx/tooltip/lib/hooks/useTooltip";
import { TooltipInPortalProps } from "@visx/tooltip/lib/hooks/useTooltipInPortal";
import { createContext, FC } from "react";

export type TooltipContextProps<T extends any = any> = UseTooltipParams<{
	data: T;
	index: number;
}> & {
	Tooltip: FC<TooltipInPortalProps>;
};

export const TooltipContext = createContext<TooltipContextProps>({
	Tooltip: () => null,
	tooltipOpen: false,
	hideTooltip: () => undefined,
	showTooltip: () => undefined,
	updateTooltip: () => undefined
});
