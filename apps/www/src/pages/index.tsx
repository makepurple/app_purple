import { oneLine } from "common-tags";
import { NextPage } from "next";
import React from "react";
import tw, { styled, theme } from "twin.macro";
import { HomePageHero } from "../organisms";
import { pageProps, PageProps } from "../page-props";

const Root = tw.div`
	flex
	flex-col
	items-center
	w-full
	text-center
`;

const HeroContainer = tw.div`
	relative
	flex
	flex-col
	items-center
	justify-center
	w-full
	min-h-screen
	py-24
`;

const GradientBackground = styled.div`
	${tw`
		absolute
		inset-0
		opacity-[14%]
	`}
	background: ${oneLine`
		linear-gradient(
			-80deg,
			${theme`colors.pink.600`},
			${theme`colors.violet.600`},
			${theme`colors.blue.500`})
	`};
`;

const GridBackground = tw.div`
	absolute
	inset-0
	background-image[linear-gradient(#6366f1 1.3px, transparent 1.3px), linear-gradient(to right, #6366f1 1.3px, #f8fafc 1.3px)]
	bg-[#f8fafc]
	opacity-10
	background-size[1.5rem 1.5rem]
`;

const RadialBackground = tw.div`
	absolute
	inset-0
	background-image[radial-gradient(circle, #f8fafc 35%, #6366f100 75%)]
`;

const Hero = tw(HomePageHero)`
	z-[1]
`;

export const getStaticProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	return (
		<Root>
			<HeroContainer>
				<GradientBackground />
				<GridBackground />
				<RadialBackground />
				<Hero />
			</HeroContainer>
		</Root>
	);
};

(Page as any).padding = false;

export default Page;
