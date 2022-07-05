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

const searches: Record<string, readonly RepositorySearchResultGitHubRepositoryFragment[]> = {};

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
