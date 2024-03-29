import { Avatar, AvatarGroup, GitHubAvatarImage } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import tw from "twin.macro";
import { NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment } from "../../graphql";
import { NotificationCardBase } from "../NotificationCardBase";

const ParticipantAvatars = tw(AvatarGroup)`
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

const ParticipantsInfo = tw.span`
	inline-flex
	gap-x-1
	items-center
	overflow-hidden
	text-lg
`;

const ParticipantName = tw.span`
	truncate
	leading-none
	font-medium
`;

const Others = tw.span`
	flex-shrink-0
	text-base
	leading-none
	whitespace-nowrap
	text-gray-500
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

export interface NotificationCardChatMessageReceivedProps {
	className?: string;
	notification: NotificationCardChatMessageReceivedNotificationChatMessageReceivedFragment;
	style?: CSSProperties;
}

export const NotificationCardChatMessageReceived = forwardRef<
	HTMLDivElement,
	NotificationCardChatMessageReceivedProps
>((props, ref) => {
	const { className, notification, style } = props;

	const router = useRouter();
	const { data: session, status } = useSession();

	const chat = notification.chat;

	const participants = useMemo(
		() =>
			chat.users.nodes
				.filter((user) => user.name !== session?.user.name)
				.sort((a, b) => a.name.localeCompare(b.name))
				.slice(0, 2),
		[chat, session]
	);

	/**
	 * @description Subtract 1 for the viewer and another for the first participant.
	 * @author David Lee
	 * @date January 17, 2022
	 */
	const countOthers = Math.max(chat.users.totalCount - 2, 0);
	const firstParticipant = participants[0];

	if (status !== "authenticated") return null;

	return (
		<NotificationCardBase
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push("/messaging/[[...slug]]", `/messaging/${chat.id}`);
			}}
			onMouseOver={async () => {
				await router.prefetch("/messaging/[[...slug]]", `/messaging/${chat.id}`);
			}}
			style={style}
			unread={!notification.opened}
		>
			<ParticipantAvatars tw="mr-6">
				{participants.map(
					(participant) =>
						!!participant.image && (
							<NextLink
								legacyBehavior
								key={participant.id}
								href="/[userName]"
								as={`/${participant.name}`}
								passHref
							>
								<Avatar border={2}>
									<GitHubAvatarImage
										src={participant.image}
										height={40}
										width={40}
									/>
								</Avatar>
							</NextLink>
						)
				)}
			</ParticipantAvatars>
			<NextLink
				legacyBehavior
				href="/messaging/[[...slug]]"
				as={`/messaging/${chat.id}`}
				passHref
			>
				<Details>
					<Title>
						New messages received from:{" "}
						<ParticipantsInfo>
							<ParticipantName>{firstParticipant.name}</ParticipantName>
							{!!countOthers && (
								<Others>+{countOthers.toLocaleString()} others</Others>
							)}
						</ParticipantsInfo>
					</Title>
				</Details>
			</NextLink>
			<LeftContent tw="ml-6">
				<UpdatedAt>{dayjs(notification.updatedAt).fromNow()}</UpdatedAt>
			</LeftContent>
		</NotificationCardBase>
	);
});

NotificationCardChatMessageReceived.displayName = "NotificationCardChatMessageReceived";
