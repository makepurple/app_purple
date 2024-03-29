import { ComboBox, Paper, Tags } from "@makepurple/components";
import {
	UseComboBoxState,
	useComboBoxState,
	UseComboboxStateChange,
	useFocus,
	useOnKeyDown
} from "@makepurple/hooks";
import ms from "ms";
import React, {
	CSSProperties,
	forwardRef,
	useCallback,
	useImperativeHandle,
	useMemo,
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
import { InfoIcon } from "../../svgs";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { RepositorySearchResult } from "../RepositorySearchResult";

const InfoTooltip = tw(Paper)`
	absolute
	bottom-0
	inset-x-0
	transform
	translate-y-full
	flex
	flex-row
	items-start
	p-2
	gap-2
	max-height[16rem]
	overflow-y-auto
	z-50
`;

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

	const [focused, { ref: inputRef }] = useFocus();

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
			async ({
				inputValue
			}: UseComboboxStateChange<RepositorySearchResultGitHubRepositoryFragment>) => {
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

	const isInputValid = useMemo(
		() => /^[a-z0-9.\-_]+\/[a-z0-9.\-_]+$/i.test(combobox.inputValue),
		[combobox.inputValue]
	);

	return (
		<>
			<ComboBox {...combobox.getComboboxProps({ className, style })} tw="flex-grow">
				<ComboBox.Input
					as={Tags.Editable}
					{...combobox.getInputProps({
						ref: inputRef,
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
			{focused && !isInputValid && (
				<InfoTooltip>
					<InfoIcon height={24} width={24} tw="flex-shrink-0" />
					<p>
						Search by GitHub owner/repository. For example: github.com/vercel/next.js ➤
						vercel/next.js
					</p>
				</InfoTooltip>
			)}
			<SkillsSuggest {...combobox.getMenuProps()} isOpen={combobox.isOpen && isInputValid}>
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
