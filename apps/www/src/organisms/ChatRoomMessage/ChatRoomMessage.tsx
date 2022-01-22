import {
	Avatar,
	DocumentEditor,
	DocumentEditorValue,
	GitHubAvatarImage
} from "@makepurple/components";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef, memo } from "react";
import tw, { styled } from "twin.macro";
import { ChatRoomMessageChatMessageFragment } from "../../graphql";

const Root = styled.div<{ $isViewer: boolean }>`
	${tw`
		flex
		items-start
		gap-4
	`}

	${({ $isViewer }) => $isViewer && tw`flex-row-reverse`}
`;

const Content = tw(DocumentEditor)`
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
			<Root
				ref={ref}
				className={className}
				style={style}
				$isViewer={viewer?.id === sender.id}
			>
				{sender.image && (
					<NextLink href="/[userName]" as={`/${sender.name}`} passHref>
						<Avatar border={2} tw="flex-shrink-0">
							<GitHubAvatarImage src={sender.image} height={48} width={48} />
						</Avatar>
					</NextLink>
				)}
				<Content readOnly value={content as DocumentEditorValue}>
					<DocumentEditor.Editable />
				</Content>
				<Spacer />
			</Root>
		);
	})
);

ChatRoomMessage.displayName = "ChatRoomMessage";
