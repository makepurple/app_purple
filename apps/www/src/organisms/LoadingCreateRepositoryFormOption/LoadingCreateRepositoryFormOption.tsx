import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingCreateRepositoryFormOptionProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingCreateRepositoryFormOption: FC<LoadingCreateRepositoryFormOptionProps> = ({
	className,
	style
}) => {
	return (
		<div className={className} style={style} tw="flex flex-col items-start">
			<Skeleton tw="h-4.5 w-32" />
			<Skeleton tw="h-4 w-80 mt-2" />
			<div tw="flex flex-wrap gap-3.5 mt-3">
				<Skeleton tw="h-3.5 w-16" />
				<Skeleton tw="h-3.5 w-16" />
				<Skeleton tw="h-3.5 w-16" />
				<Skeleton tw="h-3.5 w-16" />
				<Skeleton tw="h-3.5 w-16" />
				<Skeleton tw="h-3.5 w-16" />
			</div>
		</div>
	);
};
