import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import { NotificationCardBase } from "../NotificationCardBase";

export interface LoadingNotificationCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingNotificationCard: FC<LoadingNotificationCardProps> = ({ className, style }) => {
	return (
		<NotificationCardBase className={className} style={style} unread={false}>
			<Skeleton tw="flex-shrink-0 height[4.5rem] width[4.5rem] rounded-md mr-6" />
			<div tw="flex-grow">
				<Skeleton tw="h-5 w-2/3" />
			</div>
			<Skeleton tw=" flex-shrink-0 h-5 w-20 ml-6" />
		</NotificationCardBase>
	);
};
