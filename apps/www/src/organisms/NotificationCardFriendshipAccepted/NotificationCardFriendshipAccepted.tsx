import { Avatar, GitHubAvatarImage } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment } from "../../graphql";
import { NotificationCardBase } from "../NotificationCardBase";

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
`;

const Details = tw.a`
	flex-grow
	flex
	flex-row
	items-center
`;

const Title = tw.span`
	text-base
	leading-tight
`;

const LeftContent = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-center
`;

const UpdatedAt = tw.span`
	text-gray-500
`;

export interface NotificationCardFriendshipAcceptedProps {
	className?: string;
	notification: NotificationCardFriendshipAcceptedNotificationFriendshipAcceptedFragment;
	style?: CSSProperties;
}

export const NotificationCardFriendshipAccepted = forwardRef<
	HTMLDivElement,
	NotificationCardFriendshipAcceptedProps
>((props, ref) => {
	const { className, notification, style } = props;

	const friender = notification.friendship.friender;

	return (
		<NotificationCardBase
			ref={ref}
			className={className}
			style={style}
			unread={!notification.opened}
		>
			{!!friender.image && (
				<NextLink href="/[userName]" as={`/${friender.id}`} passHref>
					<StyledAvatar border={4} aria-label={friender.name} tw="mr-6">
						<GitHubAvatarImage
							alt={friender.name}
							src={friender.image}
							height={64}
							width={64}
						/>
					</StyledAvatar>
				</NextLink>
			)}
			<NextLink href="/[userName]" as={`/${friender.id}`} passHref>
				<Details>
					<Title>
						You are now connected to <b>{friender.name}</b>
					</Title>
				</Details>
			</NextLink>
			<LeftContent tw="ml-6">
				<UpdatedAt>{dayjs(notification.updatedAt).fromNow()}</UpdatedAt>
			</LeftContent>
		</NotificationCardBase>
	);
});

NotificationCardFriendshipAccepted.displayName = "NotificationCardFriendshipAccepted";
