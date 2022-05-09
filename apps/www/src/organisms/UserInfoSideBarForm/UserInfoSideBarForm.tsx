import { Form, FormButton, HiddenInput, Spinner, Tags, toast } from "@makepurple/components";
import React, { CSSProperties, FC, SyntheticEvent } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";
import { useGetUserInfoSideBarQuery, useUpdateUserInfoMutation } from "../../graphql";
import { SkillAutosuggest } from "../SkillAutosuggest";

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

	const user = data?.user;

	const { control, handleSubmit, register } = useForm<{
		skills: readonly { name: string; owner: string }[];
		desiredSkills: readonly { name: string; owner: string }[];
	}>({
		defaultValues: {
			skills: user?.skills.nodes ?? [],
			desiredSkills: user?.desiredSkills.nodes ?? []
		}
	});

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });
	const desiredSkills = useFieldArray({ control, keyName: "_id", name: "desiredSkills" });

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

				toast.success("Your skills were updated! 🎉");

				onClose?.();
			})}
			style={style}
		>
			<SubTitle>Highlighted Skills</SubTitle>
			<Tags editable type="positive" tw="relative mt-4">
				{skills.fields.map((field, i) => (
					<Tags.Tag key={field._id} id={field._id} onRemove={() => skills.remove(i)}>
						<HiddenInput {...register(`skills.${i}.name`)} />
						<HiddenInput {...register(`skills.${i}.owner`)} />
						<span>{field.name}</span>
					</Tags.Tag>
				))}
				<SkillAutosuggest
					onSelect={(newSkill) => {
						skills.append({
							name: newSkill.name,
							owner: newSkill.owner.login
						});
					}}
					aria-label="new skill"
				/>
			</Tags>
			<SubTitle>Currently Learning</SubTitle>
			<Tags editable type="negative" tw="relative mt-4">
				{desiredSkills.fields.map((field, i) => (
					<Tags.Tag
						key={field._id}
						id={field._id}
						onRemove={() => desiredSkills.remove(i)}
					>
						<HiddenInput {...register(`desiredSkills.${i}.name`)} />
						<HiddenInput {...register(`desiredSkills.${i}.owner`)} />
						<span>{field.name}</span>
					</Tags.Tag>
				))}
				<SkillAutosuggest
					onSelect={(newSkill) => {
						desiredSkills.append({
							name: newSkill.name,
							owner: newSkill.owner.login
						});
					}}
					aria-label="new desired skill"
				/>
			</Tags>
			<FormActions>
				<FormButton disabled={updatingSkills} type="submit">
					<span>Save</span>
					{updatingSkills && <Spinner tw="ml-2" />}
				</FormButton>
				<FormButton onClick={onClose} type="button" variant="secondary">
					Cancel
				</FormButton>
			</FormActions>
		</Form>
	);
};
