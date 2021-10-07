import { ColorUtils } from "@/utils";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw.div`
	inline-flex
	items-center
	m-1
	text-gray-800
	text-sm
`;

const LegendColor = tw.span`
	mr-2
	rounded-full
	h-3
	w-3
`;

const Content = tw.span`
	leading-none
`;

const Proportion = tw.span`
	ml-2
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
			<Content>
				{children}
				{max && <Proportion>{((value / max) * 100).toFixed(2)}%</Proportion>}
			</Content>
		</Root>
	);
};
