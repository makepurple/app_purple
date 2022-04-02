import { MainContainer, PageContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(PageContainer)`
	min-h-screen
`;

const Content = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	py-6
	text-center
`;

const Header = tw.h1`
	uppercase
	text-center
	text-sm
	font-semibold
	text-gray-700
	text-opacity-50
	tracking-wider
	sm:text-base
`;

const Greeting = tw.div`
	text-5xl
	font-semibold
	text-gray-700
`;

const Description = tw.p`
	max-w-lg
	text-center
	text-lg
	font-medium
	text-gray-700
	text-opacity-60
	whitespace-pre-line
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<Content>
				<Header>Uh oh...</Header>
				<Greeting tw="mt-3">Rate Limited!</Greeting>
				<Description tw="mt-6">
					Your account has been flagged for exceeding our rate-limit. Please try again in
					several minutes.
				</Description>
			</Content>
		</Root>
	);
};

(Page as any).banPage = true;

export default Page;
