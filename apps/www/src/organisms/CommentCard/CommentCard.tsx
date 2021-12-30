import {
	Avatar,
	Button,
	DocumentEditor,
	DocumentEditorValue,
	GitHubAvatarImage,
	ThumbsUpIcon
} from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import React, { CSSProperties, forwardRef, useState } from "react";
import tw, { styled } from "twin.macro";
import { CommentCardCommentFragment } from "../../graphql";
import { CommentIcon, ThumbsDownIcon, UnfoldIcon } from "../../svgs";

const Root = tw.div`
	flex
	flex-col
`;

const PosterInfo = styled.div<{ $collapsed: boolean }>`
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

const PosterInfoContent = tw.div`
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

const Content = tw.div``;

const CollapseBar = tw.div`
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

const ActionButton = tw(Button)`
	h-8
	text-base
	leading-none
	font-normal
`;

const UpvoteButton = tw(Button)`
	h-8
	w-8
	p-0
`;

const Upvotes = tw.div`
	flex
	items-center
	gap-2
`;

export interface CommentCardProps {
	className?: string;
	comment: CommentCardCommentFragment;
	style?: CSSProperties;
}

export const CommentCard = forwardRef<HTMLDivElement, CommentCardProps>((props, ref) => {
	const { className, comment, style } = props;

	const [collapsed, setCollapsed] = useState<boolean>(false);

	return (
		<Root ref={ref} className={className} style={style}>
			<PosterInfo $collapsed={collapsed}>
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
						<GitHubAvatarImage src={comment.author.image} height={36} width={36} />
					</Avatar>
				)}
				<PosterInfoContent>
					<UserName>{comment.author.name}</UserName>
					<Delimiter />
					<CreatedAt>{dayjs(comment.createdAt).fromNow()}</CreatedAt>
				</PosterInfoContent>
			</PosterInfo>
			{!collapsed && (
				<Body>
					<CollapseBar
						onClick={() => {
							setCollapsed(true);
						}}
						tw="my-1 ml-2 mr-4"
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
							<Upvotes>
								<UpvoteButton size="small" variant="secondary">
									<ThumbsUpIcon height={16} width={16} />
								</UpvoteButton>
								<span>{comment.upvotes.toLocaleString()}</span>
								<UpvoteButton size="small" variant="secondary">
									<ThumbsDownIcon height={16} width={16} />
								</UpvoteButton>
							</Upvotes>
							<ActionButton size="small" variant="secondary">
								<CommentIcon height={16} width={16} tw="mr-2" />
								<span>Reply</span>
							</ActionButton>
						</Actions>
					</Content>
				</Body>
			)}
		</Root>
	);
});

CommentCard.displayName = "CommentCard";
