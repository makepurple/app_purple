import { NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useGetUserCodeExamplesQuery } from "../../graphql";
import { CodeExampleCard, UserPageLayout } from "../../organisms";
import { CodeIcon } from "../../svgs";

const BATCH_SIZE = 20;

const Content = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(16rem, 1fr))]
	auto-rows-auto
	gap-3
`;

export const Page: NextPage = () => {
	const router = useRouter();

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

	return (
		<UserPageLayout selectedTab="snippets" userName={userName}>
			<Content>
				{!codeExamples.length
					? !fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle="We couldn't find any snippets"
							>
								<CodeIcon height={96} width={96} />
							</NonIdealState>
					  )
					: codeExamples.map((codeExample, i) => (
							<CodeExampleCard
								key={codeExample.id}
								ref={getRef(i)}
								codeExample={codeExample}
							/>
					  ))}
			</Content>
		</UserPageLayout>
	);
};

export default Page;
