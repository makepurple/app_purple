import { Button, PageContainer } from "@makepurple/components";
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
	justify-start
	w-full
	min-h-screen
	border-b
	border-solid
	border-gray-300/80
	2xl:min-height[120vh]
	2xl:clip-path[url(#home-hero-clip-path)]
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
	w-full
	h-screen
	flex
	flex-col
	items-center
	justify-center
	py-24
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

const Info = tw(PageContainer)`
	inline-block
	max-width[26rem]
	text-lg
	font-semibold
	text-gray-500
	text-center
	md:text-2xl
`;

const PoweredBy = tw.span`
	whitespace-nowrap
`;

const Buttons = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
	max-width[20rem]
	w-full
	px-4
	md:max-width[24rem]
`;

const Mask = tw.svg`
	fixed
	pointer-events-none
`;

export interface HomePageHeroProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageHero: FC<HomePageHeroProps> = ({ className, style }) => {
	return (
		<>
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
					<Info as="h2" tw="mt-5 md:mt-10">
						Developer profiles <PoweredBy>powered-by</PoweredBy> GitHub discoverability
					</Info>
					<Buttons tw="mt-5 md:mt-10">
						<NextLink href="/signup" passHref>
							<Button as="a" size="large" type="button" variant="primary">
								<span>Get Started</span>
							</Button>
						</NextLink>
						<NextLink href="/explore" passHref>
							<Button as="a" size="large" type="button" variant="alert">
								<span>Explore</span>
							</Button>
						</NextLink>
					</Buttons>
				</Contents>
			</Root>
			<Mask
				width="1512"
				height="1016"
				viewBox="0 0 1512 1016"
				fill="none"
				xmlns="http://www.w3.org/2000/svg"
			>
				<defs>
					<clipPath
						id="home-hero-clip-path"
						clipPathUnits="objectBoundingBox"
						transform="scale(0.00066137566 0.00098425196)"
					>
						<path d="M457.9 845.429C704.763 967.647 1260.98 1000.5 1527 1016L1527 0.00012207L-3.32488e-05 -1.14243e-05L2.71885e-05 705C62.2891 692.364 199.5 717.5 457.9 845.429Z" />
					</clipPath>
				</defs>
			</Mask>
		</>
	);
};
