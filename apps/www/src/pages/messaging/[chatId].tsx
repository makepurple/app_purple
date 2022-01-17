import { MainContainer, Paper } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import { ChatList } from "../../organisms";

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
	p-6
`;

const Title = tw.h1`
	flex
	text-xl
	font-bold
	leading-none
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<SideBar tw="mb-6 lg:ml-4 xl:ml-6">
				<SideBarTopContainer>
					<Title>Messaging</Title>
				</SideBarTopContainer>
				<Chats tw="mt-6" />
			</SideBar>
			<Content />
		</Root>
	);
};

export default Page;
