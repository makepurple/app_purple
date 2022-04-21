import { PageContainer, Paper } from "@makepurple/components";
import { oneLine } from "common-tags";
import dynamic from "next/dynamic";
import React, { CSSProperties, FC } from "react";
import tw, { styled, theme } from "twin.macro";
import { LogoCurrentColor } from "../../svgs";

const HomePageGlobe = dynamic(() => import("../HomePageGlobe"), { ssr: false });

const Root = tw(PageContainer)`
	relative
	flex
	items-center
	justify-center
	min-height[496px]
	w-screen
	max-w-full
	overflow-hidden
	py-24
	border
	border-solid
	border-red-500
`;

const Globe = tw(HomePageGlobe)`
	absolute
	top-1/2
	lg:top-3/4
	-translate-y-1/2
	-translate-x-1/2
	left-1/2
	lg:left-2/3
	sm:h-[512px]
	sm:w-[512px]
	md:h-[768px]
	md:w-[768px]
	lg:h-[1024px]
	lg:w-[1024px]
	z-0
`;

const Content = styled(Paper)`
	${tw`
		flex
		flex-col
		items-center
		max-w-4xl
		w-full
		px-2
		py-4
		shadow-2xl
		text-center
		text-white
		z-[1]
		md:py-6
		xl:py-12
	`}
	background: ${oneLine`
	linear-gradient(
		-42deg,
		${theme`colors.pink.600`},
		${theme`colors.violet.600`},
		${theme`colors.blue.500`})
	`};
`;

const Logo = tw(LogoCurrentColor)``;

const Title = tw.h2`
	text-4xl
	font-bold
`;

const Info = tw.div`

`;

export interface HomePageJoinCommunitySectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageJoinCommunitySection: FC<HomePageJoinCommunitySectionProps> = ({
	className,
	style
}) => {
	return (
		<Root className={className} style={style}>
			<Globe />
			<Content>
				<LogoCurrentColor height={64} width={64} />
				<Title tw="mt-4">Join the MakePurple Community</Title>
			</Content>
		</Root>
	);
};
