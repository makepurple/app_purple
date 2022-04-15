import { Anchor, Button, GitHubIcon, MainContainer } from "@makepurple/components";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	py-6
	text-center
`;

export const Page: NextPage = () => {
	return <div>Home page works~!</div>;
};

export default Page;
