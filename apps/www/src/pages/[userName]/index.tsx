import { Anchor, Button, Divider, NonIdealState, Paper } from "@makepurple/components";
import { useMountEffect } from "@makepurple/hooks";
import { FormatUtils } from "@makepurple/utils";
import { oneLineCommaListsAnd } from "common-tags";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useMemo } from "react";
import tw from "twin.macro";
import { useGetUserInfoSideBarQuery, useGetUserOverviewQuery } from "../../graphql";
import {
	CodeExampleMiniCard,
	PostCard,
	Seo,
	UserGitHubContributions,
	UserOverviewExperienceCard,
	UserOverviewRepositoryCard,
	UserPageLayout,
	UserTrophies
} from "../../organisms";
import { PageProps, pageProps, paths } from "../../page-props/[userName]";
import { CodeIcon, HexagonIcon, NoteIcon, RepoIcon } from "../../svgs";

const MAX_CODE_EXAMPLES = 2;
const MAX_EXPERIENCES = 3;
const MAX_REPOSITORIES = 2;
const SEO_MIN_EXPERIENCES = 1;
const SEO_MIN_CODE_EXAMPLES = 2;
const SEO_MIN_REPOSITORIES = 2;
const SEO_MIN_SKILLS = 6;

const Contents = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
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

export const getStaticProps = pageProps;
export const getStaticPaths = paths;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data }, refetch] = useGetUserOverviewQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	useMountEffect(() => {
		refetch({ requestPolicy: "network-only" });
	});

	const [{ data: skillsData }] = useGetUserInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const user = data?.user;

	const skills = useMemo(
		() => skillsData?.user?.skills.nodes ?? [],
		[skillsData?.user?.skills.nodes]
	);

	const skillNames = useMemo(
		() => skills.map((skill) => skill.name).slice(0, SEO_MIN_SKILLS),
		[skills]
	);

	const codeExamples = useMemo(
		() => user?.codeExamples.nodes.slice(0, MAX_CODE_EXAMPLES) ?? [],
		[user?.codeExamples.nodes]
	);
	const experiences = useMemo(
		() => user?.experiences.nodes.slice(0, MAX_EXPERIENCES) ?? [],
		[user?.experiences.nodes]
	);
	const repositories = useMemo(
		() => user?.repositories.nodes.slice(0, MAX_REPOSITORIES) ?? [],
		[user?.repositories.nodes]
	);

	if (!user) return null;

	const post = user.posts.nodes[0] ?? null;

	const shouldIndex =
		!!post &&
		codeExamples.length >= SEO_MIN_CODE_EXAMPLES &&
		experiences.length >= SEO_MIN_EXPERIENCES &&
		repositories.length >= SEO_MIN_REPOSITORIES &&
		skills.length >= SEO_MIN_SKILLS;

	return (
		<UserPageLayout selectedTab="overview" userName={userName}>
			<Seo
				title={userName}
				description={oneLineCommaListsAnd`
					${userName}'s developer profile, featuring posts, code-examples, experiences,
					and repositories for ${skillNames}
				`}
				robots={{
					follow: true,
					index: shouldIndex
				}}
			/>
			<Contents>
				<UserTrophies userName={userName} />
				<UserGitHubContributions userName={userName} />
				<Section>
					<SectionTitle tw="mb-2">
						<NextLink
							legacyBehavior
							href="/[userName]/posts"
							as={`/${userName}/posts`}
							passHref
						>
							<SectionTitleText>Latest Post</SectionTitleText>
						</NextLink>
						{user.posts.totalCount > 1 && (
							<NextLink
								legacyBehavior
								href="/[userName]/posts"
								as={`/${userName}/posts`}
								passHref
							>
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
						<NextLink
							legacyBehavior
							href="/[userName]/snippets"
							as={`/${userName}/snippets`}
							passHref
						>
							<SectionTitleText>Latest Snippets</SectionTitleText>
						</NextLink>
						{user.codeExamples.totalCount > 2 && (
							<NextLink
								legacyBehavior
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
								legacyBehavior
								href="/[userName]/experiences"
								as={`/${userName}/experiences`}
								passHref
							>
								<SectionTitleText>Experiences</SectionTitleText>
							</NextLink>
							{user.experiences.totalCount > 3 && (
								<NextLink
									legacyBehavior
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
								legacyBehavior
								href="/[userName]/repositories"
								as={`/${userName}/repositories`}
								passHref
							>
								<SectionTitleText>Repositories</SectionTitleText>
							</NextLink>
							{user.repositories.totalCount > 2 && (
								<NextLink
									legacyBehavior
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
