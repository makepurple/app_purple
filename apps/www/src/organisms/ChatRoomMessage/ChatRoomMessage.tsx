import {
	Avatar,
	DocumentEditor,
	DocumentEditorValue,
	GitHubAvatarImage
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef, memo } from "react";
import tw, { styled } from "twin.macro";
import { ChatRoomMessageChatMessageFragment } from "../../graphql";

const Root = styled.div`
	${tw`
		flex
		flex-col
		items-stretch
		gap-2
	`}
`;

const MessageInfo = styled.div<{ $isViewer: boolean }>`
	${tw`
		flex
		flex-row
		items-center
		gap-4
	`}

	${({ $isViewer }) => $isViewer && tw`flex-row-reverse`}
`;

const SenderInfo = tw.div`
	flex
	flex-col
	gap-1
	overflow-hidden
`;

const SenderName = tw.div`
	text-lg
	leading-none
	text-black
	font-semibold
	truncate
`;

const SentAt = tw.div`
	text-sm
	leading-none
	text-gray-500
`;

const Content = tw.div`
	flex
	flex-row
	gap-4
`;

const Message = tw(DocumentEditor)`
	flex-grow
	border-gray-200
	shadow-lg
`;

const Spacer = tw.div`
	flex-shrink-0
	h-12
	w-12
`;

export interface ChatRoomMessageProps {
	chatMessage: ChatRoomMessageChatMessageFragment;
	className?: string;
	style?: CSSProperties;
}

export const ChatRoomMessage = memo(
	forwardRef<HTMLDivElement, ChatRoomMessageProps>((props, ref) => {
		const { chatMessage, className, style } = props;

		const { data: session } = useSession();

		const viewer = session?.user;

		const { content, sender } = chatMessage;

		return (
			<Root ref={ref} className={className} style={style}>
				<MessageInfo $isViewer={viewer?.name === sender.name}>
					{sender.image && (
						<NextLink href="/[userName]" as={`/${sender.name}`} passHref>
							<Avatar border={2} tw="flex-shrink-0">
								<GitHubAvatarImage
									alt={sender.name}
									src={sender.image}
									height={48}
									width={48}
								/>
							</Avatar>
						</NextLink>
					)}
					<SenderInfo>
						<SenderName>{sender.name}</SenderName>
						<SentAt>{dayjs(chatMessage.createdAt).fromNow()}</SentAt>
					</SenderInfo>
				</MessageInfo>
				<Content>
					<Spacer />
					<Message readOnly value={content as DocumentEditorValue}>
						<DocumentEditor.Editable />
					</Message>
					<Spacer />
				</Content>
			</Root>
		);
	})
);

ChatRoomMessage.displayName = "ChatRoomMessage";
