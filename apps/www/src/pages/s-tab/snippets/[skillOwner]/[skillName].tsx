import { Avatar, Button, Logo, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React from "react";
import tw from "twin.macro";
import { useGetSkillCodeExamplesQuery } from "../../../../graphql";
import { CodeExampleCard, LoadingCodeExampleCard, SkillPageLayout } from "../../../../organisms";
import {
	PageProps,
	pageProps
} from "../../../../page-props/s/[skillOwner]/[skillName]/tab=followers";

const BATCH_SIZE = 20;

const Content = tw.div`
	grid
	grid-template-columns[repeat(auto-fit, minmax(20rem, 1fr))]
	auto-rows-auto
	gap-3
`;

const NoSnippetsContent = tw.div`
	flex
	flex-col
	items-center
	gap-4
`;

const StyledAvatar = tw(Avatar)`
	rounded-md
`;

const IconContainer = tw.div`
	flex
	w-14
	h-14
	items-center
	justify-center
	rounded-md
	bg-white
	z-index[1]
	w-12
`;

const StyledLogo = tw(Logo)`
	h-12
	w-12
`;

const CreateNewButton = tw(Button)`
	w-48
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();
	const { data: session } = useSession();

	const skillName = router?.query.skillName as string;
	const skillOwner = router?.query.skillOwner as string;

	const [{ data, fetching }, getRef] = useRelayCursor(useGetSkillCodeExamplesQuery, {
		field: "skill.codeExamples",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: skillName,
			owner: skillOwner
		}
	});

	const codeExamples = data?.skill?.codeExamples.nodes ?? [];

	return (
		<SkillPageLayout selectedTab="snippets" skillName={skillName} skillOwner={skillOwner}>
			<Content>
				{!codeExamples.length ? (
					!fetching && (
						<NonIdealState
							title="There's nothing here"
							subTitle="We couldn't find any snippets"
						>
							<NoSnippetsContent>
								<StyledAvatar border={4}>
									<IconContainer>
										<StyledLogo href={null} />
									</IconContainer>
								</StyledAvatar>
								{!!session?.user && (
									<NextLink
										href="/[userName]/snippets/new"
										as={`/${session.user.name}/snippets/new`}
										passHref
									>
										<CreateNewButton as="a">Create a snippet</CreateNewButton>
									</NextLink>
								)}
							</NoSnippetsContent>
						</NonIdealState>
					)
				) : (
					<>
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
		</SkillPageLayout>
	);
};

export default Page;