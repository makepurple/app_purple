import {
	Avatar,
	AvatarGroup,
	DocumentEditor,
	DocumentEditorValue,
	FadedEdge,
	GitHubAvatarImage
} from "@makepurple/components";
import { useIsClamped } from "@makepurple/hooks";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef, useMemo, useState } from "react";
import tw, { styled } from "twin.macro";
import { ChatCardChatFragment } from "../../graphql";

const MAX_SHOW_PARTICIPANTS = 3;

const Root = styled.div<{ $selected: boolean; $unread: boolean }>`
	${tw`
		flex
		flex-col
		bg-white
		cursor-pointer
		[& *]:cursor-pointer!
		hover:bg-indigo-50
		active:bg-indigo-100
	`}

	${({ $selected }) => $selected && tw`bg-indigo-100!`}

	${({ $unread }) =>
		$unread &&
		tw`
			border-l-4
			border-solid
			border-indigo-500
		`}
`;

const Participants = tw.div`
	flex
	flex-row
	items-center
	gap-3
	pt-4
	px-4
`;

const ParticipantAvatars = tw(AvatarGroup)`
	flex-shrink-0
`;

const Title = tw.a`
	flex-grow
	flex
	flex-col
	gap-1
	items-start
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

const LastMessageAt = tw.div`
	text-sm
	leading-none
	text-gray-500
	whitespace-nowrap
`;

const UnreadMessagesCount = tw.div`
	flex
	items-center
	justify-center
	min-h-[1.625rem]
	min-w-[1.625rem]
	px-2
	py-1.5
	rounded-full
	bg-blue-600
	text-sm
	leading-none
	font-medium
	text-white
`;

const MessageContainer = tw.div`
	relative
	flex
	flex-row
	overflow-hidden
	pb-4
	px-4
	h-16
`;

const MessageSender = tw.div`
	text-base
	text-gray-500
`;

const Message = tw(DocumentEditor)`
	flex-grow
	border-none
	shadow-none
	bg-transparent
	text-gray-500
`;

const MessageEditable = tw(DocumentEditor.Editable)`
	p-0
`;

export interface ChatCardProps {
	chat: ChatCardChatFragment;
	className?: string;
	selected?: boolean;
	style?: CSSProperties;
}

export const ChatCard = forwardRef<HTMLDivElement, ChatCardProps>((props, ref) => {
	const { chat, className, selected, style } = props;

	const router = useRouter();
	const { data: session, status } = useSession();

	const participants = useMemo(
		() =>
			chat.users.nodes
				.filter((user) => user.name !== session?.user.name)
				.sort((a, b) => a.name.localeCompare(b.name))
				.slice(0, MAX_SHOW_PARTICIPANTS),
		[chat, session]
	);

	/**
	 * @description Subtract 1 for the viewer and another for the first participant.
	 * @author David Lee
	 * @date January 17, 2022
	 */
	const countOthers = Math.max(chat.users.totalCount - 2, 0);
	const firstParticipant = participants[0];
	const lastMessage = chat.messages.nodes[0];

	const lastSender = useMemo(
		() => (lastMessage.sender.name === session?.user.name ? "You" : lastMessage.sender.name),
		[lastMessage, session]
	);

	const [messageElem, messageRef] = useState<HTMLDivElement | null>(null);

	const isClamped = useIsClamped({ current: messageElem });

	if (status !== "authenticated") return null;
	if (!participants.length) return null;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push("/messaging/[[...slug]]", `/messaging/${chat.id}`);
			}}
			style={style}
			$selected={!!selected}
			$unread={!!chat.newMessagesCount}
		>
			<Participants>
				{!!chat.newMessagesCount && (
					<UnreadMessagesCount>
						{FormatUtils.toGitHubFixed(chat.newMessagesCount)}
					</UnreadMessagesCount>
				)}
				<ParticipantAvatars>
					{participants.map(
						(participant) =>
							!!participant.image && (
								<NextLink
									key={participant.id}
									href="/[userName]"
									as={`/${participant.name}`}
									passHref
								>
									<Avatar border={2}>
										<GitHubAvatarImage
											alt={participant.name}
											src={participant.image}
											height={40}
											width={40}
										/>
									</Avatar>
								</NextLink>
							)
					)}
				</ParticipantAvatars>
				<NextLink href="/messaging/[[...slug]]" as={`/messaging/${chat.id}`} passHref>
					<Title>
						<ParticipantName>{firstParticipant.name}</ParticipantName>
						{!!countOthers && <Others>+{countOthers.toLocaleString()} others</Others>}
					</Title>
				</NextLink>
				<LastMessageAt>{dayjs(lastMessage.createdAt).format("MMM D")}</LastMessageAt>
			</Participants>
			{!!lastMessage && (
				<MessageContainer ref={messageRef} tw="mt-3">
					<MessageSender tw="mr-2">{lastSender}:</MessageSender>
					<Message readOnly value={lastMessage.content as DocumentEditorValue}>
						<MessageEditable />
					</Message>
					{isClamped && <FadedEdge side="bottom" size={64} />}
				</MessageContainer>
			)}
		</Root>
	);
});

ChatCard.displayName = "ChatCard";
