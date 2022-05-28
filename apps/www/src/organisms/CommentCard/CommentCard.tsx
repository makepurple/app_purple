import {
	AlertDialog,
	Avatar,
	Button,
	DocumentEditor,
	DocumentEditorValue,
	GitHubAvatarImage,
	Spinner,
	ThumbsUpIcon,
	toast
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import composeRefs from "@seznam/compose-react-refs";
import { oneLine } from "common-tags";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef, useMemo, useRef, useState } from "react";
import tw, { styled } from "twin.macro";
import { useClient } from "urql";
import {
	CommentCardCommentFragment,
	GetCommentRepliesDocument,
	SortOrder,
	useDeleteCommentMutation,
	useGetCommentRepliesQuery,
	UserRole,
	useUnvoteCommentMutation,
	useUpvoteCommentMutation
} from "../../graphql";
import { CommentIcon, PencilIcon, UnfoldIcon } from "../../svgs";
import { PermissionUtils } from "../../utils";
import { CreateCommentForm } from "../CreateCommentForm";
import { LoadingCommentCard } from "../LoadingCommentCard";
import { UpdateCommentForm } from "../UpdateCommentForm";
import { UserAvatar } from "../UserAvatar";

const Root = tw.div`
	flex
	flex-col
`;

const CommenterInfo = styled.div<{ $collapsed: boolean }>`
	${tw`
		relative
		flex
		items-center
		transform
		duration-100
		ease-in
	`}

	${({ $collapsed }) => $collapsed && tw`pl-10`}
`;

const ExpandButton = tw(Button)`
	absolute
	left-0
	h-8
	w-8
`;

const CommenterInfoContent = tw.div`
	flex
	items-center
`;

const UserName = tw.div`
	text-base
	leading-none
	font-semibold
`;

const DeletedUserName = tw.div`
	text-base
	leading-none
	font-medium
	text-gray-500
`;

const Delimiter = tw.div`
	after:content["·"]
	mx-1
	font-bold
`;

const CreatedAt = tw.div`
	text-base
	leading-none
	text-gray-500
`;

const Body = tw.div`
	flex
	items-stretch
`;

const Content = tw.div`
	flex-grow
`;

const CollapseBar = tw.div`
	flex-shrink-0
	flex
	items-stretch
	justify-center
	w-6
	cursor-pointer
	[& > *]:first:bg-gray-500
	hover:[& > *]:first:bg-brand
`;

const Threadline = tw.i`
	w-1
	rounded-full
`;

const Editor = tw(DocumentEditor)`
	border-none
	shadow-none
	bg-transparent
`;

const Editable = tw(DocumentEditor.Editable)`
	p-0
	bg-transparent
`;

const DeletedComment = tw.div`
	inline-flex
	px-1
	border
	border-solid
	border-gray-200
	text-gray-500
	font-mono
	bg-violet-50
`;

const Actions = tw.div`
	flex
	items-center
	gap-2
`;

const UpvoteButton = styled(Button)<{ $upvoted: boolean }>`
	${tw`
		text-base
		leading-none
		font-normal
	`}

	${({ $upvoted }) => $upvoted && tw`text-green-700`}
`;

const ActionButton = tw(Button)`
	text-base
	leading-none
	font-normal
`;

const Replies = tw.div`
	flex
	flex-col
	items-stretch
	gap-1
`;

const LoadMoreButton = tw(Button)`
	text-base
	leading-none
	font-normal
`;

export interface CommentCardProps {
	className?: string;
	comment: CommentCardCommentFragment;
	style?: CSSProperties;
}

export const CommentCard = forwardRef<HTMLDivElement, CommentCardProps>((props, ref) => {
	const { className, comment, style } = props;

	const rootRef = useRef<HTMLDivElement>(null);
	const composedRef = composeRefs(ref, rootRef);

	const [collapsed, setCollapsed] = useState<boolean>(false);
	const [editing, setEditing] = useState<boolean>(false);
	const [fetchingMore, setFetchingMore] = useState<boolean>(false);

	const urqlClient = useClient();
	const router = useRouter();
	const { data: session, status } = useSession();

	const isMyComment = !!comment.author && session?.user.name === comment.author.name;

	const [{ data, fetching }, getReplies] = useGetCommentRepliesQuery({
		pause: true,
		requestPolicy: "cache-first",
		variables: {
			after: null,
			first: 8,
			orderBy: {
				updatedAt: SortOrder.Desc
			},
			where: {
				id: comment.id
			}
		}
	});

	const author = comment.author;
	const repliesCount = comment.repliesCount;

	const replies = data?.comment?.replies.nodes ?? [];
	const pageInfo = data?.comment?.replies.pageInfo;

	const shouldLoadFirst = !!repliesCount && !pageInfo;
	const hasNextPage = pageInfo ? pageInfo.hasNextPage : !!repliesCount;

	const canDelete = useMemo(() => {
		if (isMyComment) return true;
		if (!comment.author) return false;
		if (!session?.user) return false;

		return PermissionUtils.isGreaterRole(session.user.role as UserRole, comment.author.role);
	}, [comment.author, isMyComment, session?.user]);

	const [{ fetching: deleting }, deleteComment] = useDeleteCommentMutation();
	const [{ fetching: unvoting }, unvoteComment] = useUnvoteCommentMutation();
	const [{ fetching: upvoting }, upvoteComment] = useUpvoteCommentMutation();

	const loading = fetching || fetchingMore;

	const [showReplyForm, setShowReplyForm] = useState<boolean>(false);

	const wasEdited = useMemo(
		() => !dayjs(comment.createdAt).isSame(comment.updatedAt),
		[comment.createdAt, comment.updatedAt]
	);

	return (
		<Root ref={composedRef} className={className} style={style}>
			<CommenterInfo $collapsed={collapsed}>
				{collapsed && (
					<ExpandButton
						onClick={() => {
							setCollapsed(false);
						}}
						size="small"
						type="button"
						variant="secondary"
						tw="mr-2"
					>
						<UnfoldIcon height={16} width={16} />
					</ExpandButton>
				)}
				{author?.image ? (
					<Avatar border={2} tw="mr-2">
						<GitHubAvatarImage
							alt={author.name}
							src={author.image}
							height={36}
							width={36}
						/>
					</Avatar>
				) : (
					<UserAvatar border={2} height={36} width={36} tw="mr-2" />
				)}
				<CommenterInfoContent>
					{author ? (
						<UserName>{author.name}</UserName>
					) : (
						<DeletedUserName>[Deleted]</DeletedUserName>
					)}
					<Delimiter />
					<CreatedAt>
						{wasEdited && "Edited: "}
						{dayjs(comment.createdAt).fromNow()}
					</CreatedAt>
				</CommenterInfoContent>
			</CommenterInfo>
			<Body style={!collapsed ? {} : { display: "none" }}>
				<CollapseBar
					onClick={() => {
						setCollapsed(true);
					}}
					tw="mt-1 ml-2 mr-4"
				>
					<Threadline />
				</CollapseBar>
				<Content>
					{editing ? (
						<UpdateCommentForm
							comment={comment}
							onCancel={() => {
								setEditing(false);
							}}
							onSuccess={() => {
								setEditing(false);
							}}
						/>
					) : (
						<>
							{comment.content ? (
								<Editor readOnly value={comment.content as DocumentEditorValue}>
									<Editable />
								</Editor>
							) : (
								<DeletedComment>[removed]</DeletedComment>
							)}
							<Actions tw="mt-2">
								<UpvoteButton
									disabled={unvoting || upvoting || !author}
									onClick={async (e) => {
										e.preventDefault();

										if (status !== "authenticated") {
											await router.push("/signup");

											return;
										}

										if (comment.viewerUpvote) {
											await unvoteComment({
												where: { id: comment.id }
											}).catch(() => null);

											return;
										}

										const record = await upvoteComment({
											where: { id: comment.id }
										})
											.then((result) => result.data?.upvoteComment.record)
											.catch(() => null);

										if (!record?.viewerUpvote) return;

										toast.success("You liked this post! 🎉");
									}}
									size="small"
									type="button"
									variant="secondary"
									$upvoted={!!comment.viewerUpvote}
								>
									{unvoting || upvoting ? (
										<Spinner height={16} width={16} tw="mr-1" />
									) : (
										<ThumbsUpIcon height={16} width={16} tw="mr-1" />
									)}
									<span>{comment.upvotes.toLocaleString()}</span>
								</UpvoteButton>
								{status === "authenticated" && (
									<ActionButton
										disabled={!author}
										onClick={() => {
											setShowReplyForm(
												(oldShowReplyForm) => !oldShowReplyForm
											);
										}}
										size="small"
										variant="secondary"
									>
										<CommentIcon height={16} width={16} tw="mr-1" />
										<span>Reply</span>
									</ActionButton>
								)}
								{isMyComment && (
									<ActionButton
										disabled={!author}
										onClick={() => {
											setEditing(true);
										}}
										size="small"
										variant="secondary"
									>
										<PencilIcon height={16} width={16} tw="mr-1" />
										<span>Edit</span>
									</ActionButton>
								)}
								{canDelete && (
									<AlertDialog
										description={oneLine`
									Are you sure you wish to delete this comment? This cannot be
									undone.
								`}
										onConfirm={async () => {
											const didSucceed = await deleteComment({
												where: {
													id: comment.id
												}
											})
												.then(
													(result) => !!result.data?.deleteComment.record
												)
												.catch(() => false);

											if (!didSucceed) {
												toast.error("Could not delete this comment");

												return;
											}

											toast.success("Comment was deleted");
										}}
										text="Yes, delete comment"
									>
										<ActionButton
											disabled={deleting || !author}
											size="small"
											variant="alert"
										>
											Delete
										</ActionButton>
									</AlertDialog>
								)}
							</Actions>
						</>
					)}
					{showReplyForm && (
						<div tw="py-4">
							<CreateCommentForm
								codeExampleId={comment.codeExampleId}
								commentId={comment.id}
								onCancel={() => {
									setShowReplyForm(false);
								}}
								onSuccess={() => {
									getReplies();

									setShowReplyForm(false);
								}}
								postId={comment.postId}
							/>
						</div>
					)}
					<Replies tw="mt-2">
						{replies.map((reply) => (
							<CommentCard key={reply.id} comment={reply} />
						))}
						{fetching &&
							Array.from({ length: 3 }, (_, i) => <LoadingCommentCard key={i} />)}
					</Replies>
					{hasNextPage && (
						<LoadMoreButton
							disabled={fetching}
							onClick={async () => {
								if (shouldLoadFirst) {
									getReplies();

									return;
								}

								if (!pageInfo?.endCursor) return;

								setFetchingMore(true);

								await urqlClient
									.query(GetCommentRepliesDocument, {
										after: pageInfo.endCursor,
										first: 8,
										orderBy: {
											updatedAt: SortOrder.Desc
										},
										where: {
											id: comment.id
										}
									})
									.toPromise();

								setFetchingMore(false);
							}}
							size="small"
							type="button"
							variant="secondary"
							tw="mt-1"
						>
							<span>Load more</span>
							{loading && <Spinner tw="ml-2" />}
						</LoadMoreButton>
					)}
				</Content>
			</Body>
		</Root>
	);
});

CommentCard.displayName = "CommentCard";
