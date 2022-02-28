import { Avatar, CodeBlock, GitHubAvatarImage, Paper, Tags } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { NextPage } from "next";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { Language } from "prism-react-renderer";
import React, { useMemo } from "react";
import tw from "twin.macro";
import { CodeLanguage, useGetCodeExampleQuery } from "../../../graphql";
import { UserPageLayout } from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/snippets/[codeExampleTitle]";
import { BookIcon } from "../../../svgs";

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-4
	gap-4
	sm:p-6
	sm:gap-6
`;

const TopContainer = tw.div`
	flex
	flex-col
	items-center
	justify-center
	gap-2
`;

const TitleContainer = tw.div`
	flex
	flex-row
	items-center
	justify-center
	gap-3
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-12
	w-12
	rounded-md
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-full
	w-full
	bg-white
	z-index[1]
`;

const Title = tw.h1`
	flex
	justify-center
	text-4xl
	text-center
	font-bold
	truncate
`;

const Skills = tw(Tags)`
	max-width[24rem]
`;

const Description = tw.p`
	text-base
	text-gray-500
`;

const ByLine = tw.div`
	flex
	items-center
	gap-3
`;

const PublishedAt = tw.div`
	text-gray-500
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const authorName = router?.query.userName as string;
	const urlSlug = router?.query.codeExampleTitle as string;

	const [{ data }] = useGetCodeExampleQuery({
		requestPolicy: "cache-first",
		variables: { authorName, urlSlug }
	});

	const codeExample = data?.codeExample;

	const language = useMemo((): Maybe<Language> => {
		switch (codeExample?.language) {
			case CodeLanguage.Go:
				return "go";
			case CodeLanguage.GraphQl:
				return "graphql";
			case CodeLanguage.Html:
				return "handlebars";
			case CodeLanguage.JavaScript:
				return "jsx";
			case CodeLanguage.Python:
				return "python";
			case CodeLanguage.Scss:
				return "scss";
			case CodeLanguage.Sql:
				return "sql";
			case CodeLanguage.TypeScript:
				return "tsx";
			case CodeLanguage.Yaml:
				return "yaml";
			default:
				return null;
		}
	}, [codeExample?.language]);

	/**
	 * TODO
	 * @description Return 404 error page eventually
	 * @author David Lee
	 * @date February 27, 2022
	 */
	if (!codeExample) return null;

	const primarySkill = codeExample.primarySkill;
	const skills = codeExample.skills.nodes ?? [];

	return (
		<UserPageLayout selectedTab="snippets" userName={authorName}>
			<Content>
				<TopContainer>
					<TitleContainer>
						<NextLink
							href="/s/[skillOwner]/[skillName]"
							as={`/s/${primarySkill.owner}/${primarySkill.name}`}
							passHref
						>
							<StyledAvatar
								border={2}
								aria-label={`${primarySkill.owner}/${primarySkill.name}`}
							>
								{primarySkill.github.owner.__typename === "GitHubOrganization" ? (
									<GitHubAvatarImage
										alt={primarySkill.name}
										src={primarySkill.github.owner.avatarUrl}
										height={48}
										width={48}
									/>
								) : (
									<AvatarIconContainer>
										<BookIcon height={24} width={24} />
									</AvatarIconContainer>
								)}
							</StyledAvatar>
						</NextLink>
						<Title>{codeExample.title}</Title>
					</TitleContainer>
					<Skills type="positive">
						{skills.map((skill) => (
							<Tags.Tag key={skill.id} id={skill.id}>
								{skill.name}
							</Tags.Tag>
						))}
					</Skills>
				</TopContainer>
				{!!codeExample.description && <Description>{codeExample.description}</Description>}
				<ByLine>
					{codeExample.author.image && (
						<Avatar border={2}>
							<GitHubAvatarImage
								alt={codeExample.author.name}
								src={codeExample.author.image}
								height={48}
								width={48}
							/>
						</Avatar>
					)}
					<div>
						<div>{codeExample.author.name}</div>
						<PublishedAt>
							{dayjs(codeExample.updatedAt).format("MMM DD, YYYY")}
						</PublishedAt>
					</div>
				</ByLine>
				<CodeBlock
					code={codeExample.content}
					language={language}
					title={codeExample.language}
				/>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
