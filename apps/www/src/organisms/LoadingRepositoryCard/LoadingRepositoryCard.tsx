import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-col
	gap-4
	items-start
	p-4
	sm:flex-row
`;

export interface LoadingRepositoryCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingRepositoryCard: FC<LoadingRepositoryCardProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Skeleton tw="height[72px] width[72px] rounded-md" />
			<div tw="flex flex-col items-start">
				<Skeleton tw="h-4.5 w-1/2" />
				<Skeleton tw="h-4 w-2/3 mt-2" />
				<div tw="flex flex-wrap gap-1.5 mt-4">
					<Skeleton tw="h-6 w-24" />
					<Skeleton tw="h-6 w-24" />
					<Skeleton tw="h-6 w-24" />
				</div>
				<div tw="flex flex-wrap gap-3.5 mt-4">
					<Skeleton tw="h-3.5 w-16" />
					<Skeleton tw="h-3.5 w-16" />
					<Skeleton tw="h-3.5 w-16" />
					<Skeleton tw="h-3.5 w-16" />
					<Skeleton tw="h-3.5 w-16" />
					<Skeleton tw="h-3.5 w-16" />
				</div>
			</div>
		</Root>
	);
};
