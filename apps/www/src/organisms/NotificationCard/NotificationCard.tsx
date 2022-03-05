import React, { CSSProperties, forwardRef } from "react";
import {
	NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment,
	NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment,
	NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment,
	NotificationCardPostCommentedNotificationPostCommentedFragment
} from "../../graphql";
import { NotificationCardChatMessageReceived } from "../NotificationCardChatMessageReceived";
import { NotificationCardCodeExampleCommented } from "../NotificationCardCodeExampleCommented";
import { NotificationCardFriendshipAccepted } from "../NotificationCardFriendshipAccepted";
import { NotificationCardPostCommented } from "../NotificationCardPostCommented";

export interface NotificationCardProps {
	className?: string;
	notification:
		| NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment
		| NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment
		| NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment
		| NotificationCardPostCommentedNotificationPostCommentedFragment;
	style?: CSSProperties;
}

export const NotificationCard = forwardRef<HTMLDivElement, NotificationCardProps>((props, ref) => {
	const { className, notification, style } = props;

	switch (notification.__typename) {
		case "NotificationChatMessageReceived":
			return (
				<NotificationCardChatMessageReceived
					ref={ref}
					className={className}
					notification={notification}
					style={style}
				/>
			);
		case "NotificationCodeExampleCommented":
			return (
				<NotificationCardCodeExampleCommented
					ref={ref}
					className={className}
					notification={notification}
					style={style}
				/>
			);
		case "NotificationFriendshipAccepted":
			return (
				<NotificationCardFriendshipAccepted
					ref={ref}
					className={className}
					notification={notification}
					style={style}
				/>
			);
		case "NotificationPostCommented":
			return (
				<NotificationCardPostCommented
					ref={ref}
					className={className}
					notification={notification}
					style={style}
				/>
			);
		default:
			return <div ref={ref} />;
	}
});

NotificationCard.displayName = "NotificationCard";
