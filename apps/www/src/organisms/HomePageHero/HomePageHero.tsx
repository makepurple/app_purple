import { Button } from "@makepurple/components";
import { oneLine } from "common-tags";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw, { styled, theme } from "twin.macro";
import { TypistLogo } from "../TypistLogo";

const Root = tw.div`
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

const Contents = tw.div`
	flex
	flex-col
	items-center
	z-[1]
`;

const TagLine = tw.h1`
	flex
	flex-col
	items-center
	leading-none
	font-bold
	font-size[3.125rem]
	md:font-size[5.75rem]
`;

const Line = tw.span`
	flex
	items-center
`;

const Info = tw.h2`
	max-width[24rem]
	text-lg
	font-semibold
	text-gray-500
	text-center
	md:text-2xl
`;

const SignUpButton = tw(Button)`
	max-width[12rem]
	w-full
`;

export interface HomePageHeroProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageHero: FC<HomePageHeroProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<GradientBackground />
			<GridBackground />
			<RadialBackground />
			<Contents>
				<TagLine>
					<Line>Discover</Line>
					<Line>Developers</Line>
					<Line>
						for <TypistLogo sentences={["next.js", "urql", "prisma"]} />
					</Line>
				</TagLine>
				<Info tw="mt-5 md:mt-10">Developer profiles powered-by GitHub discoverability</Info>
				<NextLink href="/signup" passHref>
					<SignUpButton as="a" size="large" type="button" tw="mt-5 md:mt-10">
						<span>Get Started</span>
					</SignUpButton>
				</NextLink>
			</Contents>
		</Root>
	);
};
