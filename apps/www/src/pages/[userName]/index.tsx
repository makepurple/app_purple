import { Anchor, Button, Divider, Paper } from "@makepurple/components";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { Fragment, useMemo } from "react";
import tw from "twin.macro";
import { useGetUserOverviewQuery } from "../../graphql";
import {
	PostCard,
	UserOverviewExperienceCard,
	UserOverviewRepositoryCard,
	UserPageLayout,
	UserTrophy
} from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]";

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

const Section = tw.div`
	flex
	flex-col
	items-stretch
`;

const SectionTitle = tw(Anchor)`
	self-start
	text-black
	text-xl
	leading-none
	font-bold
`;

const BottomContent = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(20rem, 1fr))]
	gap-4
`;

const Experiences = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
	[& > div]:flex-grow
`;

const Repositories = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
	[& > div]:flex-grow
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

	const hasTrophies = useMemo(() => {
		if (!user) return false;

		return Object.values(user.trophies)
			.filter((value) => typeof value === "number")
			.some((value) => value > 0);
	}, [user]);

	if (!user) return null;

	const trophies = user.trophies;
	const post = user.posts.nodes[0] ?? null;
	const experiences = user.experiences.nodes ?? [];
	const repositories = user.repositories.nodes ?? [];

	return (
		<UserPageLayout selectedTab="overview" userName={userName}>
			<Contents>
				{hasTrophies && (
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
						<NextLink
							href="/[userName]/followers"
							as={`/${userName}/followers`}
							passHref
						>
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
				)}
				{!!post && (
					<Section>
						<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
							<SectionTitle>Latest Post</SectionTitle>
						</NextLink>
						<PostCard post={post} tw="mt-2" />
						{user.posts.totalCount > 1 && (
							<NextLink href="/[userName]/posts" as={`/${userName}/posts`} passHref>
								<Button as="a" size="small" tw="mt-4">
									See {(user.posts.totalCount - 1).toLocaleString()} more
								</Button>
							</NextLink>
						)}
					</Section>
				)}
				{(!!experiences.length || !!repositories.length) && (
					<BottomContent>
						{!!experiences.length && (
							<Section>
								<NextLink
									href="/[userName]/experiences"
									as={`/${userName}/experiences`}
									passHref
								>
									<SectionTitle>Experiences</SectionTitle>
								</NextLink>
								<Experiences tw="mt-2">
									{experiences.map((experience, i) => (
										<Fragment key={experience.id}>
											{!!i && <Divider />}
											<UserOverviewExperienceCard experience={experience} />
										</Fragment>
									))}
								</Experiences>
								{user.experiences.totalCount > 3 && (
									<NextLink
										href="/[userName]/experiences"
										as={`/${userName}/experiences`}
										passHref
									>
										<Button as="a" size="small" tw="mt-4">
											See {(user.experiences.totalCount - 3).toLocaleString()}{" "}
											more
										</Button>
									</NextLink>
								)}
							</Section>
						)}
						{!!repositories.length && (
							<Section>
								<NextLink
									href="/[userName]/repositories"
									as={`/${userName}/repositories`}
									passHref
								>
									<SectionTitle>Repositories</SectionTitle>
								</NextLink>
								<Repositories tw="mt-2">
									{repositories.map((repository, i) => (
										<Fragment key={repository.id}>
											{!!i && <Divider />}
											<UserOverviewRepositoryCard repository={repository} />
										</Fragment>
									))}
								</Repositories>
								{user.repositories.totalCount > 2 && (
									<NextLink
										href="/[userName]/repositories"
										as={`/${userName}/repositories`}
										passHref
									>
										<Button as="a" size="small" tw="mt-4">
											See{" "}
											{(user.repositories.totalCount - 2).toLocaleString()}{" "}
											more
										</Button>
									</NextLink>
								)}
							</Section>
						)}
					</BottomContent>
				)}
			</Contents>
		</UserPageLayout>
	);
};

export default Page;
