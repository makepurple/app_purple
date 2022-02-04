import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import { UserPageLayout } from "../../organisms";

export const Page: NextPage = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	return (
		<UserPageLayout selectedTab="activity" userName={userName}>
			Activity page works~!
		</UserPageLayout>
	);
};

export default Page;
