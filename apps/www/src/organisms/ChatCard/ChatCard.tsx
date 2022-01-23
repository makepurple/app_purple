import {
	Avatar,
	AvatarGroup,
	DocumentEditor,
	DocumentEditorValue,
	FadedEdge,
	GitHubAvatarImage
} from "@makepurple/components";
import { useIsClamped } from "@makepurple/hooks";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef, useMemo, useState } from "react";
import tw, { styled } from "twin.macro";
import { ChatCardChatFragment } from "../../graphql";

const Root = styled.div<{ $selected: boolean }>`
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
`;

const Participants = tw.div`
	flex
	flex-row
	items-center
	pt-4
	px-4
`;

const ParticipantAvatars = tw(AvatarGroup)`
	flex-shrink-0
`;

const Title = tw.a`
	flex-grow
	flex
	flex-wrap
	gap-x-2
	gap-y-1
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

const LastMessageAt = tw.div`
	text-sm
	leading-none
	text-gray-500
	whitespace-nowrap
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
				.filter((user) => user.id !== session?.user.id)
				.sort((a, b) => a.name.localeCompare(b.name))
				.slice(0, 5),
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
		() => (lastMessage.sender.id === session?.user.id ? "You" : lastMessage.sender.name),
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
		>
			<Participants>
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
					<Title tw="ml-4">
						<ParticipantName>{firstParticipant.name}</ParticipantName>
						{!!countOthers && <Others>+{countOthers.toLocaleString()} others</Others>}
					</Title>
				</NextLink>
				<LastMessageAt tw="ml-2">
					{dayjs(lastMessage.createdAt).format("MMM D")}
				</LastMessageAt>
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
