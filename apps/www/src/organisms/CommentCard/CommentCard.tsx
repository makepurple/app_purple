import {
	Avatar,
	Button,
	Divider,
	DocumentEditor,
	DocumentEditorValue,
	GitHubAvatarImage,
	Spinner,
	ThumbsUpIcon
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import composeRefs from "@seznam/compose-react-refs";
import React, { CSSProperties, forwardRef, useRef, useState } from "react";
import { flushSync } from "react-dom";
import toast from "react-hot-toast";
import { useIntersection } from "react-use";
import tw, { styled } from "twin.macro";
import {
	CommentCardCommentFragment,
	CommentRepliesCommentConnectionFragment,
	useGetCommentRepliesQuery,
	useUnvoteCommentMutation,
	useUpvoteCommentMutation
} from "../../graphql";
import { CommentIcon, UnfoldIcon } from "../../svgs";
import { CreateCommentForm } from "../CreateCommentForm";
import { LoadingCommentCard } from "../LoadingCommentCard";

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
	hover:[& > *]:first:bg-indigo-500
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
	border
	border-solid
	border-gray-200
	text-gray-500
	font-mono
	bg-indigo-50
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
	replies?: CommentRepliesCommentConnectionFragment;
	style?: CSSProperties;
}

export const CommentCard = forwardRef<HTMLDivElement, CommentCardProps>((props, ref) => {
	const { className, comment, replies, style } = props;

	const rootRef = useRef<HTMLDivElement>(null);
	const composedRef = composeRefs(ref, rootRef);

	const intersection = useIntersection(rootRef, { threshold: 1 });
	const isInView = (intersection?.intersectionRatio ?? 0) >= 1;

	const [collapsed, setCollapsed] = useState<boolean>(false);

	const [cursor, setCursor] = useState<string | null>(null);

	const [{ data, fetching }, getReplies] = useGetCommentRepliesQuery({
		pause: !isInView || !!replies,
		variables: {
			after: cursor,
			first: 8,
			where: {
				id: comment.id
			}
		}
	});

	const commentReplies: readonly (CommentCardCommentFragment & {
		replies?: CommentRepliesCommentConnectionFragment;
	})[] = replies?.nodes ?? data?.comment?.replies.nodes ?? [];
	const pageInfo = replies?.pageInfo ?? data?.comment?.replies.pageInfo;

	const [{ fetching: unvoting }, unvoteComment] = useUnvoteCommentMutation();
	const [{ fetching: upvoting }, upvoteComment] = useUpvoteCommentMutation();

	const [showReplyForm, setShowReplyForm] = useState<boolean>(false);

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
				{comment.author.image && (
					<Avatar border={2} tw="mr-2">
						<GitHubAvatarImage
							alt={comment.author.name}
							src={comment.author.image}
							height={36}
							width={36}
						/>
					</Avatar>
				)}
				<CommenterInfoContent>
					<UserName>{comment.author.name}</UserName>
					<Delimiter />
					<CreatedAt>{dayjs(comment.createdAt).fromNow()}</CreatedAt>
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
					{comment.content ? (
						<Editor readOnly value={comment.content as DocumentEditorValue}>
							<Editable />
						</Editor>
					) : (
						<DeletedComment>[removed]</DeletedComment>
					)}
					<Actions tw="mt-2">
						<UpvoteButton
							onClick={async (e) => {
								e.preventDefault();

								if (comment.viewerUpvote) {
									await unvoteComment({
										where: { id: comment.id }
									}).catch(() => null);

									return;
								}

								const record = await upvoteComment({
									data: { upvote: true },
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
						<ActionButton
							onClick={() => {
								setShowReplyForm((oldShowReplyForm) => !oldShowReplyForm);
							}}
							size="small"
							variant="secondary"
						>
							<CommentIcon height={16} width={16} tw="mr-1" />
							<span>Reply</span>
						</ActionButton>
					</Actions>
					{showReplyForm && (
						<div tw="py-4">
							<CreateCommentForm
								onCancel={() => {
									setShowReplyForm(false);
								}}
								target={{ type: "comment", id: comment.id }}
							/>
						</div>
					)}
					<Replies tw="mt-2">
						{commentReplies.map((reply) => (
							<CommentCard key={reply.id} comment={reply} replies={reply.replies} />
						))}
						{fetching &&
							Array.from({ length: 3 }, (_, i) => <LoadingCommentCard key={i} />)}
					</Replies>
					{pageInfo?.hasNextPage && (
						<LoadMoreButton
							disabled={fetching}
							onClick={() => {
								flushSync(() => {
									pageInfo.endCursor && setCursor(pageInfo.endCursor);
								});

								getReplies();
							}}
							size="small"
							type="button"
							variant="secondary"
							tw="mt-1"
						>
							Load more
						</LoadMoreButton>
					)}
				</Content>
			</Body>
		</Root>
	);
});

CommentCard.displayName = "CommentCard";
