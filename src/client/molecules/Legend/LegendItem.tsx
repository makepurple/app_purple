import { ColorUtils } from "@/utils";
import React, { CSSProperties, FC } from "react";
import styled from "styled-components";

const Root = styled.div`
	display: inline-flex;
	margin: 4px;
	color: ${({ theme }) => theme.palette.mediumPurple};
	font-size: 0.875rem;
`;

const LegendColor = styled.span`
	margin-right: 0.5rem;
	border-radius: 50%;
	height: 0.75rem;
	width: 0.75rem;
`;

const Proportion = styled.span`
	margin-left: 0.5rem;
`;

export interface LegendItemProps {
	children: string;
	className?: string;
	color?: string;
	max?: number;
	style?: CSSProperties;
	value?: number;
}

export const LegendItem: FC<LegendItemProps> = ({
	children,
	className,
	color = ColorUtils.getRandomColorFromString(children),
	max,
	style,
	value = 0
}) => {
	return (
		<Root className={className} style={style}>
			<LegendColor style={{ backgroundColor: color }} />
			{children}
			{max && <Proportion>{((value / max) * 100).toFixed(2)}%</Proportion>}
		</Root>
	);
};
