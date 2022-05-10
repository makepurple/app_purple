import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { oneLineCommaListsAnd } from "common-tags";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw from "twin.macro";
import {
	GetSkillOwnerExperiencersDocument,
	useGetSkillOwnerInfoSideBarQuery,
	useGetSkillOwnerRepositoriesQuery
} from "../../../graphql";
import {
	LoadingUserFollowCard,
	Seo,
	SkillOwnerPageLayout,
	SkillOwnerRepositoryCard,
	UserFollowCard
} from "../../../organisms";
import { PageProps, pageProps } from "../../../page-props/s/[skillOwner]";
import { PersonIcon, RepoIcon } from "../../../svgs";

const BATCH_SIZE = 20;
const SEO_MIN_FOLLOWERS = 100;
const SEO_MIN_REPOSITORIES = 6;

const Repositories = tw.div`
	grid
	gap-3
	grid-template-columns[repeat(auto-fill, minmax(16rem, 1fr))]
	auto-rows-auto
`;

const Experiencers = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const skillOwner = router?.query.skillOwner as string;

	const [{ data: seoData }] = useGetSkillOwnerInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			owner: skillOwner
		}
	});

	const [{ data: repositoriesData }, reexecuteQuery] = useGetSkillOwnerRepositoriesQuery({
		requestPolicy: "cache-first",
		variables: { skillOwner }
	});

	const [{ data: experiencersData, fetching }, { getRef }] = useRelayCursor({
		query: GetSkillOwnerExperiencersDocument,
		field: "github.repositoryOwner.experiencers",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			skillOwner
		}
	});

	const repositories = useMemo(
		() => repositoriesData?.github.repositoryOwner?.repositories.nodes ?? [],
		[repositoriesData?.github.repositoryOwner?.repositories.nodes]
	);
	const experiencers = experiencersData?.github.repositoryOwner?.experiencers.nodes ?? [];

	const shouldIndex = useMemo(() => {
		const repositoryOwner = seoData?.github.repositoryOwner;

		if (!repositoryOwner) return false;
		if (repositories.length < SEO_MIN_REPOSITORIES) return false;

		return repositoryOwner.__typename === "GitHubOrganization"
			? true
			: repositoryOwner.followerCount >= SEO_MIN_FOLLOWERS;
	}, [repositories, seoData?.github.repositoryOwner]);

	const metaDescription = useMemo(() => {
		const repositoryNames = repositories
			.slice(0, SEO_MIN_REPOSITORIES)
			.map((repository) => repository.name);

		return oneLineCommaListsAnd`
			${skillOwner}'s developers and repositories including ${repositoryNames}
		`;
	}, [repositories, skillOwner]);

	return (
		<SkillOwnerPageLayout skillOwner={skillOwner}>
			<Seo
				title={skillOwner}
				description={metaDescription}
				robots={{
					follow: true,
					index: shouldIndex
				}}
			/>
			{!repositories.length ? (
				<NonIdealState
					title="There's nothing here"
					subTitle={`We couldn't find any repositories for ${skillOwner}`}
				>
					<RepoIcon height={96} width={96} />
				</NonIdealState>
			) : (
				<Repositories>
					{repositories.map((repository) => (
						<SkillOwnerRepositoryCard
							key={repository.id}
							onNewSkill={() => {
								reexecuteQuery({ requestPolicy: "network-only" });
							}}
							repository={repository}
							skillOwner={skillOwner}
						/>
					))}
				</Repositories>
			)}
			<Experiencers tw="mt-6">
				{!experiencers.length
					? !fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle="We couldn't find anyone with this experience"
								tw="shadow-none"
							>
								<PersonIcon height={96} width={96} />
							</NonIdealState>
					  )
					: experiencers.map((follower, i) => (
							<UserFollowCard key={follower.id} ref={getRef(i)} user={follower} />
					  ))}
				{fetching && Array.from({ length: 3 }, (_, i) => <LoadingUserFollowCard key={i} />)}
			</Experiencers>
		</SkillOwnerPageLayout>
	);
};

export default Page;
