import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingUserFollowCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingUserFollowCard: FC<LoadingUserFollowCardProps> = ({ className, style }) => {
	return (
		<div className={className} style={style} tw="flex items-start py-4">
			<Skeleton tw="flex-shrink-0 h-16 w-16 rounded-full mr-4" />
			<div tw="flex-grow flex flex-col">
				<Skeleton tw="h-4.5 w-3/5" />
				<Skeleton tw="h-4 w-5/6 mt-2" />
				<div tw="flex flex-wrap gap-1.5 mt-2">
					{Array.from({ length: 3 }, (_, i) => (
						<Skeleton key={i} tw="h-6 w-20" />
					))}
				</div>
				<div tw="flex flex-wrap gap-1.5 mt-2">
					{Array.from({ length: 2 }, (_, i) => (
						<Skeleton key={i} tw="h-6 w-20" />
					))}
				</div>
			</div>
			<div tw="flex-shrink-0">
				<Skeleton tw="h-10 w-16 ml-4" />
			</div>
		</div>
	);
};
