import { ObjectUtils } from "@/utils";
import React, { CSSProperties, FC, ReactElement, useMemo } from "react";
import styled from "styled-components";
import { LegendItem, LegendItemProps } from "./LegendItem";

const Root = styled.div`
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	margin: -4px;
`;

export interface LegendProps {
	children?: readonly ReactElement<LegendItemProps>[];
	className?: string;
	style?: CSSProperties;
}

const _Legend: FC<LegendProps> = ({ children = [], className, style }) => {
	const itemsProps = useMemo(() => {
		return children.map((child) => child.props).sort((a, b) => (b.value ?? 0) - (a.value ?? 0));
	}, [children]);

	const totalValue = useMemo(
		() => itemsProps.reduce((sum, itemProp) => sum + (itemProp.value ?? 0), 0),
		[itemsProps]
	);

	return (
		<Root className={className} style={style}>
			{itemsProps.map((itemProps) => (
				<LegendItem key={itemProps.children} {...itemProps} max={totalValue} />
			))}
		</Root>
	);
};

export const Legend = ObjectUtils.setStatic(_Legend, { Item: LegendItem });
