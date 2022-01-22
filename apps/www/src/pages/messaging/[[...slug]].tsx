import { Button, FadedEdge, MainContainer, Paper } from "@makepurple/components";
import { useElementScroll } from "framer-motion";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import { ChatList, ChatRoom, CreateChatForm } from "../../organisms";
import { pageProps, PageProps } from "../../page-props/messaging/[[...slug]]";
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
	flex
	items-center
	h-16
	px-6
	border-b
	border-solid
	border-gray-200
`;

const ChatsContainer = tw.div`
	relative
`;

const Chats = tw.div`
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
	flex
	items-center
	h-16
	px-6
	border-b
	border-solid
	border-gray-200
`;

const Title = tw.h1`
	flex-grow
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

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const chatRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useElementScroll(chatRef);

	const chatId: string | undefined = (router?.query.slug as readonly string[])[0];

	const [topFade, setTopFade] = useState<boolean>(false);
	const [bottomFade, setBottomFade] = useState<boolean>(false);

	useEffect(() => {
		const unsubscribe = scrollYProgress.onChange((yProgress) => {
			setTopFade(yProgress > 0.05);
			setBottomFade(yProgress < 0.95);
		});

		return () => {
			unsubscribe();
		};
	}, [scrollYProgress]);

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
				<ChatsContainer>
					{topFade && <FadedEdge side="top" />}
					{bottomFade && <FadedEdge side="bottom" />}
					<Chats ref={chatRef}>
						<ChatList />
					</Chats>
				</ChatsContainer>
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
