import {
	AlertDialog,
	Avatar,
	Button,
	Divider,
	DocumentEditor,
	GitHubAvatarImage,
	NonIdealState,
	Paper,
	ShareButton,
	Tags,
	toast
} from "@makepurple/components";
import { useRelayCursor } from "@makepurple/hooks";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { DocumentEditorValue } from "@makepurple/validators";
import { oneLine, oneLineCommaListsAnd } from "common-tags";
import { NextPage } from "next";
import { useSession } from "next-auth/react";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useMemo } from "react";
import tw from "twin.macro";
import {
	GetPostCommentsDocument,
	SortOrder,
	useDeletePostMutation,
	useGetPostQuery,
	UserRole,
	useUpvotePostMutation,
	useViewPostMutation
} from "../../../graphql";
import {
	CommentCard,
	CreateCommentForm,
	LoadingCommentCard,
	Seo,
	UserPageLayout
} from "../../../organisms";
import { pageProps, PageProps, paths } from "../../../page-props/[userName]/[postTitle]";
import { CommentIcon, ShareIcon, ThumbsUpIcon } from "../../../svgs";
import { PermissionUtils } from "../../../utils";

const MIN_SEO_READ_TIME = 3;
const SEO_SKILL_COUNT = 5;

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
	text-3xl
	text-center
	font-bold
	sm:text-4xl
`;

const Skills = tw(Tags)`
	self-center
	max-width[24rem]
`;

const Description = tw.h2`
	text-base
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
	aspect-w-5
	aspect-h-2
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
	z-index[1]
	sm:px-6
`;

const AnybodyActions = tw.div`
	flex
	flex-row
	items-stretch
	h-full
	gap-3
`;

const UpvoteButton = tw(Button)`
	h-9
	gap-1.5
`;

const UpvoteCount = tw.span`
	text-base
	sm:leading-5
`;

const OwnerActions = tw.div`
	flex
	flex-row
	items-stretch
	h-full
	gap-3
`;

const EditButton = tw(Button)`
	h-9
	w-20
	text-base
`;

const DeleteButton = tw(Button)`
	h-9
	w-20
	text-base
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

export const getStaticProps = pageProps;
export const getStaticPaths = paths;

export const Page: NextPage<PageProps> = () => {
	const router = useRouter();

	const { data: session, status } = useSession();

	const [{ fetching: removing }, removePost] = useDeletePostMutation();
	const [{ fetching: upvoting }, upvotePost] = useUpvotePostMutation();

	const mutating = removing || upvoting;

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
	const [{ data: commentsData, fetching }, { getRef }] = useRelayCursor({
		query: GetPostCommentsDocument,
		field: "post.comments",
		offset: 0,
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: 8,
			orderBy: {
				updatedAt: SortOrder.Desc
			},
			userName,
			postTitle
		}
	});

	const post = postData?.post;
	const skills = useMemo(() => post?.skills.nodes ?? [], [post?.skills.nodes]);
	const comments = commentsData?.post?.comments.nodes ?? [];

	const shareTags = useMemo(() => ["makepurple", ...skills.map((skill) => skill.name)], [skills]);

	const isMyPost = session?.user.name === post?.authorName;

	const canDelete = useMemo(() => {
		if (isMyPost) return true;
		if (!session?.user) return false;
		if (!post) return false;

		return PermissionUtils.isGreaterRole(session.user.role as UserRole, post?.author.role);
	}, [isMyPost, post, session?.user]);

	const content = useMemo(() => {
		const validator = DocumentEditorValue.destruct();

		const [, resolved] = validator(post?.content as any);

		return resolved;
	}, [post?.content]);

	useEffect(() => {
		if (status !== "authenticated") return;
		if (!post?.id) return;

		// eslint-disable-next-line @typescript-eslint/no-floating-promises
		viewPost({ where: { id: post.id } }).catch(() => null);
	}, [post?.id, status, viewPost]);

	const metaDescription = useMemo(() => {
		const skillNames = skills.slice(0, SEO_SKILL_COUNT).map((skill) => skill.name);

		if (!post?.description) {
			return oneLineCommaListsAnd`
				${post?.title} by ${userName} on ${skillNames}
			`;
		}

		return oneLineCommaListsAnd`
			${post.description} | ${userName}'s post on ${skillNames}
		`;
	}, [post?.description, post?.title, skills, userName]);

	/**
	 * TODO
	 * @description Handle null case gracefully in the future
	 * @author David Lee
	 * @date December 27, 2021
	 */
	if (!post?.title) return null;
	if (!post.publishedAt) return null;
	if (!content) return null;

	const shouldIndex = post.readTime >= MIN_SEO_READ_TIME && !!post.description && !!skills.length;

	return (
		<UserPageLayout selectedTab="posts" userName={userName}>
			<Seo
				title={post.title}
				canonical={`/${userName}/${post.urlSlug}`}
				description={metaDescription}
				robots={{
					follow: true,
					index: shouldIndex
				}}
			/>
			<Content>
				{post.thumbnailUrl && (
					<ThumbnailContainer>
						<ThumbnailImage>
							<NextImage
								alt="thumbnail"
								src={post.thumbnailUrl}
								layout="fill"
								objectFit="cover"
							/>
						</ThumbnailImage>
					</ThumbnailContainer>
				)}
				<PostContent>
					<Title>{post.title}</Title>
					<Skills type="positive">
						{skills.map((skill) => (
							<Tags.Tag key={skill.id} id={skill.id}>
								{skill.name}
							</Tags.Tag>
						))}
					</Skills>
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
					<AnybodyActions>
						<UpvoteButton
							disabled={mutating}
							onClick={async (e) => {
								e.stopPropagation();

								if (status !== "authenticated") {
									await router.push("/signup");

									return;
								}

								const didSucceed = await upvotePost({ where: { id: post.id } })
									.then((result) => !!result.data?.upvotePost.record)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not like this post");

									return;
								}

								toast.success("You liked this post! 🎉");
							}}
							size="small"
							type="button"
							variant="secondary"
						>
							<ThumbsUpIcon height={20} width={20} />
							<UpvoteCount>{FormatUtils.toGitHubFixed(post.upvotes)}</UpvoteCount>
						</UpvoteButton>
						<ShareButton
							share={{
								url: `https://makepurple.com/${userName}/${post.urlSlug}`,
								title: post.title,
								text: oneLine`
									Check out ${isMyPost ? "my" : `${userName}'s`} post on
									MakePurple! "${post.title}"
								`
							}}
							size="small"
							tags={shareTags}
							utm={{
								content: "user_post"
							}}
							variant="secondary"
						>
							<ShareIcon height={16} width={16} />
							<span tw="ml-1">Share</span>
						</ShareButton>
					</AnybodyActions>
					{isMyPost && (
						<OwnerActions>
							<NextLink
								href="/[userName]/[postTitle]/edit"
								as={`/${userName}/${postTitle}/edit`}
								passHref
							>
								<EditButton as="a" size="small" variant="secondary">
									Edit
								</EditButton>
							</NextLink>
							{canDelete && (
								<AlertDialog
									description={oneLine`
									Are you sure you wish to delete this post? This cannot be undone.
								`}
									onConfirm={async () => {
										const didSucceed = await removePost({
											where: { id: post.id }
										})
											.then((result) => !!result.data?.deletePost)
											.catch(() => false);

										if (!didSucceed) {
											toast.error("Could not delete this post");

											return;
										}

										toast.success("Post was successfully deleted");

										await router.push(
											"/[userName]/posts",
											`/${userName}/posts`
										);
									}}
									text="Yes, delete post"
								>
									<DeleteButton
										disabled={mutating}
										onClick={(e) => {
											e.stopPropagation();
										}}
										size="small"
										type="button"
										variant="alert"
									>
										Delete
									</DeleteButton>
								</AlertDialog>
							)}
						</OwnerActions>
					)}
				</Actions>
			</Content>
			<CommentsSection tw="mt-6">
				{!!session?.user && (
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
								<CommentCard key={comment.id} ref={getRef(i)} comment={comment} />
						  ))}
					{fetching &&
						Array.from({ length: 3 }, (_, i) => <LoadingCommentCard key={i} />)}
				</CommentsContainer>
			</CommentsSection>
		</UserPageLayout>
	);
};

export default Page;
