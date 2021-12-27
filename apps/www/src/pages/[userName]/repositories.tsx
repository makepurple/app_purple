import { Button, Divider, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { Fragment, useState } from "react";
import tw, { styled } from "twin.macro";
import { useGetRepositoriesQuery } from "../../graphql";
import { LoadingRepositoryCard, RepositoryCard, UserPageLayout } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/repositories";
import { PencilIcon, PlusIcon, RepoIcon } from "../../svgs";

const CreateRepositoryForm = dynamic(() => import("../../organisms/CreateRepositoryForm"), {
	ssr: false
});

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

const EditButton = tw(Button)`
	flex-shrink-0
	h-12
	w-12
	p-0
`;

const AddButton = tw(Button)`
	flex-shrink-0
	h-12
	w-12
	p-0
`;

const AddRemoveIcon = styled(PlusIcon)<{ $canClose: boolean }>`
	${tw`
		transition
		duration-150
		ease-in
	`}

	${({ $canClose }) => $canClose && tw`rotate-45`}
`;

const Repositories = tw.div`
	flex
	flex-col
	items-stretch
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetRepositoriesQuery, {
		field: "repositories",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			where: {
				user: {
					name: {
						equals: userName
					}
				}
			}
		}
	});

	const [mode, setMode] = useState<"create" | "read" | "update">("read");

	const repositories = data?.repositories.nodes ?? [];

	return (
		<UserPageLayout selectedTab="repositories" userName={userName}>
			<Content>
				<Title>
					<span tw="flex-grow">
						{mode === "create"
							? "Add Repository"
							: mode === "update"
							? "Edit Repositories"
							: "Repositories"}
					</span>
					<EditButton
						onClick={() => {
							setMode((oldMode) => (oldMode !== "read" ? "read" : "update"));
						}}
						size="small"
						type="button"
						variant="secondary"
						style={mode !== "read" ? { display: "none" } : {}}
						tw="mr-4"
					>
						<PencilIcon height={24} width={24} />
					</EditButton>
					<AddButton
						onClick={() => {
							setMode((oldMode) => (oldMode !== "read" ? "read" : "create"));
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						<AddRemoveIcon height={24} width={24} $canClose={mode !== "read"} />
					</AddButton>
				</Title>
				{mode === "create" ? (
					<CreateRepositoryForm
						onClose={() => {
							setMode("read");
						}}
					/>
				) : (
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
									<RepositoryCard
										ref={getLoadMoreRef(i)}
										editing={mode === "update"}
										repository={repository}
									/>
								</Fragment>
							))
						)}
					</Repositories>
				)}
			</Content>
		</UserPageLayout>
	);
};

export default Page;
