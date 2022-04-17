import { Button } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { TypistLogo } from "../TypistLogo";

const Root = tw.div`
	flex
	flex-col
	items-center
`;

const TagLine = tw.h1`
	flex
	flex-col
	items-center
	leading-none
	font-bold
	font-size[3.375rem]
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
		</Root>
	);
};
