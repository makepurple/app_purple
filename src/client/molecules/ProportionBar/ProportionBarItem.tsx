import { Tooltip } from "@/client/atoms";
import { ColorUtils } from "@/utils";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";

const StyledTooltip = tw(Tooltip)`
	inline-flex
	items-center
	text-base
	leading-none
`;

const LegendIcon = tw.span`
	mr-2
	rounded-full
	h-3
	w-3
`;

const Proportion = tw.span`
	ml-2
	text-indigo-300
	text-sm
`;

const Bar = styled.span<{ $color: string }>`
	${tw`
		h-full
	`}
	background-color: ${({ $color }) => $color};
`;

export interface ProportionBarItemProps {
	children: string;
	className?: string;
	color?: string;
	max?: number;
	style?: CSSProperties;
	value: number;
}

export const ProportionBarItem: FC<ProportionBarItemProps> = ({
	children,
	className,
	color = ColorUtils.getRandomColorFromString(children),
	max,
	style,
	value
}) => {
	return (
		<StyledTooltip
			content={
				<>
					<LegendIcon style={{ backgroundColor: color }} />
					{children}
					{max && <Proportion>{((value / max) * 100).toFixed(2)}%</Proportion>}
				</>
			}
		>
			<Bar className={className} style={style} $color={color} />
		</StyledTooltip>
	);
};
