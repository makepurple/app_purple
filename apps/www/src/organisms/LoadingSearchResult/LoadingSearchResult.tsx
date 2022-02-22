import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingSearchResultProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingSearchResult: FC<LoadingSearchResultProps> = ({ className, style }) => {
	return (
		<div className={className} style={style} tw="flex items-center py-2 px-3">
			<Skeleton tw="h-12 w-12 mr-3 rounded-md" />
			<div tw="flex-grow flex flex-col gap-1 items-start">
				<Skeleton tw="h-5 w-1/2" />
				<Skeleton tw="h-4 w-4/5" />
			</div>
		</div>
	);
};
