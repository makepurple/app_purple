import { InfiniteAutoplayCarousel, PageContainer } from "@makepurple/components";
import { ArrayUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import ms from "ms";
import React, { CSSProperties, FC, useMemo } from "react";
import tw, { styled, theme } from "twin.macro";
import { HomePageSkillGitHubRepositoryFragment, useGetHomePageSkillsQuery } from "../../graphql";
import { HomePageSkill } from "../HomePageSkill";

const Root = tw.div`
	flex
	flex-col
	items-center
	w-screen
	max-w-full
	overflow-hidden
	pt-24
	pb-28
	xl:pt-12
`;

const HeadingContainer = tw.div`
	flex
	flex-row
	items-end
	justify-center
	w-full
`;

const Heading = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-center
	max-w-full
	xl:self-start
	xl:ml-36
	xl:items-start
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
	font-medium
	text-center
	xl:text-left
	xl:items-start
	md:text-xl
`;

const OpenSource = tw.span`
	whitespace-nowrap
`;

const Skills = tw.div`
	flex
	flex-col
	gap-8
	w-full
	max-width[2560px]
	xl:gap-16
`;

const Skill = tw(HomePageSkill)`
	mx-4
	xl:mx-8
`;

const TopCarousel = tw(InfiniteAutoplayCarousel)`
	hidden
	xl:block
`;

export interface HomePageSkillsSectionProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageSkillsSection: FC<HomePageSkillsSectionProps> = ({ className, style }) => {
	const [{ data }] = useGetHomePageSkillsQuery({
		requestPolicy: "cache-first"
	});

	const github = data?.github;

	const repositories = useMemo(() => {
		const items = Object.values(github ?? {}).filter(
			(item) => item !== "GitHub"
		) as readonly HomePageSkillGitHubRepositoryFragment[];

		return ArrayUtils.dropFalsey(items);
	}, [github]);

	const [first, second, third] = useMemo(
		() => ArrayUtils.partitionByFraction(repositories, 1 / 3),
		[repositories]
	);

	return (
		<Root className={className} style={style}>
			<HeadingContainer>
				<Heading>
					<Title as="h2">Search by Repository</Title>
					<Info as="h3" tw="mt-2">
						<div>Skills are defined as GitHub Repositories.</div>
						<div>
							Find experts by searching within millions of{" "}
							<OpenSource>open-sourced</OpenSource> skills.
						</div>
					</Info>
				</Heading>
				<TopCarousel direction="right" speed={ms("85s")}>
					{third.map((repository) => (
						<Skill key={repository.id} repository={repository} />
					))}
				</TopCarousel>
			</HeadingContainer>
			<Skills tw="mt-8 xl:mt-16">
				<InfiniteAutoplayCarousel direction="left" speed={ms("125s")}>
					{first.map((repository) => (
						<Skill key={repository.id} repository={repository} />
					))}
				</InfiniteAutoplayCarousel>
				<InfiniteAutoplayCarousel direction="right" speed={ms("95s")}>
					{second.map((repository) => (
						<Skill key={repository.id} repository={repository} />
					))}
				</InfiniteAutoplayCarousel>
			</Skills>
		</Root>
	);
};
