import { ComboBox, Tags } from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, useCallback, useState } from "react";
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
`;

export interface SkillAutosuggestProps {
	className?: string;
	onSelect?: (skill: RepositorySearchResultGitHubRepositoryFragment) => void;
	style?: CSSProperties;
	"aria-label"?: string;
}

export const SkillAutosuggest: FC<SkillAutosuggestProps> = ({
	className,
	onSelect,
	style,
	"aria-label": ariaLabel
}) => {
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
		id: "skills-autosuggest",
		items: skillItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue }) => {
			const suggestions = await getSkillAutosuggestItems(inputValue);

			setSkillItems(suggestions.slice());
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (!selectedItem) return;

			onSelect?.(selectedItem);

			combobox.setInputValue("");
		}
	});

	const onEnterSkill = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
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
};
