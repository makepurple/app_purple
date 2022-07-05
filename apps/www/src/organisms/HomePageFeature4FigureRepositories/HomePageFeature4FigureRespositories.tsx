import { Button, Paper, Popover, Typist } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo, useState } from "react";
import { usePopper } from "react-popper";
import tw, { styled } from "twin.macro";
import { RepositorySearchResultGitHubRepositoryFragment } from "../../graphql";
import { SearchIcon } from "../../svgs";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { RepositorySearchResult } from "../RepositorySearchResult";

const Root = tw.div`
	flex
	flex-row
	items-stretch
	h-11
	rounded-lg
	border
	border-gray-300
	pointer-events-none
`;

const SearchInputContainer = styled.div<{ $focused?: boolean }>`
	${tw`
		flex-basis[0]
		flex-grow
		flex
		flex-row
		items-center
		w-auto
		min-w-0
		px-2.5
		rounded-lg
		text-base
		bg-violet-50
		transition-all
		duration-150
		ease-in
	`}

	${({ $focused }) =>
		$focused &&
		tw`
			ring
			ring-blue-300
			ring-opacity-80
			flex-grow[8]
			z-index[1]
		`}
`;

const OwnerSearch = tw(SearchInputContainer)`
	rounded-r-none
	border-r
	border-r-gray-300/80
`;

const SkillSearch = tw(SearchInputContainer)`
	rounded-none
	border-l
	border-l-gray-300/80
`;

const Placeholder = tw.span`
	text-gray-400
	truncate
`;

const SearchButton = tw(Button)`
	flex-shrink-0
	h-11
	w-11
	ml-auto
	p-0
	border-0
	border-l
	border-opacity-60
	rounded-l-none
	bg-white
	bg-opacity-80
	-translate-y-0.5
`;

const Results = tw(Paper)`
	max-h-96
	overflow-y-auto
`;

const searches: Record<string, readonly RepositorySearchResultGitHubRepositoryFragment[]> = {
	react: [
		{
			description:
				"A declarative, efficient, and flexible JavaScript library for building user interfaces.",
			forkCount: 39360,
			id: "MDEwOlJlcG9zaXRvcnkxMDI3MDI1MA==",
			name: "react",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
				login: "facebook",
				name: "Meta"
			},
			primaryLanguage: {
				color: "#f1e05a",
				id: "MDg6TGFuZ3VhZ2UxNDA=",
				name: "JavaScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 190847,
			__typename: "GitHubRepository"
		},
		{
			description: "A framework for building native applications using React",
			forkCount: 22226,
			id: "MDEwOlJlcG9zaXRvcnkyOTAyODc3NQ==",
			name: "react-native",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
				login: "facebook",
				name: "Meta"
			},
			primaryLanguage: {
				color: "#f1e05a",
				id: "MDg6TGFuZ3VhZ2UxNDA=",
				name: "JavaScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 103621,
			__typename: "GitHubRepository"
		},
		{
			description: "Set up a modern web app by running one command.",
			forkCount: 24844,
			id: "MDEwOlJlcG9zaXRvcnk2MzUzNzI0OQ==",
			name: "create-react-app",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/69631?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjY5NjMx",
				login: "facebook",
				name: "Meta"
			},
			primaryLanguage: {
				color: "#f1e05a",
				id: "MDg6TGFuZ3VhZ2UxNDA=",
				name: "JavaScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 95798,
			__typename: "GitHubRepository"
		},
		{
			description: "A collection of awesome things regarding React ecosystem",
			forkCount: 6007,
			id: "MDEwOlJlcG9zaXRvcnkyMjY3MDg1Nw==",
			name: "awesome-react",
			owner: {
				__typename: "GitHubUser",
				avatarUrl:
					"https://avatars.githubusercontent.com/u/182219?u=dd4dcbd3e20f4418b4390cc76415ff4d5ef6f5ab&v=4",
				id: "MDQ6VXNlcjE4MjIxOQ==",
				login: "enaqx",
				name: "Nick Raienko"
			},
			primaryLanguage: null,
			stargazerCount: 48989,
			__typename: "GitHubRepository"
		},
		{
			description: "Declarative routing for React",
			forkCount: 9236,
			id: "MDEwOlJlcG9zaXRvcnkxOTg3MjQ1Ng==",
			name: "react-router",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/64235328?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjY0MjM1MzI4",
				login: "remix-run",
				name: "Remix"
			},
			primaryLanguage: {
				color: "#3178c6",
				id: "MDg6TGFuZ3VhZ2UyODc=",
				name: "TypeScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 47438,
			__typename: "GitHubRepository"
		}
	],
	next: [
		{
			description: "The React Framework",
			forkCount: 19115,
			id: "MDEwOlJlcG9zaXRvcnk3MDEwNzc4Ng==",
			name: "next.js",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/14985020?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjE0OTg1MDIw",
				login: "vercel",
				name: "Vercel"
			},
			primaryLanguage: {
				color: "#f1e05a",
				id: "MDg6TGFuZ3VhZ2UxNDA=",
				name: "JavaScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 89104,
			__typename: "GitHubRepository"
		},
		{
			description: "Elegant theme for Hexo. ",
			forkCount: 3780,
			id: "MDEwOlJlcG9zaXRvcnkyNzM4MjE2Mw==",
			name: "hexo-theme-next",
			owner: {
				__typename: "GitHubUser",
				avatarUrl:
					"https://avatars.githubusercontent.com/u/32269?u=bc87ba0bdb74e01394e9ff7d289e7b5c79a78aeb&v=4",
				id: "MDQ6VXNlcjMyMjY5",
				login: "iissnan",
				name: "Vi"
			},
			primaryLanguage: {
				color: "#563d7c",
				id: "MDg6TGFuZ3VhZ2UzMDg=",
				name: "CSS",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 15770,
			__typename: "GitHubRepository"
		},
		{
			description: "Authentication for Next.js",
			forkCount: 1221,
			id: "MDEwOlJlcG9zaXRvcnkxMTkxNjI0MTk=",
			name: "next-auth",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/67470890?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjY3NDcwODkw",
				login: "nextauthjs",
				name: "NextAuth.js"
			},
			primaryLanguage: {
				color: "#3178c6",
				id: "MDg6TGFuZ3VhZ2UyODc=",
				name: "TypeScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 10699,
			__typename: "GitHubRepository"
		},
		{
			description: "Elegant and powerful theme for Hexo.",
			forkCount: 2055,
			id: "MDEwOlJlcG9zaXRvcnkxMTU4NzU2MDY=",
			name: "hexo-theme-next",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/32585093?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjMyNTg1MDkz",
				login: "theme-next",
				name: "NexT"
			},
			primaryLanguage: {
				color: "#ff6347",
				id: "MDg6TGFuZ3VhZ2U2MTQ=",
				name: "Stylus",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 7649,
			__typename: "GitHubRepository"
		},
		{
			description:
				":notebook_with_decorative_cover: :books: A curated list of awesome resources : books, videos, articles about using Next.js (A minimalistic framework for universal server-rendered React applications) ",
			forkCount: 707,
			id: "MDEwOlJlcG9zaXRvcnk3NTI5MTcwNQ==",
			name: "awesome-nextjs",
			owner: {
				__typename: "GitHubUser",
				avatarUrl:
					"https://avatars.githubusercontent.com/u/2946769?u=92f03012e7777ace3997039d1a424208f0037d94&v=4",
				id: "MDQ6VXNlcjI5NDY3Njk=",
				login: "unicodeveloper",
				name: "Prosper Otemuyiwa"
			},
			primaryLanguage: null,
			stargazerCount: 7492,
			__typename: "GitHubRepository"
		}
	],
	graphql: [
		{
			description:
				"Blazing fast, instant realtime GraphQL APIs on your DB with fine grained access control, also trigger webhooks on database events.",
			forkCount: 2340,
			id: "MDEwOlJlcG9zaXRvcnkxMzc3MjQ0ODA=",
			name: "graphql-engine",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/13966722?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjEzOTY2NzIy",
				login: "hasura",
				name: "Hasura"
			},
			primaryLanguage: {
				color: "#5e5086",
				id: "MDg6TGFuZ3VhZ2UxNjc=",
				name: "Haskell",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 27330,
			__typename: "GitHubRepository"
		},
		{
			description: "A reference implementation of GraphQL for JavaScript",
			forkCount: 2008,
			id: "MDEwOlJlcG9zaXRvcnkzODMwNzQyOA==",
			name: "graphql-js",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/12972006?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjEyOTcyMDA2",
				login: "graphql",
				name: "GraphQL"
			},
			primaryLanguage: {
				color: "#3178c6",
				id: "MDg6TGFuZ3VhZ2UyODc=",
				name: "TypeScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 18871,
			__typename: "GitHubRepository"
		},
		{
			description:
				"GraphQL is a query language and execution engine tied to any backend service.",
			forkCount: 1141,
			id: "MDEwOlJlcG9zaXRvcnkzODM0MjIyMQ==",
			name: "graphql-spec",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/12972006?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjEyOTcyMDA2",
				login: "graphql",
				name: "GraphQL"
			},
			primaryLanguage: {
				color: "#89e051",
				id: "MDg6TGFuZ3VhZ2UxMzk=",
				name: "Shell",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 13799,
			__typename: "GitHubRepository"
		},
		{
			description:
				"GraphiQL & the GraphQL LSP Reference Ecosystem for building browser & IDE tools.",
			forkCount: 1502,
			id: "MDEwOlJlcG9zaXRvcnk0MDUxODAyNQ==",
			name: "graphiql",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/12972006?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjEyOTcyMDA2",
				login: "graphql",
				name: "GraphQL"
			},
			primaryLanguage: {
				color: "#3178c6",
				id: "MDg6TGFuZ3VhZ2UyODc=",
				name: "TypeScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 13756,
			__typename: "GitHubRepository"
		},
		{
			description: "Awesome list of GraphQL",
			forkCount: 1185,
			id: "MDEwOlJlcG9zaXRvcnkzODk1ODczOA==",
			name: "awesome-graphql",
			owner: {
				__typename: "GitHubUser",
				avatarUrl:
					"https://avatars.githubusercontent.com/u/3382565?u=536713f6c30e718b10509f649e3ffa0585f911fe&v=4",
				id: "MDQ6VXNlcjMzODI1NjU=",
				login: "chentsulin",
				name: "C. T. Lin"
			},
			primaryLanguage: null,
			stargazerCount: 13402,
			__typename: "GitHubRepository"
		}
	],
	svelte: [
		{
			description: "Cybernetically enhanced web apps",
			forkCount: 2929,
			id: "MDEwOlJlcG9zaXRvcnk3NDI5MzMyMQ==",
			name: "svelte",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/23617963?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjIzNjE3OTYz",
				login: "sveltejs",
				name: "Svelte"
			},
			primaryLanguage: {
				color: "#3178c6",
				id: "MDg6TGFuZ3VhZ2UyODc=",
				name: "TypeScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 60288,
			__typename: "GitHubRepository"
		},
		{
			description:
				"Build performant, native and cross-platform desktop applications with native Svelte + powerful CSS-like styling.🚀",
			forkCount: 44,
			id: "MDEwOlJlcG9zaXRvcnkzMzQyMjk5NDM=",
			name: "svelte-nodegui",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/51644128?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjUxNjQ0MTI4",
				login: "nodegui",
				name: "NodeGui"
			},
			primaryLanguage: {
				color: "#3178c6",
				id: "MDg6TGFuZ3VhZ2UyODc=",
				name: "TypeScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 2700,
			__typename: "GitHubRepository"
		},
		{
			description: "Svelte Material UI Components",
			forkCount: 232,
			id: "MDEwOlJlcG9zaXRvcnkxOTcyODY3MDQ=",
			name: "svelte-material-ui",
			owner: {
				__typename: "GitHubUser",
				avatarUrl:
					"https://avatars.githubusercontent.com/u/195918?u=1a7922617b283b07f7b8aa9878053da45b6f11ee&v=4",
				id: "MDQ6VXNlcjE5NTkxOA==",
				login: "hperrin",
				name: "Hunter Perrin"
			},
			primaryLanguage: {
				color: "#ff3e00",
				id: "MDg6TGFuZ3VhZ2U3NDA=",
				name: "Svelte",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 2493,
			__typename: "GitHubRepository"
		},
		{
			description: "A declarative Svelte routing library with SSR support",
			forkCount: 148,
			id: "MDEwOlJlcG9zaXRvcnkxMTIzODA1MjI=",
			name: "svelte-routing",
			owner: {
				__typename: "GitHubUser",
				avatarUrl:
					"https://avatars.githubusercontent.com/u/11573167?u=100e78954bf9de5320d5feafc54b7e35fb489843&v=4",
				id: "MDQ6VXNlcjExNTczMTY3",
				login: "EmilTholin",
				name: "Emil Tholin"
			},
			primaryLanguage: {
				color: "#f1e05a",
				id: "MDg6TGFuZ3VhZ2UxNDA=",
				name: "JavaScript",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 1671,
			__typename: "GitHubRepository"
		},
		{
			description: "Svelte implementation of the Carbon Design System",
			forkCount: 189,
			id: "MDEwOlJlcG9zaXRvcnkyMjgyMjk2MzE=",
			name: "carbon-components-svelte",
			owner: {
				__typename: "GitHubOrganization",
				avatarUrl: "https://avatars.githubusercontent.com/u/25179978?v=4",
				id: "MDEyOk9yZ2FuaXphdGlvbjI1MTc5OTc4",
				login: "carbon-design-system",
				name: "Carbon Design System"
			},
			primaryLanguage: {
				color: "#ff3e00",
				id: "MDg6TGFuZ3VhZ2U3NDA=",
				name: "Svelte",
				__typename: "GitHubLanguage"
			},
			stargazerCount: 1628,
			__typename: "GitHubRepository"
		}
	]
};

export interface HomePageFeature4FigureRepositoriesProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature4FigureRepositories: FC<HomePageFeature4FigureRepositoriesProps> = ({
	className,
	style
}) => {
	const [focused, setFocused] = useState<boolean>(false);
	const [usePlaceholder, setUsePlaceholder] = useState<boolean>(false);
	const [searchTerm, setSearchTerm] = useState<string>("");

	const offsetModifier = useMemo(() => Popover.Modifiers.Offset({}), []);

	const [refElem, refRef] = useState<HTMLDivElement | null>(null);
	const [popperElem, popperRef] = useState<HTMLDivElement | null>(null);
	const popper = usePopper(refElem, popperElem, {
		modifiers: [offsetModifier, Popover.Modifiers.SameWidth],
		placement: "bottom-start",
		strategy: "fixed"
	});

	const texts: readonly string[] = useMemo(() => Object.keys(searches), []);
	const results: readonly RepositorySearchResultGitHubRepositoryFragment[] = useMemo(
		() => searches[searchTerm] ?? [],
		[searchTerm]
	);

	return (
		<Root ref={refRef} className={className} style={style}>
			<OwnerSearch $focused={false}>
				<Placeholder>Organizations or users...</Placeholder>
			</OwnerSearch>
			<SkillSearch $focused={focused}>
				<Typist
					onChange={({ mode, text }) => {
						setFocused(mode !== "halted");
						setUsePlaceholder(!text);
						setSearchTerm(text);
					}}
					repeat
					sentences={texts}
				>
					<Typist.Cursor />
				</Typist>
				{usePlaceholder && <Placeholder>Repositories or skills...</Placeholder>}
			</SkillSearch>
			<SearchButton
				type="button"
				variant="secondary"
				aria-label="feature-search-button"
				aria-hidden
			>
				<SearchIcon height={24} width={24} />
			</SearchButton>
			{!!searchTerm && focused && (
				<Results ref={popperRef} {...popper.attributes.popper} style={popper.styles.popper}>
					{!results.length
						? Array.from({ length: 3 }, (_, i) => <LoadingSearchResult key={i} />)
						: results.map((repository) => (
								<RepositorySearchResult
									key={repository.id}
									repository={repository}
								/>
						  ))}
				</Results>
			)}
		</Root>
	);
};
