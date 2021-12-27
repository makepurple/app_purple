import { ComboBox, Form, FormButton, HiddenInput, Skeleton, Tags } from "@makepurple/components";
import { useComboBoxState, useOnKeyDown } from "@makepurple/hooks";
import ms from "ms";
import React, { CSSProperties, FC, SyntheticEvent, useCallback, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";
import { useClient } from "urql";
import {
	SuggestSkillsDocument,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables,
	useGetUserInfoSideBarQuery,
	useUpdateUserInfoMutation
} from "../../graphql";

const FormActions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
	mt-8
`;

const SubTitle = tw.div`
	text-xl
	leading-none
	font-semibold
	text-black
	not-first:mt-6
`;

const Skills = tw(Tags)`
	relative
	mt-4
`;

const SkillsSuggest = tw(ComboBox.Options)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
`;

type SuggestedSkill = {
	name: string;
	owner: string;
};

export interface UserInfoSideBarFormProps {
	className?: string;
	onClose?: (event?: SyntheticEvent) => void;
	style?: CSSProperties;
	userName: string;
}

export const UserInfoSideBarForm: FC<UserInfoSideBarFormProps> = ({
	className,
	onClose,
	style,
	userName
}) => {
	const [{ data }] = useGetUserInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const [{ fetching: updatingSkills }, updateSkills] = useUpdateUserInfoMutation();

	const urqlClient = useClient();

	const getSuggestedSkills = useCallback(
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

	const user = data?.user;

	const { control, handleSubmit, reset } = useForm<{
		skills: readonly { name: string; owner: string }[];
		desiredSkills: readonly { name: string; owner: string }[];
	}>({
		defaultValues: {
			skills: user?.skills ?? [],
			desiredSkills: user?.desiredSkills ?? []
		}
	});

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });
	const desiredSkills = useFieldArray({ control, keyName: "_id", name: "desiredSkills" });

	const [blueItems, setBlueItems] = useState<SuggestedSkill[]>([]);
	const [redItems, setRedItems] = useState<SuggestedSkill[]>([]);

	const blueComboBox = useComboBoxState<SuggestedSkill>({
		debounce: ms("0.3s"),
		id: "skills-combobox",
		items: blueItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue }) => {
			const suggestions = await getSuggestedSkills(inputValue);

			setBlueItems(suggestions);
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (!selectedItem) return;

			skills.append(selectedItem);
			blueComboBox.setInputValue("");
		}
	});

	const redComboBox = useComboBoxState<SuggestedSkill>({
		debounce: ms("0.3s"),
		id: "desired-skills-combobox",
		items: redItems,
		itemToString: (item) => item?.name ?? "",
		onInputValueChange: async ({ inputValue }) => {
			const suggestions = await getSuggestedSkills(inputValue);

			setRedItems(suggestions);
		},
		onSelectedItemChange: ({ selectedItem }) => {
			if (!selectedItem) return;

			desiredSkills.append(selectedItem);
			redComboBox.setInputValue("");
		}
	});

	const onEnterBlue = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
		const inputValue = e.currentTarget.value;

		if (!inputValue) return;

		const [owner, name] = inputValue.split("/");

		if (!owner || !name) return;

		const newSelectedItem = blueItems.find(
			(item) => item.name === name && item.owner === owner
		);

		if (!newSelectedItem) return;

		blueComboBox.selectItem(newSelectedItem);
	});

	const onEnterRed = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
		const inputValue = e.currentTarget.value;

		if (!inputValue) return;

		const [owner, name] = inputValue.split("/");

		if (!owner || !name) return;

		const newSelectedItem = redItems.find((item) => item.name === name && item.owner === owner);

		if (!newSelectedItem) return;

		redComboBox.selectItem(newSelectedItem);
	});

	useEffect(() => {
		if (process.env.NODE_ENV === "test") return;
		if (!user) return;

		reset({
			skills: user.skills,
			desiredSkills: user.desiredSkills
		});
	}, [reset, user]);

	return (
		<Form
			className={className}
			disabled={updatingSkills}
			onSubmit={handleSubmit(async (formData) => {
				const didSucceed = await updateSkills({
					skills: formData.skills.map((skill) => ({
						name_owner: {
							name: skill.name,
							owner: skill.owner
						}
					})),
					desiredSkills: formData.desiredSkills.map((skill) => ({
						name_owner: {
							name: skill.name,
							owner: skill.owner
						}
					}))
				})
					.then((result) => {
						return (
							!!result.data?.updateDesiredSkills.record &&
							!!result.data.updateSkills.record
						);
					})
					.catch(() => false);

				if (!didSucceed) {
					toast.error("Your skills could not be saved");

					return;
				}

				toast.success("Your skills were updated 🎉");

				onClose?.();
			})}
			style={style}
		>
			<SubTitle>Highlighted Skills</SubTitle>
			<Skills editable type="positive">
				{skills.fields.map((field, i) => (
					<Tags.Tag key={field._id} id={field._id} onRemove={() => skills.remove(i)}>
						<HiddenInput name={`skills.${i}.name`} value={field.name} />
						<HiddenInput name={`skills.${i}.owner`} value={field.owner} />
						<span>{field.name}</span>
					</Tags.Tag>
				))}
				<ComboBox {...blueComboBox.getComboboxProps()} tw="flex-grow">
					<ComboBox.Input
						{...blueComboBox.getInputProps()}
						as={Tags.Editable}
						onKeyDown={onEnterBlue}
						placeholder="[repo_owner]/[repo_name]"
						aria-label="new skill"
					/>
				</ComboBox>
				<SkillsSuggest {...blueComboBox.getMenuProps()} isOpen={blueComboBox.isOpen}>
					{blueComboBox.loading
						? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} tw="h-8" />)
						: blueItems.map((item, i) => (
								<ComboBox.Option
									key={`${item.owner}:${item.name}`}
									{...blueComboBox.getItemProps({
										item,
										index: i
									})}
								>
									{item.name}
								</ComboBox.Option>
						  ))}
				</SkillsSuggest>
			</Skills>
			<SubTitle>Currently Learning</SubTitle>
			<Skills editable type="negative">
				{desiredSkills.fields.map((field, i) => (
					<Tags.Tag
						key={field._id}
						id={field._id}
						onRemove={() => desiredSkills.remove(i)}
					>
						<HiddenInput name={`desiredSkills.${i}.name`} value={field.name} />
						<HiddenInput name={`desiredSkills.${i}.owner`} value={field.owner} />
						<span>{field.name}</span>
					</Tags.Tag>
				))}
				<ComboBox {...redComboBox.getComboboxProps()} tw="flex-grow">
					<ComboBox.Input
						{...redComboBox.getInputProps()}
						as={Tags.Editable}
						onKeyDown={onEnterRed}
						placeholder="[repo_owner]/[repo_name]"
						aria-label="new desired skill"
					/>
				</ComboBox>
				<SkillsSuggest {...redComboBox.getMenuProps()} isOpen={redComboBox.isOpen}>
					{redComboBox.loading
						? Array.from({ length: 3 }, (_, i) => <Skeleton key={i} tw="h-8" />)
						: redItems.map((item, i) => (
								<ComboBox.Option
									key={`${item.owner}:${item.name}`}
									{...redComboBox.getItemProps({
										item,
										index: i
									})}
								>
									{item.name}
								</ComboBox.Option>
						  ))}
				</SkillsSuggest>
			</Skills>
			<FormActions>
				<FormButton type="submit">Save</FormButton>
				<FormButton onClick={onClose} type="button" variant="secondary">
					Cancel
				</FormButton>
			</FormActions>
		</Form>
	);
};
