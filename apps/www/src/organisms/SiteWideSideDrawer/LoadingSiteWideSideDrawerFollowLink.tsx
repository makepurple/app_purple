import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingSiteWideSideDrawerFollowLinkProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingSiteWideSideDrawerFollowLink: FC<LoadingSiteWideSideDrawerFollowLinkProps> = ({
	className,
	style
}) => {
	return (
		<div className={className} style={style} tw="flex flex-row items-center height[2.75rem]">
			<Skeleton tw="h-7 w-7 mr-3 rounded-md" />
			<Skeleton tw="h-5 w-3/5" />
		</div>
	);
};
