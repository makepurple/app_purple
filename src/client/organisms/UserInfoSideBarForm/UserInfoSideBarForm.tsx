import { ComboBox, Form, HiddenInput } from "@/client/atoms";
import {
	SuggestSkillsDocument,
	SuggestSkillsQuery,
	SuggestSkillsQueryVariables,
	useGetUserInfoSideBarQuery
} from "@/client/graphql";
import { useComboBoxState, useOnKeyDown } from "@/client/hooks";
import { Tags } from "@/client/molecules";
import ms from "ms";
import React, { CSSProperties, FC, useCallback, useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";
import { useClient } from "urql";

const Root = tw(Form)``;

const SkillsContainer = tw.div``;

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

const SkillsSuggestLoading = tw(ComboBox.LoadingState)`
	bottom-0
	inset-x-0
	transform
	translate-y-full
`;

const SkillsSuggest = tw(ComboBox.Select)`
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
	style?: CSSProperties;
	userName: string;
}

export const UserInfoSideBarForm: FC<UserInfoSideBarFormProps> = ({
	className,
	style,
	userName
}) => {
	const [{ data }] = useGetUserInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

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

	const { control, reset } = useForm<{
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
		debounce: ms("0.2s"),
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
			blueComboBox.combobox.setInputValue("");
		}
	});

	const redComboBox = useComboBoxState<SuggestedSkill>({
		debounce: ms("0.2s"),
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
			redComboBox.combobox.setInputValue("");
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

		blueComboBox.combobox.selectItem(newSelectedItem);
	});

	const onEnterRed = useOnKeyDown<HTMLInputElement>({ key: "ENTER" }, (e) => {
		const inputValue = e.currentTarget.value;

		if (!inputValue) return;

		const [owner, name] = inputValue.split("/");

		if (!owner || !name) return;

		const newSelectedItem = redItems.find((item) => item.name === name && item.owner === owner);

		if (!newSelectedItem) return;

		redComboBox.combobox.selectItem(newSelectedItem);
	});

	useEffect(() => {
		if (!user) return;

		reset({
			skills: user.skills,
			desiredSkills: user.desiredSkills
		});
	}, [reset, user]);

	return (
		<Root className={className} style={style}>
			<SkillsContainer>
				<SubTitle>Highlighted Skills</SubTitle>
				<Skills editable type="positive">
					{skills.fields.map((field, i) => (
						<Tags.Tag key={field._id} id={field._id} onRemove={() => skills.remove(i)}>
							<HiddenInput name={`skills.${i}.name`} value={field.name} />
							<HiddenInput name={`skills.${i}.owner`} value={field.owner} />
							<span>{field.name}</span>
						</Tags.Tag>
					))}
					<ComboBox {...blueComboBox} tw="flex-grow">
						<ComboBox.Input
							{...blueComboBox}
							as={Tags.Editable}
							onKeyDown={onEnterBlue}
							placeholder="repo_owner/repo_name"
							aria-label="new skill"
						/>
					</ComboBox>
					<SkillsSuggestLoading {...blueComboBox} />
					<SkillsSuggest {...blueComboBox}>
						{blueItems.map((item, i) => (
							<ComboBox.Option
								key={`${item.owner}:${item.name}`}
								{...blueComboBox}
								item={item}
								index={i}
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
					<ComboBox {...redComboBox} tw="flex-grow">
						<ComboBox.Input
							{...redComboBox}
							as={Tags.Editable}
							onKeyDown={onEnterRed}
							placeholder="repo_owner/repo_name"
							aria-label="new desired skill"
						/>
					</ComboBox>
					<SkillsSuggestLoading {...redComboBox} />
					<SkillsSuggest {...redComboBox}>
						{redItems.map((item, i) => (
							<ComboBox.Option
								key={`${item.owner}:${item.name}`}
								{...redComboBox}
								item={item}
								index={i}
							>
								{item.name}
							</ComboBox.Option>
						))}
					</SkillsSuggest>
				</Skills>
			</SkillsContainer>
		</Root>
	);
};
