import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Avatar,
	AvatarGroup,
	Button,
	DocumentEditor,
	Form,
	FormButton,
	GitHubAvatarImage,
	Skeleton,
	Spinner
} from "@makepurple/components";
import { ChatMessageContent } from "@makepurple/validators";
import Schema, { Type } from "computed-types";
import { useElementScroll } from "framer-motion";
import ms from "ms";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, useEffect, useMemo, useRef, useState } from "react";
import { flushSync } from "react-dom";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useInterval } from "react-use";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	ChatRoomMessageChatMessageFragment,
	GetChatDocument,
	GetChatMessagesDocument,
	GetChatMessagesQuery,
	GetChatMessagesQueryVariables,
	GetChatQuery,
	GetChatQueryVariables,
	useGetChatQuery,
	useLeaveChatMutation,
	useSendChatMessageMutation
} from "../../graphql";
import { usePusher } from "../../hooks";
import { CancelIcon } from "../../svgs";
import { ChatRoomMessage } from "../ChatRoomMessage";
import { LoadingChatRoomMessage } from "../LoadingChatRoomMessage";

const CHAT_MESSAGE_BATCH_SIZE = 20;

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const Participants = tw.div`
	flex
	items-center
	h-16
	px-3
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
	text-lg
`;

const NobodyHere = tw.span`
	font-medium
	text-gray-500
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

const Messages = tw.div`
	flex-grow
	flex
	flex-col-reverse
	gap-6
	items-stretch
	overflow-y-scroll
	max-h-96
	px-3
	py-8
	border-t
	border-b
	border-solid
	border-gray-200
`;

const Message = tw(DocumentEditor)`
	rounded-t-none
	border-gray-300
`;

const SendButtonContainer = tw.div`
	grid-column-start[-4]
	grid-column-end[-1]
	flex
	items-stretch
	justify-center
`;

const RemoveButton = tw(Button)`
	flex-shrink-0
	h-9
	py-0
`;
export interface ChatRoomProps {
	chatId: string;
	className?: string;
	style?: CSSProperties;
}

export const ChatRoom: FC<ChatRoomProps> = ({ chatId, className, style }) => {
	const pusher = usePusher();
	const router = useRouter();
	const { data: session } = useSession();

	const [cursor, setCursor] = useState<string | null>(null);

	const messagesRef = useRef<HTMLDivElement>(null);

	const { scrollYProgress } = useElementScroll(messagesRef);

	const urqlClient = useClient();

	const [{ data, fetching }] = useGetChatQuery({
		requestPolicy: "network-only",
		variables: {
			messageLimit: CHAT_MESSAGE_BATCH_SIZE,
			messageOffset: 0,
			where: {
				id: chatId
			}
		}
	});

	const [messages, setMessages] = useState<readonly ChatRoomMessageChatMessageFragment[]>([]);

	const chat = data?.chat;
	const users = useMemo(() => chat?.users.nodes ?? [], [chat]);

	const participants = useMemo(
		() =>
			users
				.filter((user) => user.id !== session?.user.id)
				.sort((a, b) => a.name.localeCompare(b.name))
				.slice(0, 5),
		[session, users]
	);

	/**
	 * @description Subtract 1 for the viewer and another for the first participant.
	 * @author David Lee
	 * @date January 17, 2022
	 */
	const countOthers = Math.max((chat?.users.totalCount ?? 0) - 2, 0);
	const firstParticipant = participants[0];

	useEffect(() => {
		const messageNodes = chat?.messages.nodes ?? [];
		const startCursor = chat?.messages.edges[0].cursor;

		setCursor((oldCursor) => oldCursor ?? startCursor ?? null);
		setMessages((oldMessages) => (oldMessages.length ? oldMessages : messageNodes));
	}, [chat?.messages]);

	const [loadMore, setLoadMore] = useState<boolean>(false);
	const [requestStack, setRequestStack] = useState<readonly true[]>([]);
	const [offset, setOffset] = useState<number>(0);

	const hasInitialMessages: boolean = !!messages.length;

	const loading = !!requestStack.length;

	useEffect(() => {
		const unsubscribe = scrollYProgress.onChange((yProgress) => {
			!loadMore && setLoadMore(yProgress <= -0.95);
		});

		return () => {
			unsubscribe();
		};
	}, [loadMore, scrollYProgress]);

	useEffect(() => {
		if (!cursor) return;
		if (!hasInitialMessages) return;
		if (loading || !loadMore) return;

		setLoadMore(false);
		setRequestStack((oldStack) => [...oldStack, true]);

		const newOffset = offset + CHAT_MESSAGE_BATCH_SIZE;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		urqlClient
			.query<GetChatQuery, GetChatQueryVariables>(GetChatDocument, {
				messageLimit: CHAT_MESSAGE_BATCH_SIZE,
				messageOffset: newOffset,
				where: {
					id: chatId
				}
			})
			.toPromise()
			.then((result) => {
				const newMessages = result.data?.chat?.messages.nodes ?? [];

				flushSync(() => {
					setMessages((oldMessages) => [...oldMessages, ...newMessages]);
				});

				setOffset(newOffset);
				setRequestStack((oldStack) => oldStack.slice(1));
			});
	}, [chatId, cursor, hasInitialMessages, offset, urqlClient, loadMore, loading]);

	const fetchingHistorical: boolean = fetching || loadMore || loading;

	const [{ fetching: sendingMessage }, sendMessage] = useSendChatMessageMutation();

	const {
		control,
		formState: { errors, isSubmitted, isValid },
		handleSubmit,
		reset,
		watch
	} = useForm<{
		message: Type<typeof ChatMessageContent>;
	}>({
		defaultValues: {
			message: [{ type: "paragraph", children: [{ text: "" }] }]
		},
		resolver: computedTypesResolver(
			Schema({
				message: ChatMessageContent.error("Message malformed")
			})
		)
	});

	const formMessage = watch("message");

	const isMessageValid = useMemo((): boolean => {
		const validator = ChatMessageContent.destruct();

		const [, validated] = validator(formMessage);

		return !!validated;
	}, [formMessage]);

	useEffect(() => {
		if (!isSubmitted) return;
		if (isValid) return;

		if (errors.message) {
			toast.error("Message is malformed");
		}

		reset({ message: [{ type: "paragraph", children: [{ text: "" }] }] }, { keepValues: true });
	}, [errors, isSubmitted, isValid, reset]);

	const [messageIdsQ, setMessageIdsQ] = useState<readonly string[]>([]);

	useEffect(() => {
		if (!chat) return;

		const channelName = `chat:${chat.id}`;
		const channel = pusher.subscribe(channelName);

		channel.bind("chat-message-event", (eventData: { sender: string; message: string }) => {
			setMessageIdsQ((oldMessageIdsQ) => [...oldMessageIdsQ, eventData.message]);
		});

		return () => {
			pusher.unsubscribe(channelName);
		};
	}, [chat, pusher]);

	/**
	 * !HACK
	 * @description Batch requests by 0.2s for incoming chat messages.
	 * @author David Lee
	 * @date January 22, 2022
	 */
	useInterval(() => {
		if (!chat) return;
		if (!messageIdsQ.length) return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		urqlClient
			.query<GetChatMessagesQuery, GetChatMessagesQueryVariables>(GetChatMessagesDocument, {
				where: {
					chatId: chat.id,
					id: { in: messageIdsQ }
				}
			})
			.toPromise()
			.then((result) => {
				const newMessages = result.data?.chatMessages ?? [];

				setMessages((oldMessages) => [...newMessages, ...oldMessages]);
			});
	}, ms("0.2s"));

	const [{ fetching: leavingChat }, leaveChat] = useLeaveChatMutation();

	return (
		<Root className={className} style={style}>
			<Participants>
				{fetching ? (
					<>
						<ParticipantAvatars>
							{Array.from({ length: 3 }, (_, i) => (
								<Skeleton key={i} tw="h-10 w-10 rounded-full" />
							))}
						</ParticipantAvatars>
						<Skeleton tw="h-6 w-24 ml-4" />
					</>
				) : firstParticipant ? (
					<>
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
						<Title tw="ml-4">
							<ParticipantName>{firstParticipant.name}</ParticipantName>
							{!!countOthers && (
								<Others>+{countOthers.toLocaleString()} others</Others>
							)}
						</Title>
						<RemoveButton
							disabled={leavingChat}
							onClick={async () => {
								if (!chat) return;

								const confirmed = confirm(
									"Are you sure you want to leave this chat?"
								);

								if (!confirmed) return;

								const didSucceed = await leaveChat({ chatId: chat.id })
									.then((result) => !!result.data?.leaveChat)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Error while attempting to leave the chat");

									return;
								}

								await router.push("/messaging/[[...slug]]", "/messaging");
							}}
							size="small"
							type="button"
							variant="alert"
							tw="ml-4"
						>
							<span>Leave</span>
							<CancelIcon height={24} width={24} tw="ml-2" />
						</RemoveButton>
					</>
				) : (
					<NobodyHere tw="ml-3">There&apos;s nobody here...</NobodyHere>
				)}
			</Participants>
			<Messages ref={messagesRef}>
				{messages.map((message) => (
					<ChatRoomMessage key={message.id} chatMessage={message} />
				))}
				{fetchingHistorical && <LoadingChatRoomMessage />}
			</Messages>
			<Form
				disabled={sendingMessage}
				onSubmit={handleSubmit(async (formData) => {
					if (!chat) return;

					const newMessage = await sendMessage({
						data: { content: formData.message },
						where: { id: chat.id }
					})
						.then((result) => result.data?.sendChatMessage.record ?? null)
						.catch(() => null);

					if (!newMessage) {
						toast.error("Message could not be sent");

						return;
					}

					reset({
						message: [{ type: "paragraph", children: [{ text: "" }] }]
					});
				})}
			>
				<Controller
					control={control}
					name="message"
					render={({ field }) => (
						<Message
							onChange={(newMessage) => {
								field.onChange(newMessage);
							}}
							value={field.value}
						>
							<DocumentEditor.Editable
								name={field.name}
								placeholder="White a message"
								aria-label="new message"
							/>
							<DocumentEditor.Toolbar>
								<DocumentEditor.Toolbar.CodeBlock />
								<DocumentEditor.Toolbar.Bold />
								<DocumentEditor.Toolbar.Italic />
								<DocumentEditor.Toolbar.Underline />
								<DocumentEditor.Toolbar.BulletedList />
								<DocumentEditor.Toolbar.NumbedList />
								<DocumentEditor.Toolbar.BlockQuote />
								<DocumentEditor.Toolbar.Code />
								<DocumentEditor.Toolbar.Link />
								<SendButtonContainer>
									<FormButton
										disabled={!chat || !isMessageValid}
										size="small"
										type="submit"
										tw="flex-grow"
									>
										<span>Send</span>
										{sendingMessage && <Spinner tw="ml-2" />}
									</FormButton>
								</SendButtonContainer>
							</DocumentEditor.Toolbar>
						</Message>
					)}
				/>
			</Form>
		</Root>
	);
};