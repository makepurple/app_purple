import { Button, ComboBox, Input, Paper, Popover } from "@makepurple/components";
import { useComboBoxState } from "@makepurple/hooks";
import composeRefs from "@seznam/compose-react-refs";
import ms from "ms";
import React, { CSSProperties, forwardRef, memo, useMemo, useState } from "react";
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
import { SearchIcon } from "../../svgs";

const Root = tw.div`
	flex
	flex-row
	items-stretch
	rounded-lg
	border
	border-gray-300
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
	border-r-gray-300/80
`;

const SkillSearch = tw(SearchInput)`
	rounded-none
	border-l-gray-300/80
`;

const Results = tw(Paper)`
	rounded-t-none
`;

const SkillButton = tw(Button)`
	h-10
	w-10
	p-0
	rounded-l-none
`;

export interface SiteWideSearchProps {
	className?: string;
	offset?: number;
	style?: CSSProperties;
}

export const SiteWideSearch = memo<SiteWideSearchProps>(
	forwardRef<HTMLDivElement, SiteWideSearchProps>((props, ref) => {
		const { className, offset, style } = props;

		const offsetModifier = useMemo(() => Popover.Modifiers.Offset({ offset }), [offset]);

		const [refElem, refRef] = useState<HTMLDivElement | null>(null);
		const [ownerPopperElem, ownerPopperRef] = useState<HTMLElement | null>(null);
		const ownerPopper = usePopper(refElem, ownerPopperElem, {
			modifiers: [offsetModifier, Popover.Modifiers.SameWidth],
			placement: "bottom-start"
		});
		const [skillPopperElem, skillPopperRef] = useState<HTMLElement | null>(null);
		const skillPopper = usePopper(refElem, skillPopperElem, {
			modifiers: [offsetModifier, Popover.Modifiers.SameWidth],
			placement: "bottom-start"
		});

		const [ownerInput, ownerInputRef] = useState<HTMLInputElement | null>(null);
		const [skillInput, skillInputRef] = useState<HTMLInputElement | null>(null);

		const urqlClient = useClient();

		const [owners, setOwners] = useState<SuggestSkillOwnersGitHubRepositoryOwnerFragment[]>([]);
		const ownerBox = useComboBoxState({
			id: "site-wide-search-skill-owners",
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
			id: "site-wide-search-skills",
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
				<Root
					ref={composeRefs<HTMLDivElement>(refRef, ref)}
					className={className}
					style={style}
				>
					<SearchInputContainer {...ownerBox.getComboboxProps()}>
						<OwnerSearch
							{...ownerBox.getInputProps({
								ref: ownerInputRef,
								onChange: () => {
									skillBox.closeMenu();
								},
								onFocus: () => {
									skillBox.closeMenu();

									!!ownerBox.inputValue && ownerBox.openMenu();
								},
								placeholder: "Organizations or users..."
							})}
						/>
					</SearchInputContainer>
					<SearchInputContainer {...skillBox.getComboboxProps()}>
						<SkillSearch
							{...skillBox.getInputProps({
								ref: skillInputRef,
								onChange: () => {
									ownerBox.closeMenu();
								},
								onFocus: () => {
									ownerBox.closeMenu();

									!!skillBox.inputValue && skillBox.openMenu();
								},
								placeholder: "Repositories or skills..."
							})}
						/>
					</SearchInputContainer>
					<SkillButton
						bounce={false}
						onClick={() => {
							if (skillBox.inputValue) {
								skillInput?.focus();

								return;
							}

							if (ownerBox.inputValue) ownerInput?.focus();
						}}
						type="button"
						variant="secondary"
						aria-label="site-wide search"
					>
						<SearchIcon height={24} width={24} />
					</SkillButton>
				</Root>
				<ComboBox.Options
					as={Results}
					{...ownerBox.getMenuProps({
						...ownerPopper.attributes.popper,
						ref: ownerPopperRef,
						style: ownerPopper.styles.popper
					})}
					isOpen={ownerBox.isOpen}
				>
					{owners.map((owner, i) => (
						<ComboBox.Option
							key={owner.id}
							{...ownerBox.getItemProps({
								item: owner,
								index: i
							})}
						>
							<span>{owner.name ?? owner.login}</span>
						</ComboBox.Option>
					))}
				</ComboBox.Options>
				<ComboBox.Options
					as={Results}
					{...skillBox.getMenuProps({
						...skillPopper.attributes.popper,
						ref: skillPopperRef,
						style: skillPopper.styles.popper
					})}
					isOpen={skillBox.isOpen}
				>
					{skills.map((skill, i) => (
						<ComboBox.Option
							key={skill.id}
							{...skillBox.getItemProps({
								item: skill,
								index: i
							})}
						>
							<span>{skill.name ?? skill.owner.login}</span>
						</ComboBox.Option>
					))}
				</ComboBox.Options>
			</>
		);
	})
);

SiteWideSearch.displayName = "SiteWideSearch";
