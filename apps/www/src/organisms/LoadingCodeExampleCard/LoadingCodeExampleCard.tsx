import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingCodeExampleCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingCodeExampleCard: FC<LoadingCodeExampleCardProps> = ({ className, style }) => {
	return (
		<Paper className={className} style={style} tw="flex flex-row items-start gap-3 p-3">
			<Skeleton tw="flex-shrink-0 h-12 w-12 rounded-md" />
			<div tw="flex-grow self-stretch flex flex-col items-start gap-2">
				<Skeleton tw="h-4.5 w-1/2" />
				<div tw="flex-grow flex flex-col gap-1 w-full mt-1">
					<Skeleton tw="h-3.5 w-full" />
					<Skeleton tw="h-3.5 w-2/3" />
				</div>
				<div tw="flex flex-row flex-wrap gap-1.5">
					{Array.from({ length: 3 }, (_, i) => (
						<Skeleton key={i} tw="h-6 w-16" />
					))}
				</div>
				<Skeleton tw="height[1.875rem] w-12" />
			</div>
		</Paper>
	);
};
