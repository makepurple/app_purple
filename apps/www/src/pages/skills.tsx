import {
	Brand,
	Form,
	FormButton,
	FormGroup,
	FormLabel,
	Input,
	MainContainer,
	NonIdealState,
	Paper,
	Spinner
} from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { oneLineCommaListsAnd } from "common-tags";
import { NextPage } from "next";
import { queryTypes, useQueryStates } from "next-usequerystate";
import React from "react";
import { useForm } from "react-hook-form";
import tw from "twin.macro";
import { GetSkillsDocument, SortOrder } from "../graphql";
import { LoadingSkillCard, Seo, SkillCard } from "../organisms";
import { PageProps, pageProps } from "../page-props/skills";
import { BookIcon, SearchIcon } from "../svgs";

const BATCH_SIZE = 10;

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw(Paper)`
	flex-shrink-0
	flex
	flex-col
	items-stretch
	w-full
	p-6
	lg:w-96
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
	gap-6
`;

const IntroContainer = tw(Paper)`
	p-6
`;

const Title = tw.h1`
	flex
	text-xl
	font-bold
	leading-none
`;

const Description = tw.p`
	text-base
	leading-none
	text-gray-500
`;

const Skills = tw.div`
	flex
	flex-col
	items-stretch
	gap-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const [query, setQuery] = useQueryStates(
		{
			owner: queryTypes.string.withDefault(""),
			name: queryTypes.string.withDefault("")
		},
		{ history: "push" }
	);

	const [{ data, fetching }, { getRef }] = useRelayCursor({
		query: GetSkillsDocument,
		field: "skills",
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: BATCH_SIZE,
			orderBy: [
				{ users: { _count: SortOrder.Desc } },
				{ desiringUsers: { _count: SortOrder.Desc } },
				{ owner: SortOrder.Desc },
				{ name: SortOrder.Desc }
			],
			name: query.name,
			owner: query.owner
		}
	});

	const exactMatch = data?.skill;
	const skills = data?.skills.nodes ?? [];

	const hasSkills = !!exactMatch || !!skills.length;

	const { handleSubmit, register } = useForm<{ owner: string; name: string }>({
		defaultValues: {
			name: query.name,
			owner: query.owner
		}
	});

	return (
		<Root>
			<Seo
				title="Popular Skills | MakePurple"
				description={oneLineCommaListsAnd`
					The most popular skills known by developers, including:
					${skills.map((skill) => skill.name)}.
				`}
			/>
			<SideBar
				as={Form}
				onSubmit={handleSubmit(async (formData) => {
					await setQuery(
						{
							name: formData.name || null,
							owner: formData.owner || null
						},
						{ shallow: true }
					);
				})}
				role="search"
				tw="mb-6 lg:ml-4 xl:ml-6"
			>
				<Title as="div" tw="mb-6">
					Filter Skills
				</Title>
				<FormGroup>
					<FormLabel>Repository owner</FormLabel>
					<Input
						{...register("owner")}
						placeholder="Repository owner"
						spellCheck={false}
					/>
				</FormGroup>
				<FormGroup tw="mt-4">
					<FormLabel>Repository name</FormLabel>
					<Input {...register("name")} placeholder="Repository name" spellCheck={false} />
				</FormGroup>
				<FormButton disabled={fetching} type="submit" tw="mt-8">
					{fetching ? (
						<Spinner tw="mr-1" />
					) : (
						<SearchIcon height={24} width={24} tw="mr-1" />
					)}
					<span>Search</span>
				</FormButton>
			</SideBar>
			<Content>
				<IntroContainer>
					<Title>Skills</Title>
					{hasSkills && (
						<Description tw="mt-4">
							Popular skills by developers on <Brand tw="text-base" />.
						</Description>
					)}
				</IntroContainer>
				<Skills>
					{!hasSkills ? (
						!fetching && (
							<NonIdealState
								title="There's nothing here"
								subTitle="We couldn't find any repositories"
								tw="shadow-none"
							>
								<BookIcon height={96} width={96} />
							</NonIdealState>
						)
					) : (
						<>
							{!!exactMatch && <SkillCard skill={exactMatch} />}
							{skills.map((skill, i) => (
								<SkillCard key={skill.id} ref={getRef(i)} skill={skill} />
							))}
						</>
					)}
					{fetching && Array.from({ length: 3 }, (_, i) => <LoadingSkillCard key={i} />)}
				</Skills>
			</Content>
		</Root>
	);
};

export default Page;
