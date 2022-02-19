import { Input, ListItem, Paper, Popover } from "@makepurple/components";
import { useComboBoxState } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, useMemo, useState } from "react";
import { usePopper } from "react-popper";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	SuggestSkillOwnersDocument,
	SuggestSkillOwnersGitHubRepositoryOwnerFragment,
	SuggestSkillOwnersQuery,
	SuggestSkillOwnersQueryVariables,
	SuggestSkillsDocument,
	SuggestSkillsGitHubRepositoryFragment,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables
} from "../../graphql";

const Root = tw.div`
	flex
	flex-row
	items-stretch
	rounded-lg
	border
	border-gray-400
`;

const SearchInputContainer = tw.div`
	flex-basis[0]
	flex-grow
	w-auto
	min-w-0
	transition-all
	duration-150
	ease-in
	focus-within:flex-grow[8]
	focus-within:z-index[1]
`;

const SearchInput = tw(Input)`
	border-transparent
`;

const OwnerSearch = tw(SearchInput)`
	rounded-r-none
	border-r-gray-400/80
`;

const SkillSearch = tw(SearchInput)`
	rounded-l-none
	border-l-gray-400/80
`;

const Results = tw(Paper)`
	rounded-t-none
`;

export interface SiteWideSearchProps {
	className?: string;
	offset?: number;
	style?: CSSProperties;
}

export const SiteWideSearch: FC<SiteWideSearchProps> = ({ className, offset, style }) => {
	const offsetModifier = useMemo(() => Popover.Modifiers.Offset({ offset }), [offset]);

	const [refElem, refRef] = useState<HTMLDivElement | null>(null);
	const [popperElem, popperRef] = useState<HTMLDivElement | null>(null);
	const { attributes, styles } = usePopper(refElem, popperElem, {
		modifiers: [offsetModifier, Popover.Modifiers.SameWidth],
		placement: "bottom-start"
	});

	const urqlClient = useClient();

	const [owners, setOwners] = useState<SuggestSkillOwnersGitHubRepositoryOwnerFragment[]>([]);
	const ownerBox = useComboBoxState({
		items: owners,
		itemToString: (item) => item?.name ?? item?.login ?? "",
		debounce: ms("0.3s"),
		onInputValueChange: async ({ inputValue }) => {
			if (!inputValue) return;

			const nodes = await urqlClient
				.query<SuggestSkillOwnersQuery, SuggestSkillOwnersQueryVariables>(
					SuggestSkillOwnersDocument,
					{ where: { name: inputValue } }
				)
				.toPromise()
				.then((result) => result.data?.suggestSkillOwners.nodes ?? []);

			setOwners(nodes.slice());
		}
	});

	const [skills, setSkills] = useState<SuggestSkillsGitHubRepositoryFragment[]>([]);
	const skillBox = useComboBoxState({
		items: skills,
		itemToString: (item) => item?.name ?? "",
		debounce: ms("0.3s"),
		onInputValueChange: async ({ inputValue }) => {
			if (!inputValue) return;

			const nodes = await urqlClient
				.query<SuggestSkillsQuery, SuggestSkillsQueryVariables>(SuggestSkillsDocument, {
					where: {
						name: inputValue,
						owner: ownerBox.inputValue
					}
				})
				.toPromise()
				.then((result) => result.data?.suggestSkills.nodes ?? []);

			setSkills(nodes.slice());
		}
	});

	return (
		<>
			<Root ref={refRef} className={className} style={style}>
				<SearchInputContainer {...ownerBox.getComboboxProps()}>
					<OwnerSearch
						{...ownerBox.getInputProps({
							onChange: () => {
								skillBox.closeMenu();
							},
							onFocus: () => {
								skillBox.closeMenu();

								!!ownerBox.inputValue && ownerBox.openMenu();
							},
							placeholder: "Search organizations or users..."
						})}
					/>
				</SearchInputContainer>
				<SearchInputContainer {...skillBox.getComboboxProps()}>
					<SkillSearch
						{...skillBox.getComboboxProps({
							onChange: () => {
								ownerBox.closeMenu();
							},
							onFocus: () => {
								ownerBox.closeMenu();

								!!skillBox.inputValue && skillBox.openMenu();
							},
							placeholder: "Search repositories or skills..."
						})}
					/>
				</SearchInputContainer>
			</Root>
			<Results
				ref={popperRef}
				{...attributes.popper}
				style={{
					...styles.popper,
					...(ownerBox.isOpen ? {} : { display: "none" })
				}}
			>
				<ListItem>
					<div>Test</div>
				</ListItem>
				<ListItem>
					<div>Test</div>
				</ListItem>
				<ListItem>
					<div>Test</div>
				</ListItem>
			</Results>
		</>
	);
};
