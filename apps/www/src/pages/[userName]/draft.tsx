import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import {
	DocumentEditor,
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	FormLabel,
	HiddenInput,
	Input,
	MainContainer,
	Paper,
	TextArea
} from "@makepurple/components";
import { PostDraftUpdateInput } from "@makepurple/validators";
import type { Type } from "computed-types";
import { NextPage } from "next";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";
import {
	useGetPostDraftQuery,
	usePublishPostMutation,
	useUpdatePostDraftMutation
} from "../../graphql";
import {
	DocumentEditorPostImageButton,
	PostGuidelines,
	PostImageInput,
	RemovePostThumbnailButton
} from "../../organisms";
import { PageProps, pageProps } from "../../page-props/[userName]/draft";

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

	const [{ data }] = useGetPostDraftQuery({
		requestPolicy: "cache-first"
	});

	const [{ fetching: saving }, updatePostDraft] = useUpdatePostDraftMutation();
	const [{ fetching: publishing }, publishPost] = usePublishPostMutation();

	const post = data?.postDraft;

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
			content: [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		resolver: computedTypesResolver(PostDraftUpdateInput)
	});

	const thumbnailUrl = watch("thumbnailUrl");

	useEffect(() => {
		!!post &&
			reset({
				thumbnailUrl: post.thumbnailUrl ?? "",
				title: post.title ?? "",
				description: post.description ?? "",
				content: (post.content as any) ?? [
					{
						type: "paragraph",
						children: [{ text: "" }]
					}
				]
			});
	}, [post, reset]);

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
						const publishedPost = await publishPost({
							where: { id: post.id },
							data: formData
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
						<FormLabel>Content</FormLabel>
						<Controller
							control={control}
							name="content"
							render={({ field: { name, onChange, value } }) => (
								<StyledDocumentEditor
									value={value as any}
									onChange={(newContent) => onChange(newContent)}
								>
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
						<FormButton type="submit">Publish</FormButton>
						<FormButton
							onClick={handleSubmit(async (formData) => {
								const didSucceed = await updatePostDraft({
									where: { id: post.id },
									data: formData
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
