import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
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
	Tags,
	TextArea,
	toast
} from "@makepurple/components";
import { PostDraftUpdateInput } from "@makepurple/validators";
import type { Type } from "computed-types";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import tw from "twin.macro";
import {
	useGetPostQuery,
	usePublishPostMutation,
	useUpdatePostDraftMutation
} from "../../../graphql";
import {
	DocumentEditorPostImageButton,
	PostGuidelines,
	PostImageInput,
	RemovePostThumbnailButton,
	SkillAutosuggest
} from "../../../organisms";
import { PageProps, pageProps } from "../../../page-props/[userName]/draft";

const WPM_READ_SPEED = 275;

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

const AddCoverImageButton = tw(PostImageInput)`
	w-52
	mb-10
`;

const ThumbnailPreviewContainer = tw.div`
	flex
	flex-wrap
	items-center
	gap-4
	mb-10
`;

const ThumbnailPreview = tw(Paper)`
	relative
	rounded-xl
	h-36
	w-full
	sm:width[20rem]
	overflow-hidden
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
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	useSession({ required: true });

	const router = useRouter();

	const infoRef = useRef<DocumentEditorInfoRef>(null);

	const authorName = router?.query.userName as string;
	const skillName = router?.query.skillName as string | undefined;
	const skillOwner = router?.query.skillOwner as string | undefined;

	const [{ data }] = useGetPostQuery({
		requestPolicy: "cache-first",
		variables: {
			where: {
				authorName_urlSlug: {
					authorName,
					urlSlug: "draft"
				}
			}
		}
	});

	const [{ fetching: saving }, updatePostDraft] = useUpdatePostDraftMutation();
	const [{ fetching: publishing }, publishPost] = usePublishPostMutation();

	const post = data?.post;

	const defaultSkills = useMemo(() => {
		const postSkills = (post?.skills.nodes ?? []).map((skill) => ({
			name_owner: {
				name: skill.name,
				owner: skill.owner
			}
		}));

		if (!skillName || !skillOwner) return postSkills;

		return [
			{ name_owner: { name: skillName, owner: skillOwner } },
			...postSkills.filter(({ name_owner: { name, owner } }) => {
				return name === skillName && owner === skillOwner;
			})
		];
	}, [post, skillName, skillOwner]);

	const {
		control,
		formState: { errors },
		handleSubmit,
		register,
		reset,
		setValue,
		watch
	} = useForm<Type<typeof PostDraftUpdateInput>>({
		defaultValues: {
			thumbnailUrl: post?.thumbnailUrl ?? "",
			title: post?.title ?? "",
			description: post?.description ?? "",
			skills: defaultSkills,
			content: (post?.content as any) ?? [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		resolver: computedTypesResolver(PostDraftUpdateInput)
	});

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });

	const thumbnailUrl = watch("thumbnailUrl");

	useEffect(() => {
		!!post &&
			reset({
				thumbnailUrl: post.thumbnailUrl ?? "",
				title: post.title ?? "",
				description: post.description ?? "",
				skills: defaultSkills,
				content: (post.content as any) ?? [
					{
						type: "paragraph",
						children: [{ text: "" }]
					}
				]
			});
	}, [defaultSkills, post, reset]);

	useEffect(() => {
		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		router?.prefetch("/[username]/[postTitle]");
	}, [router]);

	/**
	 * TODO
	 * @description Handle case where no post is found.
	 * @author David Lee
	 * @date October 31, 2021
	 */
	if (!post) return null;

	return (
		<Root>
			<Content>
				{!thumbnailUrl ? (
					<AddCoverImageButton
						disabled={publishing || saving}
						onUpload={(newThumbnailUrl) => {
							setValue("thumbnailUrl", newThumbnailUrl);
						}}
						postId={post.id}
					>
						Add a cover image
					</AddCoverImageButton>
				) : (
					<ThumbnailPreviewContainer>
						<ThumbnailPreview>
							<NextImage
								alt="thumbnail preview"
								src={thumbnailUrl}
								layout="fill"
								objectFit="cover"
							/>
						</ThumbnailPreview>
						<RemovePostThumbnailButton disabled={publishing || saving} postId={post.id}>
							Remove image
						</RemovePostThumbnailButton>
					</ThumbnailPreviewContainer>
				)}
				<Form
					disabled={publishing || saving}
					onSubmit={handleSubmit(async (formData) => {
						const readTime = (infoRef.current?.wordCount ?? 0) / WPM_READ_SPEED;

						const publishedPost = await publishPost({
							where: { id: post.id },
							data: {
								/* eslint-disable @typescript-eslint/no-non-null-assertion */
								content: formData.content!,
								description: formData.description!,
								readTime: readTime || undefined,
								skills: formData.skills!,
								thumbnailUrl: formData.thumbnailUrl!,
								title: formData.title!
								/* eslint-enable @typescript-eslint/no-non-null-assertion */
							}
						})
							.then((result) => result.data?.publishPost.record ?? null)
							.catch(() => null);

						if (!publishedPost) {
							toast.error("Post could not be published");

							return;
						}

						await router.push(
							"/[username]/[postTitle]",
							`/${publishedPost.authorName}/${publishedPost.urlSlug}`
						);

						toast.success("Your post was published! 🎉");
					})}
				>
					<HiddenInput {...register("thumbnailUrl")} />
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
									const exists = skills.fields.some((field) => {
										const owner = (field as any).name_owner.owner;
										const name = (field as any).name_owner.name;

										return (
											owner === newSkill.owner.login && name === newSkill.name
										);
									});

									if (exists) return;

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
								<DocumentEditor
									onChange={(newContent) => {
										onChange(newContent);
									}}
									value={value}
								>
									<DocumentEditor.Info ref={infoRef} />
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
									<DocumentEditor.Editable
										name={name}
										placeholder="Tell the class things you've learned..."
										aria-label="content"
									/>
								</DocumentEditor>
							)}
						/>
						<FormHelperText error={(errors.content as any)?.message} />
					</FormGroup>
					<FormActions>
						<FormButton type="submit">Publish</FormButton>
						<FormButton
							onClick={handleSubmit(async (formData) => {
								const didSucceed = await updatePostDraft({
									where: { id: post.id },
									data: {
										content: formData.content,
										description: formData.description,
										skills: formData.skills,
										thumbnailUrl: formData.thumbnailUrl,
										title: formData.title
									}
								})
									.then((result) => !!result.data?.updatePostDraft.record)
									.catch(() => false);

								didSucceed
									? toast.success("Your draft was saved! 🎉")
									: toast.error("Draft could not be saved");
							})}
							type="button"
							variant="secondary"
						>
							Save
						</FormButton>
					</FormActions>
				</Form>
			</Content>
			<SideBar />
		</Root>
	);
};

export default Page;
