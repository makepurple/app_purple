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
	Tags,
	TextArea
} from "@makepurple/components";
import { PostUpdateInput } from "@makepurple/validators";
import { Type } from "computed-types";
import { NextPage } from "next";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo, useRef } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";
import { useGetPostQuery, useUpdatePostMutation } from "../../../graphql";
import {
	DocumentEditorPostImageButton,
	PostGuidelines,
	PostImageInput,
	RemovePostThumbnailButton,
	SkillAutosuggest
} from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/[postTitle]/edit";

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

	const [{ fetching: saving }, updatePost] = useUpdatePostMutation();

	const updating: boolean = false;

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
		formState: { errors },
		handleSubmit,
		register,
		reset,
		setValue,
		watch
	} = useForm<Type<typeof PostUpdateInput>>({
		defaultValues: {
			thumbnailUrl: post?.thumbnailUrl ?? "",
			description: post?.description ?? "",
			skills: defaultSkills,
			content: [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		resolver: computedTypesResolver(PostUpdateInput)
	});

	const skills = useFieldArray({ control, keyName: "_id", name: "skills" });

	const thumbnailUrl = watch("thumbnailUrl");

	useEffect(() => {
		!!post &&
			reset({
				thumbnailUrl: post.thumbnailUrl ?? "",
				description: post.description ?? "",
				content: (post.content as any) ?? [
					{
						type: "paragraph",
						children: [{ text: "" }]
					}
				]
			});
	}, [post, reset]);

	/**
	 * TODO
	 * @description Handle case where no post is found.
	 * @author David Lee
	 * @date December 28, 2021
	 */
	if (!post) return null;

	return (
		<Root>
			<Content>
				{!thumbnailUrl ? (
					<AddCoverImageButton
						disabled={updating}
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
						<RemovePostThumbnailButton disabled={updating} postId={post.id}>
							Remove image
						</RemovePostThumbnailButton>
					</ThumbnailPreviewContainer>
				)}
				<Form
					disabled={saving}
					onSubmit={handleSubmit(async (formData) => {
						const readTime = (infoRef.current?.wordCount ?? 0) / WPM_READ_SPEED;

						const didSucceed = await updatePost({
							where: { id: post.id },
							data: {
								content: formData.content,
								description: formData.description,
								readTime: readTime || undefined,
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
									value={value}
									onChange={(newContent) => onChange(newContent)}
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
								</StyledDocumentEditor>
							)}
						/>
						<FormHelperText error={(errors.content as any)?.message} />
					</FormGroup>
					<FormActions>
						<FormButton type="submit">Save</FormButton>
						<NextLink
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
