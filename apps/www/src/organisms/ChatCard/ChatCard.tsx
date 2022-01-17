import {
	Avatar,
	AvatarGroup,
	DocumentEditor,
	DocumentEditorValue,
	FadedEdge,
	GitHubAvatarImage
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef, Fragment, useMemo } from "react";
import tw from "twin.macro";
import { ChatCardChatFragment } from "../../graphql";

const Root = tw.a`
	flex
	flex-col
	bg-white
	cursor-pointer
	active:bg-indigo-50
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

const Title = tw.div`
	flex-grow
	flex
	flex-wrap
	gap-x-2
	gap-y-1
	items-center
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

const Message = tw(DocumentEditor)`
	relative
	max-h-36
	pb-4
	px-4
	overflow-hidden
	border-none
	shadow-none
	text-gray-500
`;

const MessageEditable = tw(DocumentEditor.Editable)`
	p-0
`;

export interface ChatCardProps {
	chat: ChatCardChatFragment;
	className?: string;
	style?: CSSProperties;
}

export const ChatCard = forwardRef<HTMLAnchorElement, ChatCardProps>((props, ref) => {
	const { chat, className, style } = props;

	const { data: session, status } = useSession();

	const participants = useMemo(
		() =>
			chat.users.nodes
				.filter((user) => user.id !== session?.user.id)
				.sort((a, b) => a.name.localeCompare(b.name))
				.slice(0, 5),
		[chat, session]
	);

	const [firstParticipant, ...restParticipants] = chat.users.nodes;
	const lastMessage = chat.messages.nodes[0];

	if (status !== "authenticated") return null;
	if (!participants.length) return null;

	return (
		<NextLink href="/messaging/[chatId]" as={`/messaging/${chat.id}`} passHref>
			<Root ref={ref} className={className} style={style}>
				<Participants>
					<ParticipantAvatars>
						{participants.map((participant) => (
							<Fragment key={participant.id}>
								{!!participant.image && (
									<NextLink
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
								)}
							</Fragment>
						))}
					</ParticipantAvatars>
					<Title tw="ml-4">
						<ParticipantName>{firstParticipant.name}</ParticipantName>
						{!!restParticipants.length && (
							<Others>+{restParticipants.length.toLocaleString()} others</Others>
						)}
					</Title>
					<LastMessageAt tw="ml-2">
						{dayjs(lastMessage.createdAt).format("MMM D")}
					</LastMessageAt>
				</Participants>
				{!!lastMessage && (
					<Message readOnly value={lastMessage.content as DocumentEditorValue} tw="mt-4">
						<MessageEditable />
						<FadedEdge side="bottom" size={64} />
					</Message>
				)}
			</Root>
		</NextLink>
	);
});

ChatCard.displayName = "ChatCard";
