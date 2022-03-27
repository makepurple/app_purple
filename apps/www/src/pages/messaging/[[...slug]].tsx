import { Button, FadedEdge, MainContainer, Paper } from "@makepurple/components";
import { useElementScroll } from "framer-motion";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import tw from "twin.macro";
import { useOpenMessagesMutation } from "../../graphql";
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
	min-w-0
	min-height[32rem]
	max-height[48rem]
	overflow-hidden
	lg:w-96
`;

const SideBarTopContainer = tw.div`
	flex-shrink-0
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
	flex
	flex-col
	min-h-0
`;

const Chats = tw.div`
	overflow-y-auto
`;

const Content = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
	min-w-0
	min-height[32rem]
	max-height[48rem]
`;

const ContentTitleContainer = tw.div`
	flex-shrink-0
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
	useSession({ required: true });

	const router = useRouter();

	const chatRef = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useElementScroll(chatRef);

	const slug = (router?.query.slug as string[] | undefined) ?? [];
	const chatId: string | undefined = slug[0];

	const [topFade, setTopFade] = useState<boolean>(false);
	const [bottomFade, setBottomFade] = useState<boolean>(false);

	const [, updateCounts] = useOpenMessagesMutation();

	useEffect(() => {
		return () => {
			// eslint-disable-next-line @typescript-eslint/no-floating-promises
			updateCounts();
		};
	}, [updateCounts]);

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
						{!!chatId && (
							<NextLink href="/messaging/[[...slug]]" as="/messaging" passHref>
								<AddButton
									as="a"
									size="small"
									type="button"
									variant="secondary"
									tw="flex-shrink-0"
									aria-label="new chat"
								>
									<PlusIcon height={24} width={24} />
								</AddButton>
							</NextLink>
						)}
					</Title>
				</SideBarTopContainer>
				<ChatsContainer>
					{topFade && <FadedEdge side="top" />}
					{bottomFade && <FadedEdge side="bottom" />}
					<Chats ref={chatRef}>
						<ChatList selectedChatId={chatId} />
					</Chats>
				</ChatsContainer>
			</SideBar>
			<Content>
				{chatId ? (
					<ChatRoom chatId={chatId} tw="flex-grow min-h-0" />
				) : (
					<>
						<ContentTitleContainer>
							<Title as="div">New Message</Title>
						</ContentTitleContainer>
						<CreateChatForm tw="flex-grow min-h-0" />
					</>
				)}
			</Content>
		</Root>
	);
};

export default Page;
