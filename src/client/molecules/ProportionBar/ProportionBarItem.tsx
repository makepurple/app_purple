import { Popover } from "@/client/atoms";
import { useHover } from "@/client/hooks";
import { ColorUtils } from "@/utils";
import React, { CSSProperties, FC } from "react";
import { styled } from "twin.macro";

const StyledPopover = styled(Popover)`
	display: inline-flex;
	align-items: center;
	padding: 0.5rem;
	font-size: 1rem;
	line-height: 1em;
`;

const LegendIcon = styled.span`
	margin-right: 0.5rem;
	border-radius: 50%;
	height: 0.75rem;
	width: 0.75rem;
`;

const Proportion = styled.span`
	margin-left: 0.5rem;
	color: ${({ theme }) => theme.palette.mediumPurple};
	font-size: 0.875rem;
`;

const Bar = styled.span<{ color: string }>`
	height: 100%;
	background-color: ${({ color }) => color};
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
	const [isHovered, { handlers }] = useHover();

	return (
		<StyledPopover
			content={
				<>
					<LegendIcon style={{ backgroundColor: color }} />
					{children}
					{max && <Proportion>{((value / max) * 100).toFixed(2)}%</Proportion>}
				</>
			}
			open={isHovered}
			placement="bottom"
		>
			<Bar {...handlers} className={className} color={color} style={style} />
		</StyledPopover>
	);
};
