import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";

export interface LoadingChatRoomMessageProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingChatRoomMessage: FC<LoadingChatRoomMessageProps> = ({ className, style }) => {
	return (
		<div className={className} style={style} tw="flex items-start gap-4">
			<Skeleton tw="h-12 w-12 rounded-full" />
			<Skeleton tw="flex-grow h-24" />
			<div tw="h-12 w-12" />
		</div>
	);
};
