import {
	Form,
	FormButton,
	FormGroup,
	FormHelperText,
	HiddenInput,
	Input,
	MainContainer,
	Paper,
	TextArea
} from "@/client/atoms";
import { useGetPostQuery, useUpdatePostMutation } from "@/client/graphql";
import { DocumentEditor } from "@/client/molecules";
import {
	DocumentEditorPostImageButton,
	PostGuidelines,
	PostImageInput,
	RemovePostThumbnailButton
} from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[username]/draft";
import { PostUpdateInput } from "@/validators";
import { computedTypesResolver } from "@hookform/resolvers/computed-types";
import type { Type } from "computed-types";
import { NextPage } from "next";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import tw from "twin.macro";

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
	mt-10
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
`;

const PublishButton = tw(FormButton)`
	bg-blue-500
`;

const SaveButton = tw(FormButton)`
	bg-gray-50
	text-black
	border-gray-400
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

	const authorName = router?.query.username;

	const [{ data }] = useGetPostQuery({
		requestPolicy: "cache-first",
		variables: {
			where: {
				authorName_urlSlug: {
					authorName: authorName as string,
					urlSlug: "draft"
				}
			}
		}
	});

	const [{ fetching }, updatePost] = useUpdatePostMutation();

	const post = data?.post;

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
			title: post?.title ?? "",
			description: post?.description ?? "",
			content: [
				{
					type: "paragraph",
					children: [{ text: "" }]
				}
			]
		},
		resolver: computedTypesResolver(PostUpdateInput)
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
						disabled={fetching}
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
						<RemovePostThumbnailButton disabled={fetching} postId={post.id}>
							Remove image
						</RemovePostThumbnailButton>
					</ThumbnailPreviewContainer>
				)}
				<Form
					disabled={fetching}
					onSubmit={handleSubmit((values) => {
						console.log(values);

						toast.success("Your post was published! 🎉");
					})}
				>
					<HiddenInput {...register("thumbnailUrl")} />
					<FormGroup>
						<Input
							{...register("title")}
							placeholder="Title"
							type="text"
							aria-label="title"
						/>
						<FormHelperText error={errors.title?.message} />
					</FormGroup>
					<FormGroup tw="mt-4">
						<TextArea
							{...register("description")}
							placeholder="Description"
							aria-label="description"
						/>
						<FormHelperText error={errors.description?.message} />
					</FormGroup>
					<FormGroup tw="mt-4">
						<Controller
							control={control}
							name="content"
							render={({ field: { name, onChange, value } }) => (
								<StyledDocumentEditor
									value={value}
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
						<PublishButton type="submit">Publish</PublishButton>
						<SaveButton type="button">Save</SaveButton>
					</FormActions>
				</Form>
			</Content>
			<SideBar />
		</Root>
	);
};

export default Page;
