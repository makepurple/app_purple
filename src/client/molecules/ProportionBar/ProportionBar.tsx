import { ProgressBar } from "@/client/atoms";
import { ObjectUtils } from "@/utils";
import React, { CSSProperties, memo, ReactElement, useMemo } from "react";
import { ProportionBarItem, ProportionBarItemProps } from "./ProportionBarItem";

export interface ProportionBarProps {
	children?: readonly ReactElement<ProportionBarItemProps>[];
	className?: string;
	style?: CSSProperties;
}

const _ProportionBar = memo<ProportionBarProps>(({ className, children = [], style }) => {
	const itemsProps = useMemo(() => {
		return children.map((child) => child.props).sort((a, b) => b.value - a.value);
	}, [children]);

	const totalValue = useMemo(
		() => itemsProps.reduce((sum, itemProp) => sum + itemProp.value, 0),
		[itemsProps]
	);

	return (
		<ProgressBar className={className} style={style}>
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
});

_ProportionBar.displayName = "ProportionBar";

export const ProportionBar = ObjectUtils.setStatic(_ProportionBar, { Item: ProportionBarItem });
