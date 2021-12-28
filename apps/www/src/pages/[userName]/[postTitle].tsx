import { Avatar, DocumentEditor, GitHubAvatarImage, Paper } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import { DocumentEditorValue } from "@makepurple/validators";
import { NextPage } from "next";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useMemo } from "react";
import tw from "twin.macro";
import { useGetPostQuery } from "../../graphql";
import { UserPageLayout } from "../../organisms";
import { pageProps, PageProps } from "../../page-props/[userName]/[postTitle]";

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h1`
	flex
	justify-center
	text-4xl
	text-center
	font-bold
`;

const Description = tw.h2`
	text-lg
	text-gray-500
`;

const ByLine = tw.div`
	flex
	items-center
`;

const PublishedAt = tw.div`
	text-gray-500
`;

const ThumbnailImage = tw.div`
	aspect-w-16
	aspect-h-9
`;

const Editor = tw(DocumentEditor)`
	border-none
	shadow-none
`;

const Editable = tw(DocumentEditor.Editable)`
	p-0
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

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

	const post = data?.post;

	const content = useMemo(() => {
		const validator = DocumentEditorValue.destruct();

		const [, resolved] = validator(post?.content as any);

		return resolved;
	}, [post?.content]);

	/**
	 * TODO
	 * @description Handle null case gracefully in the future
	 * @author David Lee
	 * @date December 27, 2021
	 */
	if (!post?.title) return null;
	if (!post.publishedAt) return null;
	if (!content) return null;

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
			<Content>
				<Title tw="mb-6">{post.title}</Title>
				{post.description && <Description tw="mb-6">{post.description}</Description>}
				<ByLine tw="mb-8">
					{post.author.image && (
						<Avatar border={2} tw="mr-2">
							<GitHubAvatarImage
								alt={post.author.name}
								src={post.author.image}
								height={48}
								width={48}
							/>
						</Avatar>
					)}
					<div>
						<div>{post.author.name}</div>
						<PublishedAt>{dayjs(post.publishedAt).format("MMM DD, YYYY")}</PublishedAt>
					</div>
				</ByLine>
				{post.thumbnailUrl && (
					<ThumbnailImage tw="mb-8">
						<NextImage src={post.thumbnailUrl} layout="fill" objectFit="cover" />
					</ThumbnailImage>
				)}
				<Editor readOnly value={content}>
					<Editable />
				</Editor>
			</Content>
		</UserPageLayout>
	);
};

export default Page;
