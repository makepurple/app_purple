import { Avatar, Button, Logo, NonIdealState } from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { ArrayUtils } from "@makepurple/utils";
import { oneLineCommaListsAnd } from "common-tags";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw from "twin.macro";
import { GetSkillCodeExamplesDocument } from "../../../../graphql";
import { useIndexSkill } from "../../../../hooks";
import {
	CodeExampleMiniCard,
	LoadingCodeExampleCard,
	Seo,
	SkillPageLayout
} from "../../../../organisms";
import {
	PageProps,
	pageProps
} from "../../../../page-props/s/[skillOwner]/[skillName]/tab=snippets";

const BATCH_SIZE = 20;
const SEO_MIN_SIZE = 5;
const SEO_MIN_SKILL_SIZE = 5;

const Content = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(20rem, 1fr))]
	auto-rows-fr
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

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetSkillCodeExamplesDocument,
		field: "skill.codeExamples",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			name: skillName,
			owner: skillOwner
		}
	});

	const codeExamples = useMemo(
		() => data?.skill?.codeExamples.nodes ?? [],
		[data?.skill?.codeExamples.nodes]
	);

	const canIndex = useIndexSkill(skillOwner, skillName);

	const shouldIndex = canIndex || codeExamples.length >= SEO_MIN_SIZE;

	const metaDescription = useMemo(() => {
		const seoCodeExamples = codeExamples.slice(0, SEO_MIN_SIZE);

		const codeExampleTitles = seoCodeExamples.map((codeExample) => codeExample.title);

		const skillNames = seoCodeExamples.reduce(
			(acc, codeExample) => [...acc, ...codeExample.skills.nodes.map((skill) => skill.name)],
			[] as readonly string[]
		);

		const skills = ArrayUtils.distinct(skillNames).slice(0, SEO_MIN_SKILL_SIZE);

		return oneLineCommaListsAnd`
			${skillName}'s code snippets, including ${codeExampleTitles} for ${skills}
		`;
	}, [codeExamples, skillName]);

	return (
		<SkillPageLayout selectedTab="snippets" skillName={skillName} skillOwner={skillOwner}>
			<Seo
				canonical={`/s/${skillOwner}/${skillName}?tab=snippets`}
				title={`${skillName}'s Snippets`}
				description={metaDescription}
				robots={{
					follow: true,
					index: shouldIndex
				}}
			/>
			{!codeExamples.length ? (
				!fetching ? (
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
				) : (
					<Content>
						{fetching &&
							Array.from({ length: 3 }, (_, i) => <LoadingCodeExampleCard key={i} />)}
					</Content>
				)
			) : (
				<Content>
					{codeExamples.map((codeExample, i) => (
						<CodeExampleMiniCard
							key={codeExample.id}
							ref={getRef(i)}
							codeExample={codeExample}
						/>
					))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingCodeExampleCard key={i} />)}
				</Content>
			)}
		</SkillPageLayout>
	);
};

export default Page;
