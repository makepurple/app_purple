import { Avatar, GitHubAvatarImage, Input, ListItem, Skeleton } from "@makepurple/components";
import { StyleUtils } from "@makepurple/utils";
import { useCombobox } from "downshift";
import React, { CSSProperties, FC, useMemo } from "react";
import tw, { styled } from "twin.macro";
import { useSuggestExperiencesQuery } from "../../graphql";

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
`;

const CurrentOrganizationAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const Description = tw.p`
	truncate
`;

const Options = styled.ul`
	${tw`
		absolute
		inset-x-0
		bottom-0
		transform
		translate-y-full
		inline-flex
		flex-col
		items-stretch
		max-h-80
		mt-1
		p-0.5
		overflow-y-auto
		rounded-lg
		bg-white
		shadow-2xl
		empty:hidden
	`}
	z-index: ${StyleUtils.getZIndex("menu")};
`;

export interface OrganizationInputProps {
	className?: string;
	name?: string;
	onChange: (value: string) => void;
	placeholder?: string;
	style?: CSSProperties;
	value: string;
}

export const OrganizationInput: FC<OrganizationInputProps> = ({
	className,
	name,
	onChange,
	placeholder = "Ex: makepurple",
	style,
	value
}) => {
	const [{ data, fetching }] = useSuggestExperiencesQuery({
		pause: !value,
		variables: {
			first: 3,
			where: {
				name: value
			}
		}
	});

	const organizations = useMemo(() => data?.suggestExperiences.nodes.slice() ?? [], [data]);

	const {
		getComboboxProps,
		getInputProps,
		getItemProps,
		getMenuProps,
		highlightedIndex,
		isOpen,
		reset,
		selectedItem
	} = useCombobox({
		items: organizations,
		onSelectedItemChange: (changes) => {
			!!changes.selectedItem && onChange(changes.selectedItem.login);
		}
	});

	const currentOrg = useMemo(() => {
		return value
			? organizations.find((o) => o.login.toLowerCase() === value.toLowerCase())
			: null;
	}, [organizations, value]);

	return (
		<Root className={className} style={style}>
			{currentOrg && (
				<CurrentOrganization tw="mb-2">
					<CurrentOrganizationAvatar border={1} tw="mr-2">
						<GitHubAvatarImage src={currentOrg.avatarUrl} height={48} width={48} />
					</CurrentOrganizationAvatar>
					<div tw="overflow-hidden">
						<div>{currentOrg.name ?? currentOrg.login}</div>
						{currentOrg.description && (
							<Description>{currentOrg.description}</Description>
						)}
					</div>
				</CurrentOrganization>
			)}
			<div {...getComboboxProps()}>
				<Input
					{...getInputProps({
						name,
						onChange: (e) => {
							onChange(e.currentTarget.value.toLowerCase());

							reset();
						},
						placeholder,
						spellCheck: false,
						value
					})}
				/>
			</div>
			<Options {...getMenuProps()}>
				{isOpen &&
					(fetching
						? Array.from({ length: 3 }, (_, i) => (
								<ListItem key={i}>
									<Skeleton tw="h-9 w-full" />
								</ListItem>
						  ))
						: organizations.map((organization, index) => (
								<ListItem
									key={organization.id}
									{...getItemProps({
										index,
										item: organization
									})}
									active={highlightedIndex === index}
									selected={selectedItem?.id === organization.id}
								>
									<Avatar border={1} tw="mr-2 rounded-md">
										<GitHubAvatarImage
											src={organization.avatarUrl}
											height={36}
											width={36}
										/>
									</Avatar>
									<div>{organization.login}</div>
								</ListItem>
						  )))}
			</Options>
		</Root>
	);
};
