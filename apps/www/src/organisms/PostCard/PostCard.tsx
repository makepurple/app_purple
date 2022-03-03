import { Anchor, Button, Paper, ThumbsUpIcon } from "@makepurple/components";
import { dayjs, FormatUtils } from "@makepurple/utils";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import toast from "react-hot-toast";
import tw, { styled } from "twin.macro";
import { PostCardPostFragment, useDeletePostMutation, useUpvotePostMutation } from "../../graphql";

const DeleteButton = tw(Button)`
	opacity-0
`;

const Root = styled(Paper)`
	${tw`
		flex
		flex-col-reverse
		height[22rem]
		p-3
		cursor-pointer
		hover:bg-indigo-50
		sm:flex-row
		sm:h-52
		sm:p-4
	`}

	&:hover ${DeleteButton} {
		${tw`
			opacity-100
		`}
	}
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
`;

const MainAnchor = tw.a`
	flex-grow
	flex
	flex-col
`;

const Title = tw.span`
	mb-2
	text-xl
	font-bold
	leading-none
	text-black
	line-clamp-2
`;

const DescriptionContainer = tw.div`
	flex-grow
`;

const Description = tw.p`
	text-base
	text-gray-500
	line-clamp-1
	sm:line-clamp-3
`;

const AuthorName = tw(Anchor)`
	text-base
	font-semibold
	text-black
`;

const PostedDetails = tw.div`
	flex
	flex-row
	items-center
	
`;

const Delimiter = tw.span`
	mx-1
	font-bold
`;

const PublishedAt = tw.span`
	text-base
	text-gray-500
`;

const NotPublished = tw.span`
	text-base
	text-red-800
`;

const Actions = tw.div`
	flex
	flex-row
	items-stretch
	justify-between
	h-8
`;

const UpvoteButton = styled(Button)<{ $upvoted: boolean }>`
	${tw`
		flex
		items-center
		font-normal
	`}

	${({ $upvoted }) => $upvoted && tw`text-green-700`}
`;

const UpvoteCount = tw.span`
	text-sm
	leading-6
	sm:leading-5
`;

const Thumbnail = tw.a`
	relative
	flex-shrink-0
	h-44
	w-full
	mb-3
	sm:w-44
	sm:ml-4
	sm:mb-0
	overflow-hidden
	rounded-md
`;

export interface PostCardProps {
	className?: string;
	post: PostCardPostFragment;
	style?: CSSProperties;
}

export const PostCard = forwardRef<HTMLDivElement, PostCardProps>((props, ref) => {
	const { className, post, style } = props;

	const router = useRouter();

	const [{ fetching: removing }, removePost] = useDeletePostMutation();
	const [{ fetching: upvoting }, upvotePost] = useUpvotePostMutation();

	const fetching = removing || upvoting;

	const postUrl: string = `/${post.authorName}/${post.urlSlug}`;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push(postUrl);
			}}
			style={style}
		>
			<Info>
				<NextLink href={postUrl} passHref>
					<MainAnchor>
						<Title title={post.title ?? ""}>{post.title}</Title>
						{post.description && (
							<DescriptionContainer>
								<Description>{post.description}</Description>
							</DescriptionContainer>
						)}
					</MainAnchor>
				</NextLink>
				<PostedDetails>
					<NextLink href={`/${post.author.name}`} passHref>
						<AuthorName onClick={(e) => e.stopPropagation()} title={post.author.name}>
							{post.author.name}
						</AuthorName>
					</NextLink>
					<Delimiter>·</Delimiter>
					{post.publishedAt ? (
						<PublishedAt>{dayjs(post.publishedAt).format("MMM D, YYYY")}</PublishedAt>
					) : (
						<NotPublished>Draft</NotPublished>
					)}
				</PostedDetails>
				<Actions tw="mt-2">
					<UpvoteButton
						disabled={fetching || !!post.viewerUpvote}
						onClick={async (e) => {
							e.stopPropagation();

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
						$upvoted={!!post.viewerUpvote}
					>
						<ThumbsUpIcon height={16} width={16} tw="mr-1" />
						<UpvoteCount>{FormatUtils.toGitHubFixed(post.upvotes)}</UpvoteCount>
					</UpvoteButton>
					<DeleteButton
						disabled={fetching}
						onClick={async (e) => {
							e.stopPropagation();

							const didSucceed = await removePost({ where: { id: post.id } })
								.then((result) => !!result.data?.deletePost.record)
								.catch(() => false);

							if (!didSucceed) {
								toast.error("Could not delete this post");

								return;
							}

							toast.success("Post was successfully deleted");
						}}
						size="small"
						type="button"
						variant="alert"
					>
						Delete
					</DeleteButton>
				</Actions>
			</Info>
			{post.thumbnailUrl && (
				<NextLink href={postUrl} passHref>
					<Thumbnail onClick={(e) => e.stopPropagation()}>
						<NextImage
							alt="thumbnail"
							src={post.thumbnailUrl}
							layout="fill"
							objectFit="cover"
						/>
					</Thumbnail>
				</NextLink>
			)}
		</Root>
	);
});

PostCard.displayName = "PostCard";
