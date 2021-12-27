import { Paper } from "@makepurple/components";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { UserPageLayout } from "../../organisms";

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
			<Content />
		</UserPageLayout>
	);
};

export default Page;
