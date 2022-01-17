import React, { CSSProperties, FC, ReactNode } from "react";
import tw from "twin.macro";

const Root = tw.div`
	inline-flex
	flex-row
	[& > *]:not-first:-ml-4
`;

export interface AvatarGroupProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
}

export const AvatarGroup: FC<AvatarGroupProps> = ({ children, className, style }) => {
	return (
		<Root className={className} style={style}>
			{children}
		</Root>
	);
};
