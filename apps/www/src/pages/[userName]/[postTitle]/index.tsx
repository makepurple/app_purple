import {
	Avatar,
	Button,
	Divider,
	DocumentEditor,
	GitHubAvatarImage,
	NonIdealState,
	Paper
} from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { DocumentEditorValue } from "@makepurple/validators";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextImage from "next/image";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import tw from "twin.macro";
import { useGetPostCommentsQuery, useGetPostQuery, useViewPostMutation } from "../../../graphql";
import {
	CommentCard,
	CreateCommentForm,
	LoadingCommentCard,
	UserPageLayout
} from "../../../organisms";
import { pageProps, PageProps } from "../../../page-props/[userName]/[postTitle]";
import { CommentIcon, ThumbsUpIcon } from "../../../svgs";

const Content = tw(Paper)`
	flex
	flex-col
	items-stretch
`;

const PostContent = tw.div`
	flex
	flex-col
	items-stretch
	p-4
	gap-4
	sm:p-6
	sm:gap-6
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

const ThumbnailContainer = tw.div`
	rounded-t-md
	overflow-hidden
	border-b
	border-solid
	border-gray-300
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

const Actions = tw.div`
	sticky
	bottom-0
	flex
	items-center
	justify-between
	p-4
	border-t
	border-solid
	border-gray-300
	rounded-b-lg
	bg-white
	sm:px-6
`;

const UpvoteButton = tw(Button)`
	h-9
	gap-1.5
`;

const UpvoteCount = tw.span`
	text-base
	sm:leading-5
`;

const CommentsSection = tw(Paper)`
	flex
	flex-col
	items-stretch
	py-4
	sm:py-6
`;

const CommentFormContainer = tw.div`
	px-4
	sm:px-6
`;

const CommentsContainer = tw.div`
	px-4
	sm:px-6
`;

export const getServerSideProps = pageProps;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const { data: sessionData } = useSession();

	const viewer = sessionData?.user;

	const userName = router?.query.userName as string;
	const postTitle = router?.query.postTitle as string;

	const [{ data: postData }] = useGetPostQuery({
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

	const [, viewPost] = useViewPostMutation();

	/**
	 * !HACK
	 * @description Type is too deep/complex, so TS is throwing an error, even when it is correct.
	 * Ignoring this error, so that we can keep the types without it erroring.
	 * @author David Lee
	 * @date December 30, 2021
	 */
	// eslint-disable-next-line @typescript-eslint/ban-ts-comment
	// @ts-ignore
	const [{ data: commentsData, fetching }, getRef] = useRelayCursor(useGetPostCommentsQuery, {
		direction: "y",
		field: "comments",
		offset: 0,
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: 8,
			userName,
			postTitle
		}
	});

	const post = postData?.post;
	const comments = commentsData?.comments.nodes ?? [];

	const content = useMemo(() => {
		const validator = DocumentEditorValue.destruct();

		const [, resolved] = validator(post?.content as any);

		return resolved;
	}, [post?.content]);

	useEffect(() => {
		if (!post?.id) return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		viewPost({ where: { id: post.id } }).catch(() => null);
	}, [post?.id, viewPost]);

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
				{post.thumbnailUrl && (
					<ThumbnailContainer>
						<ThumbnailImage>
							<NextImage src={post.thumbnailUrl} layout="fill" objectFit="cover" />
						</ThumbnailImage>
					</ThumbnailContainer>
				)}
				<PostContent>
					<Title>{post.title}</Title>
					{post.description && <Description>{post.description}</Description>}
					<ByLine>
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
							<PublishedAt>
								{dayjs(post.publishedAt).format("MMM DD, YYYY")}
							</PublishedAt>
						</div>
					</ByLine>
					<Editor readOnly value={content}>
						<Editable />
					</Editor>
				</PostContent>
				<Actions>
					<UpvoteButton size="small" type="button" variant="secondary">
						<ThumbsUpIcon height={20} width={20} />
						<UpvoteCount>{FormatUtils.toGitHubFixed(post.upvotes)}</UpvoteCount>
					</UpvoteButton>
				</Actions>
			</Content>
			<CommentsSection tw="mt-6">
				{!!viewer && (
					<>
						<CommentFormContainer>
							<CreateCommentForm postId={post.id} />
						</CommentFormContainer>
						<Divider tw="my-4 sm:my-6" />
					</>
				)}
				<CommentsContainer>
					{!comments.length
						? !fetching && (
								<NonIdealState
									title="There's nothing here"
									subTitle="We couldn't find any comments"
									tw="shadow-none"
								>
									<CommentIcon height={96} width={96} />
								</NonIdealState>
						  )
						: comments.map((comment, i) => (
								<CommentCard
									key={comment.id}
									ref={getRef(i)}
									comment={comment}
									replies={comment.replies}
								/>
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingCommentCard key={i} />)}
				</CommentsContainer>
			</CommentsSection>
		</UserPageLayout>
	);
};

export default Page;
