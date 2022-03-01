import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Avatar,
	Button,
	CodeBlockInput,
	Form,
	FormGroup,
	FormHelperText,
	FormLabel,
	GitHubAvatarImage,
	HiddenInput,
	Input,
	Paper,
	Tags,
	TextArea
} from "@makepurple/components";
import { CodeExampleCreateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";
import {
	CodeLanguage,
	RepositorySearchResultGitHubRepositoryFragment,
	useCreateCodeExampleMutation
} from "../../../graphql";
import { CodeLanguageSelect, SkillAutosuggest, UserPageLayout } from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/snippets/new";
import { BookIcon, XIcon } from "../../../svgs";

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	justify-start
	gap-4
	p-4
	sm:p-6
` as typeof Form;

const Title = tw.h2`
	flex
	text-xl
	leading-none
	font-bold
`;

const CurrentRepository = tw.div`
	flex
	flex-row
	items-center
	gap-3
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	h-12
	w-12
	rounded-md
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-11
	w-11
	bg-white
	z-index[1]
`;

const RepositoryDetails = tw.div`
	flex-grow
	overflow-hidden
`;

const RepositoryName = tw.span`
	font-semibold
	leading-none
`;

const RepositoryDescription = tw.p`
	line-clamp-2
	text-sm
	leading-snug
	text-gray-500
`;

const RepositoryRemove = tw(Button)`
	flex-shrink-0
	h-8
	w-8
	p-0
`;

const FormActions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
	mt-10
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const userName = router?.query.userName as string;

	const [{ fetching }, createCodeExample] = useCreateCodeExampleMutation();

	const {
		control,
		formState: { errors, isSubmitted, isValid },
		handleSubmit,
		register,
		setValue,
		watch
	} = useForm<Type<typeof CodeExampleCreateInput>>({
		defaultValues: {
			content: "",
			description: "",
			language: "TypeScript",
			primarySkill: {
				name_owner: {
					name: "",
					owner: ""
				}
			},
			skills: [],
			title: ""
		},
		resolver: computedTypesResolver(CodeExampleCreateInput)
	});

	const primarySkill = watch("primarySkill.name_owner");

	const skills = useFieldArray({
		control,
		keyName: "_id",
		name: "skills"
	});

	const errorPrimaryLanguage =
		isSubmitted && !isValid && (!primarySkill.name || !primarySkill.owner);

	const [repository, setRepository] =
		useState<RepositorySearchResultGitHubRepositoryFragment | null>(null);

	return (
		<UserPageLayout selectedTab="snippets" userName={userName}>
			<Content>
				<Title>Create Snippet</Title>
				<Form
					disabled={fetching}
					onSubmit={handleSubmit(async (formData) => {
						const snippet = await createCodeExample({
							data: {
								content: formData.content,
								description: formData.description,
								language: formData.language as CodeLanguage,
								primarySkill: formData.primarySkill,
								skills: formData.skills,
								title: formData.title
							}
						})
							.then((result) => result.data?.createCodeExample.record)
							.catch(() => null);

						if (!snippet) {
							toast.error("Could not create snippet");

							return;
						}

						toast.success("Code snippet! 🎉");

						await router.push(
							"/[userName]/snippets/[codeExampleTitle]",
							`/${userName}/snippets/${snippet.urlSlug}`
						);
					})}
				>
					<FormGroup>
						<FormLabel>Title</FormLabel>
						<Input
							{...register("title")}
							placeholder="Title"
							type="text"
							aria-label="title"
						/>
						<FormHelperText error={errors.title?.message} />
					</FormGroup>
					<FormGroup tw="mt-4">
						<FormLabel>Description</FormLabel>
						<TextArea
							{...register("description")}
							placeholder="Description"
							aria-label="description"
						/>
						<FormHelperText error={errors.description?.message} />
					</FormGroup>
					<FormGroup tw="mt-4">
						<FormLabel>Primary Skill</FormLabel>
						{!!repository && (
							<CurrentRepository tw="mb-2">
								<StyledAvatar
									border={2}
									onClick={(e) => {
										e.stopPropagation();
									}}
									title={`${primarySkill.owner}/${primarySkill.name}`}
								>
									{repository.owner.__typename === "GitHubOrganization" ? (
										<GitHubAvatarImage
											alt={repository.name}
											src={repository.owner.avatarUrl}
											height={48}
											width={48}
										/>
									) : (
										<AvatarIconContainer>
											<BookIcon height={24} width={24} />
										</AvatarIconContainer>
									)}
								</StyledAvatar>
								<RepositoryDetails>
									<RepositoryName>{repository.name}</RepositoryName>
									{!!repository.description && (
										<RepositoryDescription>
											{repository.description}
										</RepositoryDescription>
									)}
								</RepositoryDetails>
								<RepositoryRemove size="small" variant="secondary">
									<XIcon height={24} width={24} />
								</RepositoryRemove>
							</CurrentRepository>
						)}
						<Tags editable type="positive" tw="relative">
							<></>
							<SkillAutosuggest
								onSelect={(newSkill) => {
									setValue("primarySkill.name_owner", {
										name: newSkill.name,
										owner: newSkill.owner.login
									});

									const shouldAdd = !skills.fields.some((field) => {
										const skill = (field as any).name_owner;

										return (
											skill.owner === newSkill.owner.login &&
											skill.name === newSkill.name
										);
									});

									shouldAdd && setRepository(newSkill);
								}}
							/>
						</Tags>
						<FormHelperText error={errorPrimaryLanguage && "Required"} />
					</FormGroup>
					<FormGroup tw="mt-4">
						<FormLabel>Skills</FormLabel>
						<Tags editable type="positive" tw="relative">
							{skills.fields.map((field, i) => {
								const owner = (field as any).name_owner.owner;
								const name = (field as any).name_owner.name;

								return (
									<Tags.Tag
										key={field._id}
										id={field._id}
										onRemove={() => {
											skills.remove(i);
										}}
										aria-label={`${owner}/${name}`}
									>
										<HiddenInput
											{...register(`skills.${i}.name_owner.owner`)}
										/>
										<HiddenInput {...register(`skills.${i}.name_owner.name`)} />
										<span>{name}</span>
									</Tags.Tag>
								);
							})}
							<SkillAutosuggest
								onSelect={(newSkill) => {
									skills.append({
										name_owner: {
											name: newSkill.name,
											owner: newSkill.owner.login
										}
									});
								}}
							/>
						</Tags>
						<FormHelperText error={(errors.skills as any)?.message} />
					</FormGroup>
					<FormGroup tw="mt-4">
						<FormLabel>Code Snippet</FormLabel>
						<Controller
							control={control}
							name="content"
							render={(content) => (
								<CodeBlockInput
									name={content.field.name}
									onChange={(newValue) => {
										content.field.onChange(newValue);
									}}
									placeholder="// Write some code here!"
									title={
										<Controller
											control={control}
											name="language"
											render={(language) => (
												<CodeLanguageSelect
													value={language.field.value as CodeLanguage}
													onChange={(newLanguage) => {
														language.field.onChange(newLanguage);
													}}
												/>
											)}
										/>
									}
									value={content.field.value}
								/>
							)}
						/>
						<FormHelperText error={errors.content?.message} />
					</FormGroup>
					<FormActions>
						<Button type="submit" variant="primary">
							Save
						</Button>
					</FormActions>
				</Form>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
