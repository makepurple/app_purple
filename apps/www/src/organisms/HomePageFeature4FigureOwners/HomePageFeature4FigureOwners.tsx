import { Button, Paper, Popover, Typist } from "@makepurple/components";
import React, { CSSProperties, FC, useMemo, useState } from "react";
import { usePopper } from "react-popper";
import tw, { styled } from "twin.macro";
import { UserSearchResultGitHubUserFragment } from "../../graphql";
import { SearchIcon } from "../../svgs";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { UserSearchResult } from "../UserSearchResult";

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

const searches: Record<string, readonly UserSearchResultGitHubUserFragment[]> = {
	emma: [
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjc2NzE5ODM=",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/7671983?u=10c5f30603b781947103e842e2c48437359f8df1&v=4",
			bio: "Front-end Software Engineer @ Spotify\r\n",
			login: "emmabostian",
			name: "Emma Bostian"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjYwNjE4",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/60618?u=c9811ae4d75257566ca155353da8c1f41e5a0af8&v=4",
			bio: "TPM,  Open Source Program Office @ Microsoft",
			login: "emmairwin",
			name: "Emma"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjQ0MDc1MTg=",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/4407518?u=6043b697cc302b45768a0eead8171543dfec07d8&v=4",
			bio: "le code, c'est moi",
			login: "EmmaRamirez",
			name: "Emma"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjIyNzMxODg5",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/22731889?u=95001b2378632275a77ffec850658a6d4835ceb1&v=4",
			bio: 'washed up developer for Wii/iOS/PC, self-proclaimed "reverse engineer", (sand) cat enthusiast - 18 - she/her',
			login: "InvoxiPlayGames",
			name: "Emma"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjU1NTc2OA==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/555768?u=547bf30aff7083719eafc03a4342c4a6762bab39&v=4",
			bio: "Web Specialist - JavaScript technologies - Elasticsearch, GDGLille, Speaker and Trainer",
			login: "EmmanuelDemey",
			name: "Emmanuel DEMEY"
		}
	],
	steven: [
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjc1NDY=",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/7546?u=29e1ed5df4a79fe9586179b0bcee173dca34bbe3&v=4",
			bio: "Head of Technology at Den Creative an Elixirr Company",
			login: "steven",
			name: "Steven Thompson"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjIyOTg4MQ==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/229881?u=58675cc3f9993517e5f29209ccba960d79b719ad&v=4",
			bio: "🐏Software Shepherd,\r\n🛡️TypeScript enthusiast,\r\n✏️@markedjs maintainer,\r\n💚@nodejs contributor,\r\n⚛️@reactjs user,  \r\n🤵husband of @ksnydes,\r\n✝️Jesus lover",
			login: "styfle",
			name: "Steven"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjQ1MjEy",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/45212?u=0de58ad7ce27155496d7cbe07672a68a54910a9f&v=4",
			bio: "",
			login: "steventroughtonsmith",
			name: "Steven Troughton-Smith"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjgwMTQ0",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/80144?u=115ad569cf1e49f64172984ac813e16f45976ed1&v=4",
			bio: "Computer systems analyst in Kingston, Ontario, Canada.",
			login: "StevenBlack",
			name: "Steven Black"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjg1MzQ2OA==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/853468?u=f801880316b53c06b8825aa9b422322f832428c0&v=4",
			bio: '"We publish our code so that our fellow Cypherpunks may practice and play with it. Our code is free for all to use, worldwide."\r\n- A Cypherpunk\'s Manifesto',
			login: "stevenroose",
			name: "Steven Roose"
		}
	],
	thomas: [
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjE3NzUzMTY=",
			avatarUrl: "https://avatars.githubusercontent.com/u/1775316?v=4",
			bio: "Maker of tools focusing on data science and data visualisation",
			login: "thomasp85",
			name: "Thomas Lin Pedersen"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjMxNDY5MA==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/314690?u=0b1ce9a0916c9c8e0216f058c11125a5df35daa2&v=4",
			bio: "Spring Team Alumni & Open Sourcerer\r\ntutorials.de Admin AD\r\n@keycloak maintainer\r\n@jugsaar founder\r\n@webworkersaar organizer",
			login: "thomasdarimont",
			name: "Thomas Darimont"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjQxNjIwOQ==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/416209?u=38f220a2c9c658141804f881c334c594eb1642ac&v=4",
			bio: "Co-Founder of cdnjs.com\r\nCo-Founder of jsonresume.org",
			login: "thomasdavis",
			name: "Thomas Davis"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjIxMDQxMw==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/210413?u=56fbfca0accd1722c54758a289b1e0b865af3579&v=4",
			bio: "Thomas provides technical leadership on web solutions. He delivers digital (Dx) solutions using best practices, architectures, and coaching.",
			login: "ThomasBurleson",
			name: "Thomas Burleson"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjU0MDI2MzM=",
			avatarUrl: "https://avatars.githubusercontent.com/u/5402633?v=4",
			bio: "Senior Software Engineer at Quansight Labs, @scikit-learn maintainer",
			login: "thomasjpfan",
			name: "Thomas J. Fan"
		}
	],
	beth: [
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjgyOTcyMzQ=",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/8297234?u=7af7105d1d6cfcee0cc7031ca5ef3a7b6ce76ec5&v=4",
			bio: "Node.js @ Red Hat",
			login: "BethGriggs",
			name: "Bethany Nicolle Griggs"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjQ0NjIyOA==",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/446228?u=7616d6c79a453a392ee3ecd83e98963fcdffa94c&v=4",
			bio: "Co-founder of pactflow.io, Ruby lover, Pact maintainer.",
			login: "bethesque",
			name: "Beth Skurrie"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjI5Mjk3MDc2",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/29297076?u=487cf1ece2af9f8454c4b1ce245abf8797559628&v=4",
			bio: "Last year I took a year off & traveled around the world. We made it to 26 countries. My goal is to find a remote job so I can travel to the 200 other countries.",
			login: "bethhansen",
			name: "Beth"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjQ0MTIxMjI3",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/44121227?u=266c042978a20e6e4df8c8bfae2d6d3bd306e03e&v=4",
			bio: "recreating stories, enhancing experiences!",
			login: "BethanyJep",
			name: "Pikachú"
		},
		{
			__typename: "GitHubUser",
			id: "MDQ6VXNlcjUxMTU1NzE=",
			avatarUrl:
				"https://avatars.githubusercontent.com/u/5115571?u=22bf850ff84745002a8cd177d736312acf137886&v=4",
			bio: "Product Manager on .NET MAUI tooling team. Long-time community champion for .NET developers. ",
			login: "BethMassi",
			name: "Beth Massi"
		}
	]
};

export interface HomePageFeature4FigureOwnersProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature4FigureOwners: FC<HomePageFeature4FigureOwnersProps> = ({
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
	const results: readonly UserSearchResultGitHubUserFragment[] = useMemo(
		() => searches[searchTerm] ?? [],
		[searchTerm]
	);

	return (
		<Root ref={refRef} className={className} style={style}>
			<OwnerSearch $focused={focused}>
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
				{usePlaceholder && <Placeholder>Organizations or users...</Placeholder>}
			</OwnerSearch>
			<SkillSearch $focused={false}>
				<Placeholder>Repositories or skills...</Placeholder>
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
						: results.map((owner) => (
								<UserSearchResult key={owner.login} user={owner} />
						  ))}
				</Results>
			)}
		</Root>
	);
};
