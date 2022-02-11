import { MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-stretch
	gap-4
	w-full
	mb-6
	lg:w-96
	lg:ml-4
	xl:gap-6
	xl:ml-6
`;

const Posts = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
	gap-4
	xl:gap-6
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<SideBar>
				<div />
			</SideBar>
			<Posts>
				<div />
			</Posts>
		</Root>
	);
};

export default Page;
