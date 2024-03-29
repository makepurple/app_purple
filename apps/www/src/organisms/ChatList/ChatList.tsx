import { Divider, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import React, { CSSProperties, FC, Fragment } from "react";
import tw from "twin.macro";
import { GetChatsDocument } from "../../graphql";
import { ChatIcon } from "../../svgs";
import { ChatCard } from "../ChatCard";
import { LoadingChatCard } from "../LoadingChatCard";

const BATCH_SIZE = 10;

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface ChatListProps {
	className?: string;
	query?: string;
	selectedChatId?: string;
	style?: CSSProperties;
}

export const ChatList: FC<ChatListProps> = ({ className, query, selectedChatId, style }) => {
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetChatsDocument,
		field: "viewer.chats",
		requestPolicy: "cache-first",
		variables: {
			first: BATCH_SIZE,
			where: {
				user: {
					name: {
						contains: query
					}
				}
			}
		}
	});

	const viewer = data?.viewer;
	const chats = viewer?.chats.nodes ?? [];

	if (!viewer) return null;

	return (
		<Root className={className} style={style}>
			{!chats.length
				? !fetching && (
						<NonIdealState
							title="You have no messages"
							subTitle="Connect with users to be able to chat with them"
							tw="border-none shadow-none"
						>
							<ChatIcon height={96} width={96} />
						</NonIdealState>
				  )
				: chats.map((chat, i) => (
						<Fragment key={chat.id}>
							{!!i && <Divider />}
							<ChatCard
								ref={getRef(i)}
								chat={chat}
								selected={selectedChatId === chat.id}
							/>
						</Fragment>
				  ))}
			{fetching &&
				Array.from({ length: 3 }, (_, i) => (
					<Fragment key={i}>
						{(!!i || !!chats.length) && <Divider />}
						<LoadingChatCard />
					</Fragment>
				))}
		</Root>
	);
};
