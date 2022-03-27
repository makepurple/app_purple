import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingChatRoomMessageProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingChatRoomMessage: FC<LoadingChatRoomMessageProps> = ({ className, style }) => {
	return (
		<div className={className} style={style} tw="flex flex-col items-stretch gap-2">
			<div tw="flex flex-row items-center gap-4">
				<Skeleton tw="h-12 w-12 rounded-full" />
				<div tw="flex flex-col gap-1">
					<Skeleton tw="h-5 w-20" />
					<Skeleton tw="h-4 w-16" />
				</div>
			</div>
			<Skeleton tw="flex-grow h-24" />
			<div tw="h-12 w-12" />
		</div>
	);
};
