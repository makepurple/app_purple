import {
	Brand,
	Button,
	Divider,
	FormGroup,
	FormLabel,
	Input,
	MainContainer,
	NonIdealState,
	Paper
} from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import tw from "twin.macro";
import { SortOrder, useGetSkillsQuery } from "../graphql";
import { LoadingSkillCard, SkillCard } from "../organisms";
import { PageProps, pageProps } from "../page-props/skills";
import { BookIcon, SearchIcon } from "../svgs";

const BATCH_SIZE = 20;

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

const Content = tw(Paper)`
	flex-grow
	flex
	flex-col
	items-stretch
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
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const [searchName, setSearchName] = useState<string>((router?.query.name as string) ?? "");
	const [searchOwner, setSearchOwner] = useState<string>((router?.query.owner as string) ?? "");

	const [{ data, fetching }, getLoadMoreRef] = useRelayCursor(useGetSkillsQuery, {
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
			name: searchName,
			owner: searchOwner
		}
	});

	const exactMatch = data?.skill;
	const skills = data?.skills.nodes ?? [];

	const hasSkills = !!exactMatch || !!skills.length;

	return (
		<Root>
			<SideBar tw="mb-6 lg:ml-4 xl:ml-6">
				<Title as="div" tw="mb-6">
					Filter Skills
				</Title>
				<FormGroup>
					<FormLabel>Repository owner</FormLabel>
					<Input
						onChange={(e) => {
							setSearchOwner(e.target.value);
						}}
						placeholder="Repository owner"
					/>
				</FormGroup>
				<FormGroup tw="mt-4">
					<FormLabel>Repository name</FormLabel>
					<Input
						onChange={(e) => {
							setSearchName(e.target.value);
						}}
						placeholder="Repository name"
					/>
				</FormGroup>
				<Button type="button" tw="mt-8">
					<SearchIcon height={24} width={24} tw="mr-1" />
					<span>Search</span>
				</Button>
			</SideBar>
			<Content>
				<Title>Skills</Title>
				{hasSkills && (
					<Description tw="mt-4">
						Popular skills by developers and programmers on <Brand tw="text-base" />
					</Description>
				)}
				<Skills tw="mt-6">
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
								<Fragment key={skill.id}>
									{(!!i || !!exactMatch) && <Divider tw="ml-22" />}
									<SkillCard ref={getLoadMoreRef(i)} skill={skill} />
								</Fragment>
							))}
						</>
					)}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => (
							<Fragment key={i}>
								{(!!i || !!skills.length) && <Divider tw="ml-22" />}
								<LoadingSkillCard />
							</Fragment>
						))}
				</Skills>
			</Content>
		</Root>
	);
};

export default Page;
