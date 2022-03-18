import { Anchor, Button, Divider, NonIdealState, Paper } from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Fragment } from "react";
import tw from "twin.macro";
import { useGetUserOverviewQuery } from "../../graphql";
import {
	CodeExampleMiniCard,
	PostCard,
	UserGitHubContributionHeatmap,
	UserOverviewExperienceCard,
	UserOverviewRepositoryCard,
	UserPageLayout,
	UserTrophy
} from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]";
import { CodeIcon, HexagonIcon, NoteIcon, RepoIcon } from "../../svgs";

const Contents = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const Trophies = tw(Paper)`
	grid
	grid-template-columns[repeat(auto-fit, minmax(6rem, 1fr))]
	auto-rows-auto
	gap-2
	p-3
`;

const TrophyContainer = tw.a`
	flex
	items-stretch
	cursor-pointer
	[& > *]:flex-grow
`;

const ContributionSection = tw(Paper)`
	hidden
	flex-col
	items-stretch
	xl:flex
`;

const ContributionTitle = tw.div`
	flex
	justify-start
	items-center
	h-8
	px-3
	border-b
	border-solid
	border-gray-300
	text-base
	leading-none
	font-semibold
	[& > *]:text-black
`;

const ContributionContent = tw.div`
	p-2
`;

const Section = tw.div`
	flex
	flex-col
	items-stretch
`;

const SectionTitle = tw.span`
	flex
	flex-row
	items-center
	justify-between
`;

const SectionTitleText = tw(Anchor)`
	text-black
	text-xl
	leading-none
	font-bold
`;

const SectionSeeAllButton = tw(Button)`
	w-40
	whitespace-nowrap
`;

const CodeExamples = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(20rem, 1fr))]
	auto-rows-fr
	gap-4
`;

const BottomContent = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(20rem, 1fr))]
	gap-4
`;

const Experiences = tw(Paper)`
	flex
	flex-col
	items-stretch
`;

const Repositories = tw(Paper)`
	flex
	flex-col
	items-stretch
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data }] = useGetUserOverviewQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const user = data?.user;

	if (!user) return null;

	const trophies = user.trophies;
	const contributionCalendar = user.github.contributionCalendar;
	const post = user.posts.nodes[0] ?? null;
	const codeExamples = user.codeExamples.nodes ?? [];
	const experiences = user.experiences.nodes ?? [];
	const repositories = user.repositories.nodes ?? [];

	const githubContributions = contributionCalendar.totalContributions.toLocaleString();

	return (
		<UserPageLayout selectedTab="overview" userName={userName}>
			<Contents>
				<Trophies>
					<TrophyContainer
						href={user.githubUrl}
						target="_blank"
						rel="noreferrer noopener"
					>
						<UserTrophy type="yearly-commits" value={trophies.totalYearlyCommits} />
					</TrophyContainer>
					<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
						<TrophyContainer>
							<UserTrophy type="yearly-posts" value={trophies.totalYearlyPosts} />
						</TrophyContainer>
					</NextLink>
					<NextLink href="/[userName]/followers" as={`/${userName}/followers`} passHref>
						<TrophyContainer>
							<UserTrophy type="followers" value={trophies.totalFollowers} />
						</TrophyContainer>
					</NextLink>
					<NextLink href="/[userName]/activity" as={`/${userName}/activity`} passHref>
						<TrophyContainer>
							<UserTrophy type="upvotes" value={trophies.totalUpvotes} />
						</TrophyContainer>
					</NextLink>
					<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
						<TrophyContainer>
							<UserTrophy type="post-views" value={trophies.totalPostViews} />
						</TrophyContainer>
					</NextLink>
					<NextLink
						href="/[userName]/experiences"
						as={`/${userName}/experiences`}
						passHref
					>
						<TrophyContainer>
							<UserTrophy type="skills" value={trophies.totalSkills} />
						</TrophyContainer>
					</NextLink>
				</Trophies>
				<ContributionSection>
					<ContributionTitle>
						<Anchor href={user.githubUrl} target="_blank" rel="noreferrer noopener">
							{githubContributions} contributions in the last year
						</Anchor>
					</ContributionTitle>
					<ContributionContent>
						<UserGitHubContributionHeatmap
							contributionCalendar={contributionCalendar}
						/>
					</ContributionContent>
				</ContributionSection>
				<Section>
					<SectionTitle tw="mb-2">
						<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
							<SectionTitleText>Latest Post</SectionTitleText>
						</NextLink>
						{user.posts.totalCount > 1 && (
							<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
								<SectionSeeAllButton as="a" size="small">
									See {FormatUtils.toGitHubFixed(user.posts.totalCount - 1)} more
								</SectionSeeAllButton>
							</NextLink>
						)}
					</SectionTitle>
					{!post ? (
						<NonIdealState
							title="There's nothing here"
							subTitle={`${user.name} hasn't published anything yet`}
						>
							<NoteIcon height={96} width={96} />
						</NonIdealState>
					) : (
						<PostCard post={post} />
					)}
				</Section>
				<Section>
					<SectionTitle tw="mb-2">
						<NextLink href="/[userName]/snippets" as={`/${userName}/snippets`} passHref>
							<SectionTitleText>Snippets</SectionTitleText>
						</NextLink>
						{user.codeExamples.totalCount > 2 && (
							<NextLink
								href="/[userName]/snippets"
								as={`/${userName}/snippets`}
								passHref
							>
								<SectionSeeAllButton as="a" size="small">
									See{" "}
									{FormatUtils.toGitHubFixed(user.codeExamples.totalCount - 2)}{" "}
									more
								</SectionSeeAllButton>
							</NextLink>
						)}
					</SectionTitle>
					{!codeExamples.length ? (
						<NonIdealState
							title="There's nothing here"
							subTitle={`${user.name} hasn't published anything yet`}
						>
							<CodeIcon height={96} width={96} />
						</NonIdealState>
					) : (
						<CodeExamples>
							{codeExamples.map((codeExample) => (
								<CodeExampleMiniCard
									key={codeExample.id}
									codeExample={codeExample}
								/>
							))}
						</CodeExamples>
					)}
				</Section>
				<BottomContent>
					<Section>
						<SectionTitle tw="mb-2">
							<NextLink
								href="/[userName]/experiences"
								as={`/${userName}/experiences`}
								passHref
							>
								<SectionTitleText>Experiences</SectionTitleText>
							</NextLink>
							{user.experiences.totalCount > 3 && (
								<NextLink
									href="/[userName]/experiences"
									as={`/${userName}/experiences`}
									passHref
								>
									<SectionSeeAllButton as="a" size="small">
										See{" "}
										{FormatUtils.toGitHubFixed(user.experiences.totalCount - 3)}{" "}
										more
									</SectionSeeAllButton>
								</NextLink>
							)}
						</SectionTitle>
						{!experiences.length ? (
							<NonIdealState
								title="There's nothing here"
								subTitle={`${user.name} hasn't added any experiences yet`}
							>
								<HexagonIcon height={96} width={96} />
							</NonIdealState>
						) : (
							<Experiences>
								{experiences.map((experience, i) => (
									<Fragment key={experience.id}>
										{!!i && <Divider />}
										<UserOverviewExperienceCard experience={experience} />
									</Fragment>
								))}
							</Experiences>
						)}
					</Section>
					<Section>
						<SectionTitle tw="mb-2">
							<NextLink
								href="/[userName]/repositories"
								as={`/${userName}/repositories`}
								passHref
							>
								<SectionTitleText>Repositories</SectionTitleText>
							</NextLink>
							{user.repositories.totalCount > 2 && (
								<NextLink
									href="/[userName]/repositories"
									as={`/${userName}/repositories`}
									passHref
								>
									<SectionSeeAllButton as="a" size="small">
										See{" "}
										{FormatUtils.toGitHubFixed(
											user.repositories.totalCount - 2
										)}{" "}
										more
									</SectionSeeAllButton>
								</NextLink>
							)}
						</SectionTitle>
						{!repositories.length ? (
							<NonIdealState
								title="There's nothing here"
								subTitle={`${user.name} hasn't added any repositories yet`}
							>
								<RepoIcon height={96} width={96} />
							</NonIdealState>
						) : (
							<Repositories>
								{repositories.map((repository, i) => (
									<Fragment key={repository.id}>
										{!!i && <Divider />}
										<UserOverviewRepositoryCard repository={repository} />
									</Fragment>
								))}
							</Repositories>
						)}
					</Section>
				</BottomContent>
			</Contents>
		</UserPageLayout>
	);
};

export default Page;
