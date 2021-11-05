import { Form, FormButton, FormGroup, Input, MainContainer, Paper, TextArea } from "@/client/atoms";
import { useGetPostQuery } from "@/client/graphql";
import { DocumentEditor } from "@/client/molecules";
import { DocumentEditorPostImageButton, PostGuidelines, PostImageInput } from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[username]/draft";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import type { Descendant } from "slate";
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

const StyledFormGroup = tw(FormGroup)`
	mt-4
`;

const AddACoverImageButton = tw(PostImageInput)`
	w-52
	mb-10
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

	const post = data?.post;

	const [value, setValue] = useState<Descendant[]>([
		{
			type: "paragraph",
			children: [{ text: "" }]
		}
	]);

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
				<AddACoverImageButton
					onUpload={(thumbnailUrl) => {
						console.log(thumbnailUrl);
					}}
					postId={post.id}
				>
					Add a cover image
				</AddACoverImageButton>
				<Form>
					<FormGroup>
						<Input name="title" placeholder="Title" type="text" aria-label="title" />
					</FormGroup>
					<StyledFormGroup>
						<TextArea
							name="description"
							placeholder="Description"
							aria-label="description"
						/>
					</StyledFormGroup>
					<StyledFormGroup>
						<StyledDocumentEditor
							value={value}
							onChange={(newValue) => setValue(newValue)}
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
								name="content"
								placeholder="Tell us something interesting..."
								aria-label="content"
							/>
						</StyledDocumentEditor>
					</StyledFormGroup>
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
