import { ComboBox, Tags } from "@makepurple/components";
import { useComboBoxState, UseComboboxStateChange, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, useCallback, useState } from "react";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	SuggestViewerFriendsDocument,
	SuggestViewerFriendsQuery,
	SuggestViewerFriendsQueryVariables,
	UserSearchResultGitHubUserFragment
} from "../../graphql";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { UserSearchResult } from "../UserSearchResult";

const FriendsSuggest = tw(ComboBox.Options)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
`;

export interface FriendAutosuggestProps {
	className?: string;
	onSelect?: (friend: UserSearchResultGitHubUserFragment) => void;
	placeholder?: string;
	style?: CSSProperties;
	"aria-label"?: string;
}

export const FriendAutosuggest: FC<FriendAutosuggestProps> = ({
	className,
	onSelect,
	placeholder = "Name",
	style,
	"aria-label": ariaLabel
}) => {
	const [friendItems, setFriendItems] = useState<UserSearchResultGitHubUserFragment[]>([]);

	const urqlClient = useClient();

	const getFriendAutosuggestItems = useCallback(
		async (input: Maybe<string>) => {
			if (!input) return [];

			const result = await urqlClient
				.query<SuggestViewerFriendsQuery, SuggestViewerFriendsQueryVariables>(
					SuggestViewerFriendsDocument,
					{ name: input }
				)
				.toPromise();

			return result.data?.viewer?.friends.nodes.map((friend) => friend.github) ?? [];
		},
		[urqlClient]
	);

	const combobox = useComboBoxState<UserSearchResultGitHubUserFragment>({
		debounce: ms("0.3s"),
		id: "friends-autosuggest",
		items: friendItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: useCallback(
			async ({ inputValue }: UseComboboxStateChange<UserSearchResultGitHubUserFragment>) => {
				const suggestions = await getFriendAutosuggestItems(inputValue);

				setFriendItems(suggestions);
			},
			[getFriendAutosuggestItems]
		),
		onSelectedItemChange: ({ selectedItem }) => {
			if (!selectedItem) return;

			onSelect?.(selectedItem);

			combobox.setInputValue("");
		}
	});

	const onEnterFriend = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
		const inputValue = e.currentTarget.value;

		if (!inputValue) return;

		const newSelectedItem = friendItems.find((item) => item.name === inputValue);

		if (!newSelectedItem) return;

		combobox.selectItem(newSelectedItem);
	});

	return (
		<>
			<ComboBox {...combobox.getComboboxProps()} tw="flex-grow">
				<ComboBox.Input
					{...combobox.getInputProps({ className, style })}
					as={Tags.Editable}
					onKeyDown={onEnterFriend}
					placeholder={placeholder}
					aria-label={ariaLabel}
				/>
			</ComboBox>
			<FriendsSuggest {...combobox.getMenuProps()} isOpen={combobox.isOpen}>
				{combobox.loading
					? Array.from({ length: 3 }, (_, i) => <LoadingSearchResult key={i} />)
					: friendItems.map((item, i) => (
							<UserSearchResult
								key={item.name}
								user={item}
								{...combobox.getItemProps({ index: i, item })}
							/>
					  ))}
			</FriendsSuggest>
		</>
	);
};
