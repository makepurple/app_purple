import { ComboBox, Tags } from "@makepurple/components";
import { UseComboBoxState, useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, {
	CSSProperties,
	forwardRef,
	useCallback,
	useImperativeHandle,
	useState
} from "react";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	RepositorySearchResultGitHubRepositoryFragment,
	SuggestSkillsDocument,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables
} from "../../graphql";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { RepositorySearchResult } from "../RepositorySearchResult";

const SkillsSuggest = tw(ComboBox.Options)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
	max-height[16rem]
	overflow-y-auto
`;

export interface SkillAutosuggestProps {
	className?: string;
	defaultValue?: string;
	onSelect?: (skill: RepositorySearchResultGitHubRepositoryFragment) => void;
	style?: CSSProperties;
	"aria-label"?: string;
}

export const SkillAutosuggest = forwardRef<
	UseComboBoxState<RepositorySearchResultGitHubRepositoryFragment>,
	SkillAutosuggestProps
>((props, ref) => {
	const { className, defaultValue = "", onSelect, style, "aria-label": ariaLabel } = props;

	const [skillItems, setSkillItems] = useState<RepositorySearchResultGitHubRepositoryFragment[]>(
		[]
	);

	const urqlClient = useClient();

	const getSkillAutosuggestItems = useCallback(
		async (input: Maybe<string>) => {
			if (!input) return [];

			const [owner, name] = input.split("/");

			if (!owner || !name) return [];

			const result = await urqlClient
				.query<SuggestSkillsQuery, SuggestSkillsQueryVariables>(SuggestSkillsDocument, {
					where: { name, owner }
				})
				.toPromise();

			return result.data?.suggestSkills.nodes ?? [];
		},
		[urqlClient]
	);

	const combobox = useComboBoxState<RepositorySearchResultGitHubRepositoryFragment>({
		debounce: ms("0.3s"),
		defaultInputValue: defaultValue,
		defaultIsOpen: false,
		id: "skills-autosuggest",
		items: skillItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: useCallback(
			async ({ inputValue }) => {
				const suggestions = await getSkillAutosuggestItems(inputValue);

				setSkillItems(suggestions.slice());
			},
			[getSkillAutosuggestItems]
		),
		onSelectedItemChange: ({ selectedItem }) => {
			if (!selectedItem) return;

			onSelect?.(selectedItem);

			combobox.setInputValue("");
			combobox.reset();
		}
	});

	useImperativeHandle(ref, () => combobox);

	const onEnterSkill = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
		e.preventDefault();

		const inputValue = e.currentTarget.value;

		if (!inputValue) return;

		const [owner, name] = inputValue.toLowerCase().split("/");

		if (!owner || !name) return;

		const newSelectedItem = skillItems.find((item) => {
			const matchOwner =
				item.owner.login.toLowerCase() === owner ||
				item.owner.name?.toLowerCase() === owner;
			const matchSkill = item.name.toLowerCase() === name;

			return matchOwner && matchSkill;
		});

		if (!newSelectedItem) return;

		combobox.selectItem(newSelectedItem);
	});

	return (
		<>
			<ComboBox {...combobox.getComboboxProps({ className, style })} tw="flex-grow">
				<ComboBox.Input
					as={Tags.Editable}
					{...combobox.getInputProps({
						onFocus: () => {
							!!skillItems.length && combobox.openMenu();
						},
						onKeyDown: onEnterSkill,
						placeholder: "[repo_owner]/[repo_name]",
						"aria-label": ariaLabel
					})}
					tw="w-52"
				/>
			</ComboBox>
			<SkillsSuggest {...combobox.getMenuProps()} isOpen={combobox.isOpen}>
				{combobox.loading
					? Array.from({ length: 3 }, (_, i) => <LoadingSearchResult key={i} />)
					: skillItems.map((item, i) => (
							<RepositorySearchResult
								key={`${item.owner}/${item.name}`}
								repository={item}
								{...combobox.getItemProps({
									item,
									index: i
								})}
							/>
					  ))}
			</SkillsSuggest>
		</>
	);
});

SkillAutosuggest.displayName = "SkillAutosuggest";
