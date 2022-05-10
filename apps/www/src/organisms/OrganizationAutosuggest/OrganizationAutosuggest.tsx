import { Avatar, ComboBox, GitHubAvatarImage } from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, useCallback, useMemo, useState } from "react";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	OrganizationSearchResultGitHubOrganizationFragment,
	SuggestOrganizationsDocument,
	SuggestOrganizationsQuery,
	SuggestOrganizationsQueryVariables
} from "../../graphql";
import { LoadingSearchResult } from "../LoadingSearchResult";
import { OrganizationSearchResult } from "../OrganizationSearchResult";

const Root = tw.div`
	relative
	flex
	flex-col
	items-stretch
`;

const CurrentOrganization = tw.div`
	flex
	items-start
	overflow-hidden
	gap-2
`;

const CurrentOrganizationAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const OrganizationDetails = tw.div`
	flex-grow
	overflow-hidden
`;

const OrganizationName = tw.span`
	font-semibold
	leading-none
`;

const Description = tw.p`
	line-clamp-2
	text-sm
	leading-snug
	text-gray-500
`;

export interface OrganizationAutosuggestProps {
	className?: string;
	name?: string;
	onChange: (value: string) => void;
	placeholder?: string;
	style?: CSSProperties;
	value: string;
}

export const OrganizationAutosuggest: FC<OrganizationAutosuggestProps> = ({
	className,
	name,
	onChange,
	placeholder = "Ex: makepurple",
	style,
	value
}) => {
	const [organizations, setOrganizations] = useState<
		OrganizationSearchResultGitHubOrganizationFragment[]
	>([]);

	const urqlClient = useClient();

	const combobox = useComboBoxState({
		debounce: ms("0.3s"),
		items: organizations,
		itemToString: (item) => item?.name ?? item?.login ?? "",
		onInputValueChange: useCallback(
			async ({ inputValue }) => {
				const login = inputValue?.toLowerCase();

				if (!login) {
					setOrganizations([]);

					return;
				}

				const nodes = await urqlClient
					.query<SuggestOrganizationsQuery, SuggestOrganizationsQueryVariables>(
						SuggestOrganizationsDocument,
						{ first: 5, where: { name: login } }
					)
					.toPromise()
					.then((result) => {
						return result.data?.suggestOrganizations.nodes ?? [];
					});

				setOrganizations(nodes.slice());
			},
			[urqlClient]
		),
		onSelectedItemChange: (changes) => {
			!!changes.selectedItem && onChange(changes.selectedItem.login);

			combobox.reset();
		}
	});

	const currentOrg = useMemo(() => {
		return value
			? organizations.find((o) => o.login.toLowerCase() === value.toLowerCase())
			: null;
	}, [organizations, value]);

	const onEnter = useOnKeyDown({ key: "ENTER" }, () => {
		const inputValue = combobox.inputValue?.toLowerCase();

		if (!inputValue) return;

		const newSelected = organizations.find(
			(organization) =>
				organization.login.toLowerCase() === inputValue ||
				organization.name?.toLowerCase() === inputValue
		);

		if (!newSelected) return;

		combobox.selectItem(newSelected);
	});

	return (
		<Root className={className} style={style}>
			{currentOrg && (
				<CurrentOrganization tw="mb-2">
					<CurrentOrganizationAvatar border={1}>
						<GitHubAvatarImage src={currentOrg.avatarUrl} height={48} width={48} />
					</CurrentOrganizationAvatar>
					<OrganizationDetails>
						<OrganizationName>{currentOrg.name ?? currentOrg.login}</OrganizationName>
						{currentOrg.description && (
							<Description>{currentOrg.description}</Description>
						)}
					</OrganizationDetails>
				</CurrentOrganization>
			)}
			<ComboBox {...combobox.getComboboxProps()}>
				<ComboBox.Input
					{...combobox.getInputProps({
						name,
						onChange: (e) => {
							onChange(e.currentTarget.value.toLowerCase());
						},
						onKeyDown: onEnter,
						placeholder,
						spellCheck: false,
						value
					})}
				/>
			</ComboBox>
			<ComboBox.Options {...combobox.getMenuProps()} isOpen={combobox.isOpen}>
				{combobox.loading
					? Array.from({ length: 3 }, (_, i) => <LoadingSearchResult key={i} />)
					: organizations.map((organization, index) => (
							<OrganizationSearchResult
								key={organization.id}
								organization={organization}
								{...combobox.getItemProps({
									index,
									item: organization
								})}
							/>
					  ))}
			</ComboBox.Options>
		</Root>
	);
};
