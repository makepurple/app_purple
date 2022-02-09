import React, { CSSProperties, FC, ReactNode } from "react";

export interface SmallTrophyIconProps {
	children?: ReactNode;
	className?: string;
	color?: string;
	style?: CSSProperties;
	x?: number;
}

export const SmallTrophyIcon: FC<SmallTrophyIconProps> = ({
	children,
	className,
	color,
	style,
	x
}) => {
	return (
		<svg
			className={className}
			style={style}
			x={x}
			y={35}
			width={65}
			height={65}
			viewBox="0 0 30 30"
			fill={color}
			xmlns="http://www.w3.org/2000/svg"
		>
			{children}
		</svg>
	);
};
