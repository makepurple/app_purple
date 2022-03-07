import { MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	py-6
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<div>Account Page Works~!</div>
		</Root>
	);
};

export default Page;
