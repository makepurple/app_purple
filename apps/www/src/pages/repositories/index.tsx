import { MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<div>Repositories page works~!</div>
		</Root>
	);
};

export default Page;
