import React, { CSSProperties, FC, useEffect, useState } from "react";
import tw from "twin.macro";
import { ChatRoomMessageChatMessageFragment, useGetChatQuery } from "../../graphql";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface ChatRoomProps {
	className?: string;
	style?: CSSProperties;
}

export const ChatRoom: FC<ChatRoomProps> = ({ className, style }) => {
	const [cursor, setCursor] = useState<string | null>(null);

	const [{ data, fetching }, getChat] = useGetChatQuery({
		requestPolicy: "network-only"
	});

	const [messages, setMessages] = useState<readonly ChatRoomMessageChatMessageFragment[]>([]);

	const chat = data?.chat;
	const startCursor = chat?.messages.edges[0].cursor;

	useEffect(() => {
		setCursor((oldCursor) => oldCursor ?? startCursor ?? null);
	}, [startCursor]);

	return (
		<Root className={className} style={style}>
			<div />
		</Root>
	);
};
