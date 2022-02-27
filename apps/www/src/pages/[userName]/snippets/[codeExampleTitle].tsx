import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { useGetCodeExampleQuery } from "../../../graphql";
import { UserPageLayout } from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/snippets/[codeExampleTitle]";

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const authorName = router?.query.userName as string;
	const urlSlug = router?.query.codeExampleTitle as string;

	const [{ data }] = useGetCodeExampleQuery({
		requestPolicy: "cache-first",
		variables: { authorName, urlSlug }
	});

	const codeExample = data?.codeExample;

	/**
	 * TODO
	 * @description Return 404 error page eventually
	 * @author David Lee
	 * @date February 27, 2022
	 */
	if (!codeExample) return null;

	return (
		<UserPageLayout selectedTab="snippets" userName={authorName}>
			<div>Snippet page works~!</div>
		</UserPageLayout>
	);
};

export default Page;
