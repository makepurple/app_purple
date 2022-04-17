import { oneLine } from "common-tags";
import { NextPage } from "next";
import React from "react";
import tw, { styled, theme } from "twin.macro";
import { HomePageHero } from "../organisms";

const Root = tw.div`
	flex
	flex-col
	items-center
	w-full
	-mt-16
	text-center
`;

const GradientBackground = styled.div`
	${tw`
		absolute
		inset-0
		max-w-full
		w-screen
		min-h-screen
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
	max-w-full
	w-screen
	min-h-screen
	background-image[linear-gradient(#6366f1 1.3px, transparent 1.3px), linear-gradient(to right, #6366f1 1.3px, #f8fafc 1.3px)]
	bg-[#f8fafc]
	opacity-10
	background-size[1.5rem 1.5rem]
`;

const HeroContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	w-full
	min-h-screen
`;

const Hero = tw(HomePageHero)`

`;

export const Page: NextPage = () => {
	return (
		<Root>
			<GradientBackground />
			<GridBackground />
			<HeroContainer>
				<Hero />
			</HeroContainer>
		</Root>
	);
};

export default Page;
