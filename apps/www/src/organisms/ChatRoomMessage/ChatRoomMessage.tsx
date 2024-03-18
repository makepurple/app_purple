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
		gap-1
	`}
`;

const MessageInfo = styled.div<{ $isViewer: boolean }>`
	${tw`
		flex
		flex-row
		items-center
		gap-2
	`}

	${({ $isViewer }) => $isViewer && tw`flex-row-reverse`}
`;

const SenderInfo = tw.div`
	flex
	flex-col
	overflow-hidden
`;

const SenderName = styled.div<{ $isViewer: boolean }>`
	${tw`
		text-lg
		text-black
		font-semibold
		truncate
	`}

	${({ $isViewer }) => $isViewer && tw`text-right`}
`;

const SentAt = styled.div<{ $isViewer: boolean }>`
	${tw`
		text-sm
		text-gray-500
	`}

	${({ $isViewer }) => $isViewer && tw`text-right`}
`;

const Content = styled.div<{ $isViewer: boolean }>`
	${tw`
		flex
		flex-row
		gap-2
	`}

	${({ $isViewer }) => $isViewer && tw`justify-end`}
`;

const Message = tw(DocumentEditor)`
	border-gray-200
	shadow-lg
`;

const MessageContent = tw(DocumentEditor.Editable)`
	flex-grow-0
	p-3
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

		const { content, sender } = chatMessage;
		const isViewer = session?.user?.name === sender.name;

		return (
			<Root ref={ref} className={className} style={style}>
				<MessageInfo $isViewer={isViewer}>
					{sender.image && (
						<NextLink legacyBehavior href="/[userName]" as={`/${sender.name}`} passHref>
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
						<SenderName $isViewer={isViewer}>{sender.name}</SenderName>
						<SentAt $isViewer={isViewer}>
							{dayjs(chatMessage.createdAt).fromNow()}
						</SentAt>
					</SenderInfo>
				</MessageInfo>
				<Content $isViewer={isViewer}>
					<Spacer />
					<Message readOnly value={content as DocumentEditorValue}>
						<MessageContent />
					</Message>
					<Spacer />
				</Content>
			</Root>
		);
	})
);

ChatRoomMessage.displayName = "ChatRoomMessage";
