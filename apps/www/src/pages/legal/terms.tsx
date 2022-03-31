import { MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-start
	py-24
`;

const Header = tw.h1`
	self-center
	text-4xl
	md:text-5xl
	md:leading-tight
	font-semibold
	text-gray-700
	text-center
`;

const Content = tw.div`
	flex
	flex-col
	items-start
	gap-4
	pt-24
`;
export const Page: NextPage = () => {
	return (
		<Root size="small">
			<Header>Terms of Service of MakePurple.com</Header>
			<Content>
				<p>Last Updated: March 31, 2022</p>
			</Content>
		</Root>
	);
};

export default Page;
