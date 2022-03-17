import { Button, NonIdealState, Paper } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { useState } from "react";
import tw, { styled } from "twin.macro";
import { GetRepositoriesDocument } from "../../graphql";
import { LoadingRepositoryCard, RepositoryCard, UserPageLayout } from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/repositories";
import { PlusIcon, RepoIcon } from "../../svgs";

const CreateRepositoryForm = dynamic(() => import("../../organisms/CreateRepositoryForm"), {
	ssr: false
});

const BATCH_SIZE = 20;

const Content = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

const ActionContainer = tw(Paper)`
	p-2
`;

const Title = tw.h2`
	flex
	items-center
	text-xl
	font-bold
	leading-none
`;

const AddButton = tw(Button)`
	flex-shrink-0
	flex
	items-center
	gap-1
`;

const AddRemoveIcon = styled(PlusIcon)<{ $canClose: boolean }>`
	${tw`
		transition
		duration-150
		ease-in
	`}

	${({ $canClose }) => $canClose && tw`rotate-45`}
`;

const FormContainer = tw(Paper)`
	p-4
`;

const Repositories = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const userName = router?.query.userName as string;

	const isMyPage = session?.user.name === userName;

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetRepositoriesDocument,
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

	const [adding, setAdding] = useState<boolean>(false);

	const repositories = data?.repositories.nodes ?? [];

	return (
		<UserPageLayout selectedTab="repositories" userName={userName}>
			<Content>
				<ActionContainer>
					<Title>
						<span tw="flex-grow" />
						{isMyPage && (
							<AddButton
								onClick={() => {
									setAdding((oldAdding) => !oldAdding);
								}}
								type="button"
								variant={adding ? "secondary" : "primary"}
							>
								<span>{adding ? "Close" : "Add Repository"}</span>
								<AddRemoveIcon height={24} width={24} $canClose={adding} />
							</AddButton>
						)}
					</Title>
				</ActionContainer>
				{adding ? (
					<FormContainer>
						<CreateRepositoryForm
							onClose={() => {
								setAdding(false);
							}}
						/>
					</FormContainer>
				) : (
					<Repositories>
						{!repositories.length
							? !fetching && (
									<NonIdealState
										title="There's nothing here"
										subTitle="We couldn't find any repositories"
										tw="shadow-none"
									>
										<RepoIcon height={96} width={96} />
									</NonIdealState>
							  )
							: repositories.map((repository, i) => (
									<RepositoryCard
										key={repository.id}
										ref={getRef(i)}
										repository={repository}
									/>
							  ))}
						{fetching &&
							Array.from({ length: 3 }, (_, i) => <LoadingRepositoryCard key={i} />)}
					</Repositories>
				)}
			</Content>
		</UserPageLayout>
	);
};

export default Page;
