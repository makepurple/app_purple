import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingUserActivityCardSkillProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingUserActivityCardSkill: FC<LoadingUserActivityCardSkillProps> = ({
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
			<Paper tw="self-stretch flex flex-row items-start p-4 mt-2">
				<Skeleton tw="height[72px] width[72px] rounded-md mr-6" />
				<div tw="flex flex-col items-start">
					<Skeleton tw="h-4.5 w-32" />
					<Skeleton tw="h-4 w-80 mt-2" />
					<div tw="flex flex-wrap gap-3.5 mt-4">
						<Skeleton tw="h-3.5 w-16" />
						<Skeleton tw="h-3.5 w-16" />
						<Skeleton tw="h-3.5 w-16" />
						<Skeleton tw="h-3.5 w-16" />
						<Skeleton tw="h-3.5 w-16" />
						<Skeleton tw="h-3.5 w-16" />
					</div>
				</div>
			</Paper>
		</div>
	);
};
