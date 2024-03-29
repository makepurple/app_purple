import React, { CSSProperties, forwardRef, memo, ReactElement, useMemo } from "react";
import { ProgressBar } from "../../atoms";
import { ProportionBarItem, ProportionBarItemProps } from "./ProportionBarItem";

export interface ProportionBarProps {
	children?: readonly ReactElement<ProportionBarItemProps>[];
	className?: string;
	style?: CSSProperties;
}

export const ProportionBar = memo<ProportionBarProps>(
	forwardRef<HTMLDivElement, ProportionBarProps>(({ className, children = [], style }, ref) => {
		const itemsProps = useMemo(() => {
			return children.map((child) => child.props).sort((a, b) => b.value - a.value);
		}, [children]);

		const totalValue = useMemo(
			() => itemsProps.reduce((sum, itemProp) => sum + itemProp.value, 0),
			[itemsProps]
		);

		return (
			<ProgressBar ref={ref} className={className} style={style}>
				{itemsProps.map((itemProps) => (
					<ProportionBarItem
						key={itemProps.children}
						{...itemProps}
						max={totalValue}
						style={{ width: `${(itemProps.value / totalValue) * 100}%` }}
					/>
				))}
			</ProgressBar>
		);
	})
);

ProportionBar.displayName = "ProportionBar";
