import { Button, ComboBox, Input, Paper, Popover } from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import composeRefs from "@seznam/compose-react-refs";
import ms from "ms";
import React, {
	CSSProperties,
	FocusEvent,
	forwardRef,
	memo,
	useCallback,
	useMemo,
	useState
} from "react";
import { usePopper } from "react-popper";
import { useLockBodyScroll } from "react-use";
import tw, { styled } from "twin.macro";
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

const InputContainer = tw(ComboBox)`
	flex
	flex-row
	items-stretch
	rounded-lg
	border
	border-transparent
	sm:border-gray-300
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
	h-11
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

const SearchButton = tw(Button)`
	flex-shrink-0
	h-11
	w-11
	ml-auto
	p-0
	bg-transparent
	not-disabled:hover:-translate-y-0.5
	sm:border-0
	sm:border-l
	sm:border-opacity-60
	sm:rounded-l-none
	sm:not-disabled:hover:translate-y-0
`;

const Root = styled.form`
	&:not(:focus-within) {
		& ${SearchInputContainer as any} {
			${tw`
				flex-grow-0
				sm:flex-grow
			`}
		}

		& ${OwnerSearch as any}, & ${SkillSearch as any} {
			${tw`
				opacity-0
				sm:opacity-100
			`}
		}
	}

	&:focus-within {
		& ${InputContainer as any} {
			${tw`
				border-gray-300
			`}
		}

		${SearchButton as any} {
			${tw`
				bg-white
				border-0
				border-l
				border-opacity-60
				rounded-l-none
				sm:bg-transparent
			`}
		}
	}
`;

export interface SiteWideSearchProps {
	className?: string;
	offset?: number;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
	style?: CSSProperties;
}

export const SiteWideSearch = memo<SiteWideSearchProps>(
	forwardRef<HTMLFormElement, SiteWideSearchProps>((props, ref) => {
		const { className, offset, onBlur, onFocus: _onFocus, style } = props;

		const offsetModifier = useMemo(() => Popover.Modifiers.Offset({ offset }), [offset]);

		const [refElem, refRef] = useState<HTMLFormElement | null>(null);
		const [ownerPopperElem, ownerPopperRef] = useState<HTMLElement | null>(null);
		const ownerPopper = usePopper(refElem, ownerPopperElem, {
			modifiers: [offsetModifier, Popover.Modifiers.SameWidth],
			placement: "bottom-start",
			strategy: "fixed"
		});
		const [skillPopperElem, skillPopperRef] = useState<HTMLElement | null>(null);
		const skillPopper = usePopper(refElem, skillPopperElem, {
			modifiers: [offsetModifier, Popover.Modifiers.SameWidth],
			placement: "bottom-start",
			strategy: "fixed"
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
			},
			onSelectedItemChange: ({ selectedItem }) => {
				if (!selectedItem) return;

				ownerBox.setInputValue("");
			}
		});

		const matchedOwner = useMemo(() => {
			const ownerName = ownerBox.inputValue.toLowerCase();

			if (!ownerName) return undefined;

			return owners.find(
				(owner) =>
					owner.login.toLowerCase() === ownerName ||
					owner.name?.toLowerCase() === ownerName
			);
		}, [ownerBox.inputValue, owners]);

		const [skills, setSkills] = useState<SuggestSkillsGitHubRepositoryFragment[]>([]);
		const skillBox = useComboBoxState({
			id: "site-wide-search-skills",
			items: skills,
			itemToString: (item) => item?.name ?? "",
			debounce: ms("0.3s"),
			onInputValueChange: async ({ inputValue }) => {
				const skillName = inputValue?.toLowerCase();

				if (!skillName) return;

				const nodes = await urqlClient
					.query<SuggestSkillsQuery, SuggestSkillsQueryVariables>(SuggestSkillsDocument, {
						where: {
							name: skillName,
							owner: matchedOwner?.login
						}
					})
					.toPromise()
					.then((result) => result.data?.suggestSkills.nodes ?? []);

				setSkills(nodes.slice());
			},
			onSelectedItemChange: ({ selectedItem }) => {
				if (!selectedItem) return;

				skillBox.setInputValue("");
			}
		});

		const matchedSkill = useMemo(() => {
			const skillName = skillBox.inputValue.toLowerCase();

			if (!skillName) return undefined;

			return skills.find((skill) => skill.name.toLowerCase() === skillName);
		}, [skillBox.inputValue, skills]);

		useLockBodyScroll(ownerBox.isOpen || skillBox.isOpen);

		const onEnterOwner = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, () => {
			if (!matchedOwner) return;

			ownerBox.selectItem(matchedOwner);
		});

		const onEnterSkill = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, () => {
			if (!matchedSkill) return;

			skillBox.selectItem(matchedSkill);
		});

		const onFocus = useCallback(
			(e: FocusEvent<HTMLInputElement>) => {
				_onFocus?.(e);

				setTimeout(async () => {
					await Promise.all([ownerPopper.forceUpdate?.(), skillPopper.forceUpdate?.()]);
				}, ms("0.15s"));
			},
			[_onFocus, ownerPopper, skillPopper]
		);

		return (
			<Root
				ref={composeRefs<HTMLFormElement>(refRef, ref)}
				className={className}
				onSubmit={(e) => {
					e.preventDefault();
				}}
				role="search"
				style={style}
			>
				<InputContainer>
					<SearchInputContainer {...ownerBox.getComboboxProps()}>
						<OwnerSearch
							{...ownerBox.getInputProps({
								ref: ownerInputRef,
								onBlur,
								onChange: () => {
									skillBox.closeMenu();
								},
								onFocus: (e) => {
									onFocus?.(e);

									skillBox.closeMenu();

									!!ownerBox.inputValue && ownerBox.openMenu();
								},
								onKeyDown: onEnterOwner,
								placeholder: "Organizations or users...",
								type: "search"
							})}
						/>
					</SearchInputContainer>
					<SearchInputContainer {...skillBox.getComboboxProps()}>
						<SkillSearch
							{...skillBox.getInputProps({
								ref: skillInputRef,
								onBlur,
								onChange: () => {
									ownerBox.closeMenu();
								},
								onFocus: (e) => {
									onFocus?.(e);

									ownerBox.closeMenu();

									!!skillBox.inputValue && skillBox.openMenu();
								},
								onKeyDown: onEnterSkill,
								placeholder: "Repositories or skills...",
								type: "search"
							})}
						/>
					</SearchInputContainer>
					<SearchButton
						onClick={() => {
							!ownerBox.inputValue || !!skillBox.inputValue
								? skillInput?.focus()
								: ownerInput?.focus();
						}}
						type="button"
						variant="secondary"
						aria-label="site-wide search"
					>
						<SearchIcon height={24} width={24} />
					</SearchButton>
				</InputContainer>
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
							data-selected={ownerBox.selectedItem?.id === owner.id}
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
			</Root>
		);
	})
);

SiteWideSearch.displayName = "SiteWideSearch";
