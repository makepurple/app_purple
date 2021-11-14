import { Form, HiddenInput } from "@/client/atoms";
import { useGetUserInfoSideBarQuery } from "@/client/graphql";
import { Tags } from "@/client/molecules";
import React, { CSSProperties, FC, useEffect } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";

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
	mt-4
`;

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

	const user = data?.user;

	const { control, reset } = useForm<{
		skills: readonly { id: number; name: string; owner: string }[];
		desiredSkills: readonly { id: number; name: string; owner: string }[];
	}>({
		defaultValues: {
			skills: user?.skills ?? [],
			desiredSkills: user?.desiredSkills ?? []
		}
	});

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });
	const desiredSkills = useFieldArray({ control, keyName: "_id", name: "desiredSkills" });

	useEffect(() => {
		if (!user) return;

		reset({
			skills: user.skills,
			desiredSkills: user.desiredSkills
		});
	}, [reset, user]);

	if (!user) return null;

	return (
		<Root className={className} style={style}>
			<SkillsContainer>
				<SubTitle>Highlighted Skills</SubTitle>
				<Skills editable type="positive">
					{skills.fields.map((field, i) => (
						<Tags.Tag
							key={field._id}
							id={field.id.toString()}
							onRemove={() => skills.remove(i)}
						>
							<HiddenInput name={`skills.${i}.id`} value={field.id} />
							<HiddenInput name={`skills.${i}.name`} value={field.name} />
							<HiddenInput name={`skills.${i}.owner`} value={field.owner} />
							<span>{field.name}</span>
						</Tags.Tag>
					))}
					<Tags.Editable />
				</Skills>
				<SubTitle>Currently Learning</SubTitle>
				<Skills editable type="negative">
					{desiredSkills.fields.map((field, i) => (
						<Tags.Tag
							key={field._id}
							id={field.id.toString()}
							onRemove={() => desiredSkills.remove(i)}
						>
							<HiddenInput name={`desiredSkills.${i}.id`} value={field.id} />
							<HiddenInput name={`desiredSkills.${i}.name`} value={field.name} />
							<HiddenInput name={`desiredSkills.${i}.owner`} value={field.owner} />
							<span>{field.name}</span>
						</Tags.Tag>
					))}
					<Tags.Editable />
				</Skills>
			</SkillsContainer>
		</Root>
	);
};
