import { Input, MainContainer, Paper } from "@/client/atoms";
import { useGetPostQuery } from "@/client/graphql";
import { DocumentEditor } from "@/client/molecules";
import { PostGuidelines, PostImageInput } from "@/client/organisms";
import { PageProps, pageProps } from "@/client/page-props/[username]/draft";
import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { useState } from "react";
import type { Descendant } from "slate";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col-reverse
	lg:flex-row
	items-start
	my-12
`;

const Content = tw(Paper)`
	flex-grow
	flex
	flex-col
	p-6
`;

const AddACoverImageButton = tw(PostImageInput)`
	w-52
	mb-10
`;

const StyledDocumentEditor = tw(DocumentEditor)`
	mt-4
	shadow-none
`;

const SideBar = tw(PostGuidelines)`
	flex-shrink-0
	w-full
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
				<Input name="title" placeholder="Title" type="text" aria-label="title" />
				<StyledDocumentEditor value={value} onChange={(newValue) => setValue(newValue)}>
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
						<DocumentEditor.Toolbar.Image />
					</DocumentEditor.Toolbar>
					<DocumentEditor.Editable
						name="content"
						placeholder="Tell us something interesting..."
						aria-label="content"
					/>
				</StyledDocumentEditor>
			</Content>
			<SideBar />
		</Root>
	);
};

export default Page;
