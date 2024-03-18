import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	Button,
	DocumentEditor,
	DocumentEditorInfoRef,
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	FormLabel,
	HiddenInput,
	Input,
	MainContainer,
	Paper,
	Spinner,
	Tags,
	TextArea,
	toast
} from "@makepurple/components";
import { useBeforeUnload } from "@makepurple/hooks";
import { PostUpdateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";
import { useGetPostQuery, useUpdatePostMutation } from "../../../graphql";
import {
	DocumentEditorPostImageButton,
	PostGuidelines,
	Seo,
	SkillAutosuggest
} from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/[postTitle]/edit";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	justify-start
	lg:flex-row
	lg:items-start
	my-12
`;

const Content = tw(Paper)`
	flex-grow-0
	lg:flex-grow
	flex
	flex-col
	p-4
	sm:p-6
`;

const StyledDocumentEditor = tw(DocumentEditor)`
	shadow-none
`;

const FormActions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
	mt-10
`;

const SideBar = tw(PostGuidelines)`
	hidden
	flex-shrink-0
	w-full
	lg:block
	lg:w-96
	lg:ml-6
	xl:ml-8
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	useSession({ required: true });

	const router = useRouter();

	const infoRef = useRef<DocumentEditorInfoRef>(null);

	const userName = router?.query.userName as string;
	const postTitle = router?.query.postTitle as string;

	const [{ data }] = useGetPostQuery({
		requestPolicy: "cache-first",
		variables: {
			where: {
				authorName_urlSlug: {
					authorName: userName,
					urlSlug: postTitle
				}
			}
		}
	});

	const [{ data: updateData, fetching: saving }, updatePost] = useUpdatePostMutation();

	const updateErrors = updateData?.updatePost.errors;

	const post = data?.post;

	const defaultSkills = useMemo(() => {
		return (post?.skills.nodes ?? []).map((skill) => ({
			name_owner: {
				name: skill.name,
				owner: skill.owner
			}
		}));
	}, [post]);

	const {
		control,
		formState: { errors, isDirty, isSubmitting, isSubmitted },
		handleSubmit,
		register,
		setError
	} = useForm<Type<typeof PostUpdateInput>>({
		defaultValues: {
			thumbnailUrl: post?.thumbnailUrl ?? "",
			description: post?.description ?? "",
			skills: defaultSkills,
			content: (post?.content as any) ?? [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		resolver: computedTypesResolver(PostUpdateInput)
	});

	const submitting = isSubmitting || isSubmitted;

	useBeforeUnload(
		isDirty && !submitting,
		"You have unsaved changes, are you sure you want to leave?"
	);

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });

	useEffect(() => {
		updateErrors?.forEach((error) => {
			switch (error.__typename) {
				case "InvalidSkillError":
					setError("skills", { message: error.message });

					break;
				default:
			}
		});
	}, [setError, updateErrors]);

	if (!post) return null;

	return (
		<Root>
			<Seo title={`Editing: ${post.title}`} />
			<Content>
				<Form
					disabled={saving}
					onSubmit={handleSubmit(async (formData) => {
						const didSucceed = await updatePost({
							where: { id: post.id },
							data: {
								content: formData.content,
								description: formData.description,
								skills: formData.skills,
								thumbnailUrl: formData.thumbnailUrl
							}
						})
							.then((result) => !!result.data?.updatePost.record)
							.catch(() => false);

						didSucceed
							? toast.success("Your post was updated! 🎉")
							: toast.error("Post could not be updated");
					})}
				>
					<HiddenInput {...register("thumbnailUrl")} />
					<FormGroup>
						<FormLabel>Title</FormLabel>
						<Input
							disabled
							placeholder="Title"
							type="text"
							value={post.title ?? ""}
							aria-label="title"
						/>
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
						<FormLabel>Content</FormLabel>
						<Controller
							control={control}
							name="content"
							render={({ field: { name, onChange, value } }) => (
								<StyledDocumentEditor
									// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
									value={value!}
									onChange={(newContent) => onChange(newContent)}
								>
									<DocumentEditor.Info ref={infoRef} />
									<DocumentEditor.Editable
										name={name}
										placeholder="Tell the class things you've learned..."
										aria-label="content"
									/>
									<DocumentEditor.Toolbar>
										<DocumentEditor.Toolbar.CodeBlock />
										<DocumentEditor.Toolbar.Heading />
										<DocumentEditor.Toolbar.Bold />
										<DocumentEditor.Toolbar.Italic />
										<DocumentEditor.Toolbar.Underline />
										<DocumentEditor.Toolbar.BulletedList />
										<DocumentEditor.Toolbar.NumbedList />
										<DocumentEditor.Toolbar.BlockQuote />
										<DocumentEditor.Toolbar.Code />
										<DocumentEditor.Toolbar.Link />
										<DocumentEditorPostImageButton postId={post.id} />
									</DocumentEditor.Toolbar>
								</StyledDocumentEditor>
							)}
						/>
						<FormHelperText error={(errors.content as any)?.message} />
					</FormGroup>
					<FormActions>
						<FormButton type="submit">
							<span>Save</span>
							{saving && <Spinner tw="ml-2" />}
						</FormButton>
						<NextLink
							legacyBehavior
							href="/[userName]/[postTitle]"
							as={`/${userName}/${postTitle}`}
							passHref
						>
							<Button as="a" variant="secondary">
								Go to post
							</Button>
						</NextLink>
					</FormActions>
				</Form>
			</Content>
			<SideBar />
		</Root>
	);
};

export default Page;
