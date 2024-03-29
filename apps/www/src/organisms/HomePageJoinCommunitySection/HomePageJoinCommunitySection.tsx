import { Button, PageContainer, Paper } from "@makepurple/components";
import { useIntersectionObserver } from "@makepurple/hooks";
import { oneLine } from "common-tags";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { CSSProperties, FC, useRef } from "react";
import tw, { styled, theme } from "twin.macro";
import { LogoCurrentColor } from "../../svgs";

const HomePageGlobe = dynamic(() => import("../HomePageGlobe"), { ssr: false });

const Root = styled(PageContainer)`
	${tw`
		relative
		flex
		items-center
		justify-center
		min-h-0
		w-screen
		max-w-full
		overflow-hidden
		px-0
		py-0
		lg:min-h-[496px]
		lg:px-2
		lg:py-24
	`}
	background: linear-gradient(to bottom, #fff 35%, #4f46e530 65%)
`;

const Globe = tw(HomePageGlobe)`
	hidden
	absolute
	top-1/2
	-translate-y-1/2
	-translate-x-1/2
	left-1/2
	z-0
	lg:block
	lg:top-3/4
	lg:left-2/3
	sm:h-[512px]
	sm:w-[512px]
	md:h-[768px]
	md:w-[768px]
	lg:h-[1024px]
	lg:w-[1024px]
`;

const Content = styled(Paper)`
	${tw`
		flex
		flex-col
		items-center
		max-w-[unset]
		w-full
		px-2
		py-16
		rounded-none
		shadow-2xl
		text-center
		text-white
		z-[1]
		lg:rounded-lg
		lg:max-w-4xl
	`}
	background: ${oneLine`
		linear-gradient(
			-42deg,
			${theme`colors.pink.600`},
			${theme`colors.violet.600`},
			${theme`colors.blue.500`}
		)
	`};
`;

const Title = tw.h2`
	text-2xl
	font-bold
	md:text-4xl
`;

const SignUpButton = tw(Button)`
	w-full
	max-width[16rem]
	bg-white
`;

export interface HomePageJoinCommunitySectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageJoinCommunitySection: FC<HomePageJoinCommunitySectionProps> = ({
	className,
	style
}) => {
	const rootRef = useRef<HTMLDivElement>(null);
	const intersection = useIntersectionObserver(rootRef, {
		threshold: [0, 0]
	});

	const isIntersecting = intersection?.isIntersecting;

	return (
		<Root ref={rootRef} className={className} style={style}>
			{isIntersecting && <Globe />}
			<Content>
				<LogoCurrentColor height={64} width={64} />
				<Title tw="mt-4">Join the MakePurple Community</Title>
				<NextLink legacyBehavior href="/signup" passHref>
					<SignUpButton as="a" size="large" variant="secondary" tw="mt-8">
						Get Started
					</SignUpButton>
				</NextLink>
			</Content>
		</Root>
	);
};
