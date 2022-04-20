import { ComboBox, Popover } from "@makepurple/components";
import { useComboBoxState, useLockBodyScroll, useOnKeyDown } from "@makepurple/hooks";
import composeRefs from "@seznam/compose-react-refs";
import ms from "ms";
import NextLink from "next/link";
import { useRouter } from "next/router";
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
import { useClient } from "urql";
import {
	RepositorySearchResultGitHubRepositoryFragment,
	SuggestSkillOwnersDocument,
	SuggestSkillOwnersGitHubRepositoryOwnerFragment,
	SuggestSkillOwnersQuery,
	SuggestSkillOwnersQueryVariables,
	SuggestSkillsDocument,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables
} from "../../graphql";
import { SearchIcon } from "../../svgs";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { OrganizationSearchResult } from "../OrganizationSearchResult";
import { RepositorySearchResult } from "../RepositorySearchResult";
import { UserSearchResult } from "../UserSearchResult";
import {
	InputContainer,
	OwnerSearch,
	Results,
	Root,
	SearchButton,
	SearchInputContainer,
	SkillSearch
} from "./parts";

export interface SiteWideSearchProps {
	className?: string;
	disabled?: boolean;
	offset?: number;
	onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
	onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
	style?: CSSProperties;
}

export const SiteWideSearch = memo<SiteWideSearchProps>(
	forwardRef<HTMLFormElement, SiteWideSearchProps>((props, ref) => {
		const { className, disabled, offset, onBlur, onFocus: _onFocus, style } = props;

		const router = useRouter();

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
			onInputValueChange: useCallback(
				async ({ inputValue }) => {
					ownerPopper.forceUpdate?.();

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
				// eslint-disable-next-line react-hooks/exhaustive-deps
				[ownerPopper.forceUpdate, urqlClient]
			),
			onSelectedItemChange: async ({ selectedItem }) => {
				if (!selectedItem) return;

				await router.push("/s/[skillOwner]", `/s/${selectedItem.login}`);

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

		const [skills, setSkills] = useState<RepositorySearchResultGitHubRepositoryFragment[]>([]);
		const skillBox = useComboBoxState({
			id: "site-wide-search-skills",
			items: skills,
			itemToString: (item) => item?.name ?? "",
			debounce: ms("0.3s"),
			onInputValueChange: useCallback(
				async ({ inputValue }) => {
					skillPopper.forceUpdate?.();

					const skillName = inputValue?.toLowerCase();

					if (!skillName) return;

					const nodes = await urqlClient
						.query<SuggestSkillsQuery, SuggestSkillsQueryVariables>(
							SuggestSkillsDocument,
							{
								where: {
									name: skillName,
									owner: matchedOwner?.login
								}
							}
						)
						.toPromise()
						.then((result) => result.data?.suggestSkills.nodes ?? []);

					setSkills(nodes.slice());
				},
				// eslint-disable-next-line react-hooks/exhaustive-deps
				[matchedOwner, skillPopper.forceUpdate, urqlClient]
			),
			onSelectedItemChange: async ({ selectedItem }) => {
				if (!selectedItem) return;

				await router.push(
					"/s/[skillOwner]/[skillName]",
					`/s/${selectedItem.owner.login}/${selectedItem.name}`
				);

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

				setTimeout(() => {
					ownerPopper.forceUpdate?.();
					skillPopper.forceUpdate?.();
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
				<ComboBox as={InputContainer}>
					<SearchInputContainer {...ownerBox.getComboboxProps()}>
						<OwnerSearch
							{...ownerBox.getInputProps({
								ref: ownerInputRef,
								disabled,
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
								spellCheck: false,
								type: "search"
							})}
						/>
					</SearchInputContainer>
					<SearchInputContainer {...skillBox.getComboboxProps()}>
						<SkillSearch
							{...skillBox.getInputProps({
								ref: skillInputRef,
								disabled,
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
								spellCheck: false,
								type: "search"
							})}
						/>
					</SearchInputContainer>
					<SearchButton
						disabled={disabled}
						onClick={() => {
							!!ownerBox.inputValue || !skillBox.inputValue
								? ownerInput?.focus()
								: skillInput?.focus();
						}}
						type="button"
						variant="secondary"
						aria-label="site-wide search"
					>
						<SearchIcon height={24} width={24} />
					</SearchButton>
				</ComboBox>
				<ComboBox.Options
					as={Results}
					{...ownerBox.getMenuProps({
						...ownerPopper.attributes.popper,
						ref: ownerPopperRef,
						style: ownerPopper.styles.popper
					})}
					isOpen={ownerBox.isOpen}
				>
					{ownerBox.loading
						? Array.from({ length: 3 }, (_, i) => <LoadingSearchResult key={i} />)
						: owners.map((owner, i) => (
								<NextLink
									key={owner.id}
									href="/s/[skillOwner]"
									as={`/s/${owner.login}`}
									passHref
								>
									{owner.__typename === "GitHubOrganization" ? (
										<OrganizationSearchResult
											organization={owner}
											{...ownerBox.getItemProps({ index: i, item: owner })}
										/>
									) : (
										<UserSearchResult
											user={owner}
											{...ownerBox.getItemProps({ index: i, item: owner })}
										/>
									)}
								</NextLink>
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
					{skillBox.loading
						? Array.from({ length: 3 }, (_, i) => <LoadingSearchResult key={i} />)
						: skills.map((skill, i) => (
								<NextLink
									key={skill.id}
									href="/s/[skillOwner]/[skillName]"
									as={`/s/${skill.owner.login}/${skill.name}`}
									passHref
								>
									<RepositorySearchResult
										repository={skill}
										{...skillBox.getItemProps({
											item: skill,
											index: i
										})}
									/>
								</NextLink>
						  ))}
				</ComboBox.Options>
			</Root>
		);
	})
);

SiteWideSearch.displayName = "SiteWideSearch";
