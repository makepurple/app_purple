import { Button, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useGetUserCodeExamplesQuery } from "../../../graphql";
import {
	CodeExampleCard,
	CodeExampleCreateCard,
	LoadingCodeExampleCard,
	UserPageLayout
} from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/snippets";
import { CodeIcon } from "../../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(20rem, 1fr))]
	auto-rows-auto
	gap-3
`;

const CreateNewButton = tw(Button)`
	w-48
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const userName = router?.query.userName as string;

	const [{ data, fetching }, getRef] = useRelayCursor(useGetUserCodeExamplesQuery, {
		field: "user.codeExamples",
		offset: 0,
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: userName
		}
	});

	const codeExamples = data?.user?.codeExamples.nodes ?? [];

	const isMyPage = session?.user.name === userName;

	return (
		<UserPageLayout selectedTab="snippets" userName={userName}>
			<Content>
				{!codeExamples.length ? (
					!fetching && (
						<NonIdealState
							title="There's nothing here"
							subTitle="We couldn't find any snippets"
						>
							{isMyPage ? (
								<NextLink
									href="/[userName]/snippets/new"
									as={`/${userName}/snippets/new`}
									passHref
								>
									<CreateNewButton as="a">Create a snippet</CreateNewButton>
								</NextLink>
							) : (
								<CodeIcon height={96} width={96} />
							)}
						</NonIdealState>
					)
				) : (
					<>
						{isMyPage && <CodeExampleCreateCard userName={userName} />}
						{codeExamples.map((codeExample, i) => (
							<CodeExampleCard
								key={codeExample.id}
								ref={getRef(i)}
								codeExample={codeExample}
							/>
						))}
					</>
				)}
				{fetching &&
					Array.from({ length: 3 }, (_, i) => <LoadingCodeExampleCard key={i} />)}
			</Content>
		</UserPageLayout>
	);
};

export default Page;
