import { ComboBox, Skeleton, Tags } from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, useCallback, useState } from "react";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	SuggestSkillsDocument,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables
} from "../../graphql";

const SkillsSuggest = tw(ComboBox.Options)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
`;

export interface SkillAutosuggestItem {
	name: string;
	owner: string;
}

export interface SkillAutosuggestProps {
	className?: string;
	onSelect?: (skill: SkillAutosuggestItem) => void;
	style?: CSSProperties;
	"aria-label"?: string;
}

export const SkillAutosuggest: FC<SkillAutosuggestProps> = ({
	className,
	onSelect,
	style,
	"aria-label": ariaLabel
}) => {
	const [skillItems, setSkillItems] = useState<SkillAutosuggestItem[]>([]);

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

			return (
				result.data?.suggestSkills.nodes.map((repo) => ({
					id: repo.id,
					name: repo.name,
					owner: repo.owner.login
				})) ?? []
			);
		},
		[urqlClient]
	);

	const combobox = useComboBoxState<SkillAutosuggestItem>({
		debounce: ms("0.3s"),
		id: "skills-autosuggest",
		items: skillItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue }) => {
			const suggestions = await getSkillAutosuggestItems(inputValue);

			setSkillItems(suggestions);
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

		const newSelectedItem = skillItems.find(
			(item) => item.name.toLowerCase() === name && item.owner.toLowerCase() === owner
		);

		if (!newSelectedItem) return;

		combobox.selectItem(newSelectedItem);
	});

	return (
		<>
			<ComboBox {...combobox.getComboboxProps({ className, style })} tw="flex-grow">
				<ComboBox.Input
					{...combobox.getInputProps()}
					as={Tags.Editable}
					onKeyDown={onEnterSkill}
					placeholder="[repo_owner]/[repo_name]"
					aria-label={ariaLabel}
					tw="w-52"
				/>
			</ComboBox>
			<SkillsSuggest {...combobox.getMenuProps()} isOpen={combobox.isOpen}>
				{combobox.loading
					? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} tw="h-8" />)
					: skillItems.map((item, i) => (
							<ComboBox.Option
								key={`${item.owner}/${item.name}`}
								{...combobox.getItemProps({
									item,
									index: i
								})}
							>
								{item.name}
							</ComboBox.Option>
					  ))}
			</SkillsSuggest>
		</>
	);
};
