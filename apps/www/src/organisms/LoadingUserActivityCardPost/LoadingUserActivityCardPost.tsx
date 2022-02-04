import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

export interface LoadingUserActivityCardPostProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingUserActivityCardPost: FC<LoadingUserActivityCardPostProps> = ({
	className,
	style
}) => {
	return (
		<div className={className} style={style}>
			<div tw="flex flex-row items-center">
				<Skeleton tw="height[52px] width[52px] rounded-full mr-3" />
				<div tw="flex-grow">
					<Skeleton tw="h-4 w-1/3" />
					<Skeleton tw="h-4 w-16 mt-1" />
				</div>
			</div>
			<Paper tw="self-stretch flex flex-row items-stretch p-4 mt-2">
				<div tw="w-64 mr-4">
					<Skeleton tw="aspect-h-5 aspect-w-9 rounded-md" />
				</div>
				<div tw="flex-grow flex flex-col items-stretch">
					<Skeleton tw="h-5 w-1/2" />
					<div tw="flex-grow mt-1">
						<Skeleton tw="h-4 w-4/5" />
					</div>
					<div tw="flex flex-row">
						<Skeleton tw="h-4 w-24" />
						<Skeleton tw="h-4 w-24 ml-4" />
					</div>
					<Skeleton tw="height[34px] w-16 mt-2" />
				</div>
			</Paper>
		</div>
	);
};
