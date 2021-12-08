import { Paper } from "@/client/atoms";
import { UserPageLayout } from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[userName]/experiences";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";

const Experiences = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h2`
	text-xl
	font-bold
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	return (
		<UserPageLayout selectedTab="experiences" userName={userName}>
			<Experiences>
				<Title>Experiences</Title>
			</Experiences>
		</UserPageLayout>
	);
};

export default Page;
