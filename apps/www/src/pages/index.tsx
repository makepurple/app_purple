import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import { HomePageHero, HomePageSkillsSection } from "../organisms";
import { pageProps, PageProps } from "../page-props";

const Root = tw.div`
	flex
	flex-col
	items-center
	w-full
	text-center
`;

export const getStaticProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	return (
		<Root>
			<HomePageHero />
			<HomePageSkillsSection />
		</Root>
	);
};

(Page as any).padding = false;

export default Page;
