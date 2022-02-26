import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { UserPageLayout } from "../../organisms";

const Content = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(16rem, 1fr))]
	auto-rows-auto
	gap-3
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	return (
		<UserPageLayout selectedTab="snippets" userName={userName}>
			<Content>
				<div />
			</Content>
		</UserPageLayout>
	);
};

export default Page;
