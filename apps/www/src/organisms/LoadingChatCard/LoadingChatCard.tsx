import { AvatarGroup, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingChatCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingChatCard: FC<LoadingChatCardProps> = ({ className, style }) => {
	return (
		<div className={className} style={style} tw="p-4">
			<div tw="flex flex-row items-center">
				<AvatarGroup>
					<Skeleton tw="h-10 w-10 rounded-full" />
					<Skeleton tw="h-10 w-10 rounded-full" />
					<Skeleton tw="h-10 w-10 rounded-full" />
				</AvatarGroup>
				<Skeleton tw="h-4.5 w-32 ml-4" />
			</div>
			<Skeleton tw="h-4 w-5/6 mt-3" />
		</div>
	);
};
