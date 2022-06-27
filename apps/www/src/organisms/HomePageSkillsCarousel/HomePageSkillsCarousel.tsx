import { InfiniteAutoplayCarousel } from "@makepurple/components";
import { ArrayUtils } from "@makepurple/utils";
import ms from "ms";
import React, { CSSProperties, memo, useMemo } from "react";
import tw from "twin.macro";
import { HomePageSkillGitHubRepositoryFragment, useGetHomePageSkillsQuery } from "../../graphql";
import { HomePageSkill } from "../HomePageSkill";

const Root = tw.div`
	flex
	flex-col
	gap-16
`;

const Skill = tw(HomePageSkill)`
	mx-8
`;

export interface HomePageSkillsCarouselProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageSkillsCarousel = memo<HomePageSkillsCarouselProps>(({ className, style }) => {
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

	const first = useMemo(
		() => repositories.slice(0, Math.floor(repositories.length / 2)),
		[repositories]
	);

	const second = useMemo(
		() => repositories.slice(Math.floor(repositories.length / 2)),
		[repositories]
	);

	return (
		<Root className={className} style={style}>
			<InfiniteAutoplayCarousel speed={ms("120s")}>
				{first.map((repository) => (
					<Skill key={repository.id} repository={repository} />
				))}
			</InfiniteAutoplayCarousel>
			<InfiniteAutoplayCarousel speed={ms("90s")}>
				{second.map((repository) => (
					<Skill key={repository.id} repository={repository} />
				))}
			</InfiniteAutoplayCarousel>
		</Root>
	);
});

HomePageSkillsCarousel.displayName = "HomePageSkillsCarousel";
