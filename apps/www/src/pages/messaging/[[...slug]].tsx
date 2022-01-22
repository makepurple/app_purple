import { Button, MainContainer, Paper } from "@makepurple/components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { ChatList, ChatRoom, CreateChatForm } from "../../organisms";
import { PlusIcon } from "../../svgs";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw(Paper)`
	flex-shrink-0
	flex
	flex-col
	items-stretch
	w-full
	overflow-hidden
	lg:w-96
`;

const SideBarTopContainer = tw.div`
	pt-6
	px-6
`;

const Chats = tw(ChatList)`
	max-height[36rem]
	overflow-y-auto
`;

const Content = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
	min-height[32rem]
`;

const ContentTitleContainer = tw.div`
	p-6
	border-b
	border-solid
	border-gray-200
`;

const Title = tw.h1`
	flex
	items-center
	text-xl
	font-bold
	leading-none
`;

const AddButton = tw(Button)`
	h-9
	w-9
	p-0
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const chatId: string | undefined = (router?.query.slug as readonly string[])[0];

	return (
		<Root>
			<SideBar tw="mb-6 lg:ml-4 xl:ml-6">
				<SideBarTopContainer>
					<Title>
						<span tw="flex-grow">Messaging</span>
						<AddButton
							onClick={async () => {
								await router.push("/messaging/[[...slug]]", `/messaging`, {
									shallow: true
								});
							}}
							size="small"
							type="button"
							variant="secondary"
							tw="flex-shrink-0"
						>
							<PlusIcon height={24} width={24} />
						</AddButton>
					</Title>
				</SideBarTopContainer>
				<Chats selectedChatId={chatId} tw="mt-6" />
			</SideBar>
			<Content>
				<ContentTitleContainer>
					<Title as="div">New Message</Title>
				</ContentTitleContainer>
				{chatId ? (
					<ChatRoom chatId={chatId} tw="flex-grow" />
				) : (
					<CreateChatForm tw="flex-grow" />
				)}
			</Content>
		</Root>
	);
};

export default Page;
