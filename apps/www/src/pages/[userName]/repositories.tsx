import { Button, Divider, NonIdealState, Paper, RepoIcon } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import tw, { styled } from "twin.macro";
import { useGetRepositoriesQuery } from "../../graphql";
import { LoadingRepositoryCard, RepositoryCard, UserPageLayout } from "../../organisms";
import { PlusIcon } from "../../svgs";

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

const AddButton = tw(Button)`
	h-12
	w-12
	p-0
`;

const Repositories = tw.div`
	flex
	flex-col
	items-stretch
`;

const AddRemoveIcon = styled(PlusIcon)<{ $canClose: boolean }>`
	${tw`
		transition
		duration-150
		ease-in
	`}

	${({ $canClose }) => $canClose && tw`rotate-45`}
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

	const [isCreate, setIsCreate] = useState<boolean>(false);

	const repositories = data?.repositories.nodes ?? [];

	return (
		<UserPageLayout selectedTab="repositories" userName={userName}>
			<Content>
				<Title>
					<span tw="flex-grow">Repositories</span>
					<AddButton
						onClick={() => {
							setIsCreate((oldIsCreate) => !oldIsCreate);
						}}
						size="small"
						type="button"
						variant="secondary"
						tw="flex-shrink-0"
					>
						<AddRemoveIcon height={24} width={24} $canClose={isCreate} />
					</AddButton>
				</Title>
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
