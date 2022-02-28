import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { UserPageLayout } from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/snippets/new";

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	return (
		<UserPageLayout selectedTab="snippets" userName={userName}>
			<div>New Snippet Page Works~!</div>
		</UserPageLayout>
	);
};

export default Page;
