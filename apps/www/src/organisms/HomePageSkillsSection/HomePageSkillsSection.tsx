import { PageContainer } from "@makepurple/components";
import { oneLine } from "common-tags";
import React, { CSSProperties, FC } from "react";
import tw, { styled, theme } from "twin.macro";
import { HomePageSkillsCarousel } from "../HomePageSkillsCarousel";

const Root = tw.div`
	flex
	flex-col
	items-center
	pt-24
	pb-28
	w-screen
	max-w-full
`;

const Title = styled(PageContainer)`
	${tw`
		text-3xl
		leading-normal
		font-bold
		md:text-6xl
		md:leading-normal
	`}
	background: ${oneLine`
		linear-gradient(
			-80deg,
			${theme`colors.pink.600`},
			${theme`colors.violet.600`},
			${theme`colors.blue.500`})
	`};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
`;

const Info = tw(PageContainer)`
	flex
	flex-col
	items-center
	max-width[32rem]
	text-lg
	md:text-xl
	font-medium
`;

const OpenSource = tw.span`
	whitespace-nowrap
`;

const Skills = tw(HomePageSkillsCarousel)`
	w-full
	max-width[2560px]
`;

export interface HomePageSkillsSectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageSkillsSection: FC<HomePageSkillsSectionProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Title as="h2">Search by Repository</Title>
			<Info as="h3" tw="mt-2">
				<div>Skills are defined as GitHub Repositories.</div>
				<div>
					Find experts by searching within millions of{" "}
					<OpenSource>open-sourced</OpenSource> skills.
				</div>
			</Info>
			<Skills tw="mt-12" />
		</Root>
	);
};
