import { ComboBox, Skeleton, Tags } from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, useCallback, useState } from "react";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	SuggestViewerFriendsDocument,
	SuggestViewerFriendsQuery,
	SuggestViewerFriendsQueryVariables
} from "../../graphql";

const FriendsSuggest = tw(ComboBox.Options)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
`;

export interface FriendAutosuggestItem {
	name: string;
}

export interface FriendAutosuggestProps {
	className?: string;
	onSelect?: (friend: FriendAutosuggestItem) => void;
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
	const [friendItems, setFriendItems] = useState<FriendAutosuggestItem[]>([]);

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

			return (
				result.data?.viewer?.friends.nodes.map((friend) => ({
					id: friend.id,
					name: friend.name
				})) ?? []
			);
		},
		[urqlClient]
	);

	const combobox = useComboBoxState<FriendAutosuggestItem>({
		debounce: ms("0.3s"),
		id: "friends-autosuggest",
		items: friendItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue }) => {
			const suggestions = await getFriendAutosuggestItems(inputValue);

			setFriendItems(suggestions);
		},
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
					? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} tw="h-8" />)
					: friendItems.map((item, i) => (
							<ComboBox.Option
								key={item.name}
								{...combobox.getItemProps({
									item,
									index: i
								})}
							>
								{item.name}
							</ComboBox.Option>
					  ))}
			</FriendsSuggest>
		</>
	);
};
