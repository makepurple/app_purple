import { Anchor, MainContainer, PageContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import { Seo } from "../../organisms";

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
			<Seo title="Banned" />
			<Content>
				<Header>Uh oh...</Header>
				<Greeting tw="mt-3">Account Disabled!</Greeting>
				<Description tw="mt-6">
					Your account has been flagged for abuse and was disabled as a result. If you
					feel this was done mistakenly, please contact us at{" "}
					<Anchor
						href="mailto:david@makepurple.com"
						rel="noopener nofollow"
						target="_blank"
					>
						david@makepurple.com
					</Anchor>
				</Description>
			</Content>
		</Root>
	);
};

(Page as any).banPage = true;

export default Page;
