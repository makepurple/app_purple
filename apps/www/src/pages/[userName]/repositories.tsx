import { Divider, NonIdealState, Paper, RepoIcon } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment } from "react";
import tw from "twin.macro";
import { useGetRepositoriesQuery } from "../../graphql";
import { LoadingRepositoryCard, RepositoryCard, UserPageLayout } from "../../organisms";

const BATCH_SIZE = 20;

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h2`
	flex
	mb-6
	text-xl
	font-bold
`;

const Repositories = tw.div`
	flex
	flex-col
	items-stretch
`;

export const Page: NextPage = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetRepositoriesQuery, {
		field: "repositories",
		requestPolicy: "cache-first",
		variables: {
			first: BATCH_SIZE,
			where: {
				user: {
					name: {
						equals: userName
					}
				}
			},
			after: null
		}
	});

	const repositories = data?.repositories.nodes ?? [];

	return (
		<UserPageLayout selectedTab="repositories" userName={userName}>
			<Content>
				<Title>Repositories</Title>
				<Repositories>
					{fetching ? (
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{!!i && <Divider />}
								<LoadingRepositoryCard />
							</Fragment>
						))
					) : !repositories.length ? (
						<NonIdealState
							title="There's nothing here"
							subTitle="We couldn't find any repositories"
							tw="shadow-none"
						>
							<RepoIcon height={96} width={96} />
						</NonIdealState>
					) : (
						repositories.map((repository, i) => (
							<Fragment key={repository.id}>
								{!!i && <Divider />}
								<RepositoryCard ref={getLoadMoreRef(i)} repository={repository} />
							</Fragment>
						))
					)}
				</Repositories>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
