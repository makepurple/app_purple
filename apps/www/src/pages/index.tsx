import { oneLine } from "common-tags";
import { NextPage } from "next";
import React from "react";
import tw from "twin.macro";
import {
	HomePageFeatures,
	HomePageHero,
	HomePageJoinCommunitySection,
	HomePageProfileSection,
	HomePageSkillsSection,
	Seo
} from "../organisms";
import { pageProps, PageProps } from "../page-props";

const Root = tw.div`
	flex
	flex-col
	items-center
	w-full
	text-center
	bg-white
`;

export const getStaticProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	return (
		<Root>
			<Seo
				title="MakePurple"
				description={oneLine`
					Developer profiles powered-by GitHub discoverability for Next.js, Urql, Prisma,
					React, TailwindCSS and more!
				`}
				postfix={false}
				robots={{ follow: true, index: true }}
			/>
			<HomePageHero />
			<HomePageSkillsSection />
			<HomePageProfileSection />
			<HomePageFeatures />
			<HomePageJoinCommunitySection />
		</Root>
	);
};

(Page as any).padding = false;

export default Page;
