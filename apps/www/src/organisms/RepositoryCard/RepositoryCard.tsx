import {
	Anchor,
	ComboBox,
	Form,
	FormButton,
	HiddenInput,
	MaybeAnchor,
	Skeleton,
	Tags
} from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import { dayjs } from "@makepurple/utils";
import ms from "ms";
import React, { cloneElement, CSSProperties, forwardRef, useCallback, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw, { styled } from "twin.macro";
import { useClient } from "urql";
import {
	RepositoryCardRepositoryFragment,
	SuggestSkillsDocument,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables,
	useUpdateRepositoryMutation
} from "../../graphql";
import { ForkIcon, IssueIcon, LicenseIcon, PullRequestIcon, StarIcon } from "../../svgs";

const Root = styled.div`
	${tw`
		flex
		items-start
		py-4
		cursor-pointer
	`}
`;

const Details = tw.div`
	flex-grow
	flex
	flex-col
	items-start
`;

const Name = tw.h3`
	text-lg
	leading-none
	font-semibold
`;

const Description = tw.p`
	text-base
	line-clamp-2
`;

const Info = tw.div`
	flex
	flex-wrap
	items-center
	gap-3.5
	text-sm
	text-black
`;

const GitHubInfo = tw.div`
	flex
	items-center
	leading-none
`;

const StyledMaybeAnchor = tw(MaybeAnchor)`
	flex
	items-center
	leading-none
	color[inherit]
	hover:no-underline
`;

const LanguageColor = tw.div`
	h-3
	w-3
	rounded-full
`;

const SaveButton = tw(FormButton)`
	flex-shrink-0
`;

const SkillsSuggest = tw(ComboBox.Options)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
`;

interface SuggestedSkill {
	name: string;
	owner: string;
}

export interface RepositoryCardProps {
	className?: string;
	editing?: boolean;
	repository: RepositoryCardRepositoryFragment;
	style?: CSSProperties;
}

export const RepositoryCard = forwardRef<HTMLDivElement, RepositoryCardProps>((props, ref) => {
	const { className, editing, repository, style } = props;

	const primaryLanguage = repository.github.primaryLanguage;
	const license = repository.github.licenseInfo;

	const [{ fetching }, updateRepository] = useUpdateRepositoryMutation();

	const { control, handleSubmit, register } = useForm<{
		skills: readonly SuggestedSkill[];
	}>({
		defaultValues: {
			skills: repository.skills.map((skill) => ({
				name: skill.name,
				owner: skill.owner
			}))
		}
	});

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });

	const urqlClient = useClient();

	const getSuggestedSkills = useCallback(
		async (input: Maybe<string>): Promise<SuggestedSkill[]> => {
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
					name: repo.name,
					owner: repo.owner.login
				})) ?? []
			);
		},
		[urqlClient]
	);

	const [suggestions, setSuggestions] = useState<SuggestedSkill[]>([]);

	const combobox = useComboBoxState({
		debounce: ms("0.3s"),
		id: "repository-skills-combobox",
		items: suggestions,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue }) => {
			const newSuggestions = await getSuggestedSkills(inputValue);

			setSuggestions(newSuggestions);
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (!selectedItem) return;

			skills.append(selectedItem);
			combobox.setInputValue("");
		}
	});

	const onEnterSkill = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
		const inputValue = e.currentTarget.value;

		if (!inputValue) return;

		const [owner, name] = inputValue.split("/");

		const newSelectedItem = suggestions.find(
			(item) => item.name === name && item.owner === owner
		);

		if (!newSelectedItem) return;

		combobox.selectItem(newSelectedItem);
	});

	const parent = editing ? (
		<Root
			as={Form}
			ref={ref as any}
			disabled={fetching}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = await updateRepository({
					data: {
						skills: formData.skills.map((skill) => ({
							name_owner: {
								name: skill.name,
								owner: skill.owner
							}
						}))
					},
					where: {
						id: repository.id
					}
				})
					.then((result) => !!result.data?.updateRepository.record)
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Could not update repository details");

					return;
				}

				toast.success("Repository details were updated! 🎉");
			})}
		/>
	) : (
		<Root
			ref={ref}
			onClick={() => {
				window.open(repository.github.url, "_blank");
			}}
		/>
	);

	return cloneElement(
		parent,
		{ className, style },
		<>
			<Details>
				<Anchor href={repository.github.url} target="_blank" rel="noopener noreferrer">
					<Name>{repository.name}</Name>
				</Anchor>
				{repository.github.description && (
					<a
						href={repository.github.url}
						target="_blank"
						rel="noopener noreferrer"
						tabIndex={-1}
						tw="focus:ring-0"
					>
						<Description tw="mt-1">{repository.github.description}</Description>
					</a>
				)}
				<Tags
					editable={editing}
					onClick={(e) => {
						e.stopPropagation();
					}}
					type="positive"
					tw="relative mt-3"
				>
					{skills.fields.map((field, i) => (
						<Tags.Tag
							key={field._id}
							id={field._id}
							onRemove={() => skills.remove(i)}
							tw="cursor-auto"
						>
							{editing && (
								<>
									<HiddenInput {...register(`skills.${i}.name`)} />
									<HiddenInput {...register(`skills.${i}.owner`)} />
								</>
							)}
							<span>{field.name}</span>
						</Tags.Tag>
					))}
					<ComboBox {...combobox.getComboboxProps()} tw="flex-grow">
						<ComboBox.Input
							{...combobox.getInputProps()}
							as={Tags.Editable}
							onKeyDown={onEnterSkill}
							placeholder="[repo_owner]/[repo_name]"
							aria-label="new skill"
							tw="w-52"
						/>
					</ComboBox>
					<SkillsSuggest {...combobox.getMenuProps()} isOpen={combobox.isOpen}>
						{combobox.loading
							? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} tw="h-8" />)
							: suggestions.map((item, i) => (
									<ComboBox.Option
										key={`${item.owner}:${item.name}`}
										{...combobox.getItemProps({
											item,
											index: i
										})}
									>
										{item.name}
									</ComboBox.Option>
							  ))}
					</SkillsSuggest>
				</Tags>
				<Info
					onClick={(e) => {
						e.stopPropagation();
					}}
					tw="mt-3"
				>
					{primaryLanguage && (
						<GitHubInfo>
							{primaryLanguage.color && (
								<LanguageColor
									style={{ backgroundColor: primaryLanguage.color }}
									tw="mr-1"
								/>
							)}
							<span>{primaryLanguage.name}</span>
						</GitHubInfo>
					)}
					{license && (
						<StyledMaybeAnchor
							href={license.url}
							target="_blank"
							rel="noopener noreferrer"
						>
							<LicenseIcon height={16} width={16} tw="mr-1" />
							<span>{license.spdxId ?? license.nickname ?? license.name}</span>
						</StyledMaybeAnchor>
					)}
					<StyledMaybeAnchor
						href={`${repository.github.url}/network/members`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<ForkIcon height={16} width={16} tw="mr-1" />
						<span>{repository.github.forkCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${repository.github.url}/stargazers`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<StarIcon height={16} width={16} tw="mr-1" />
						<span>{repository.github.stargazerCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${repository.github.url}/issues`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<IssueIcon height={16} width={16} tw="mr-1" />
						<span>{repository.github.issueCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					<StyledMaybeAnchor
						href={`${repository.github.url}/pulls`}
						target="_blank"
						rel="noopener noreferrer"
					>
						<PullRequestIcon height={16} width={16} tw="mr-1" />
						<span>{repository.github.pullRequestCount.toLocaleString()}</span>
					</StyledMaybeAnchor>
					{!!repository.github.pushedAt && (
						<span>Updated {dayjs(repository.github.pushedAt).fromNow()}</span>
					)}
				</Info>
			</Details>
			{editing && (
				<SaveButton type="submit" tw="ml-2">
					Save
				</SaveButton>
			)}
		</>
	);
});

RepositoryCard.displayName = "RepositoryCard";
