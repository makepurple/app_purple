import { Anchor, Button, Paper } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextImage from "next/image";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import toast from "react-hot-toast";
import tw, { styled } from "twin.macro";
import { UserActivityCardUpvotePostFragment, useUpvotePostMutation } from "../../graphql";
import { ThumbsUpIcon } from "../../svgs";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-start
`;

const Content = tw(Paper)`
	self-stretch
	flex
	flex-row
	items-stretch
	p-4
`;

const ThumbnailContainer = tw.a`
	flex-shrink-0
	w-64
`;

const Thumbnail = tw.div`
	relative
	aspect-h-5
	aspect-w-9
	rounded-md
	overflow-hidden
`;

const PostContent = tw.div`
	flex
	flex-col
	items-start
`;

const Title = tw(Anchor)`
	text-xl
	font-bold
	leading-none
	text-black
	line-clamp-2
`;

const DescriptionContainer = tw.a`
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

const KarmaContainer = tw.div`
	flex
	flex-row
	items-end
	mt-1
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

export interface UserActivityCardUpvotePostProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardUpvotePostFragment;
}

export const UserActivityCardUpvotePost = forwardRef<
	HTMLDivElement,
	UserActivityCardUpvotePostProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { post } = userActivity;

	const [{ fetching }, upvotePost] = useUpvotePostMutation();

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				upvoted a post
			</UserActivityCardHeader>
			<Content tw="mt-2">
				{!!post.thumbnailUrl && (
					<NextLink
						href="/[userName]/[postTitle]"
						as={`/${post.authorName}/${post.title}`}
						passHref
					>
						<ThumbnailContainer tw="mr-4">
							<Thumbnail>
								<NextImage
									src={post.thumbnailUrl}
									layout="fill"
									objectFit="cover"
								/>
							</Thumbnail>
						</ThumbnailContainer>
					</NextLink>
				)}
				<PostContent>
					<NextLink
						href="/[userName]/[postTitle]"
						as={`/${post.authorName}/${post.title}`}
						passHref
					>
						<Title>{post.title}</Title>
					</NextLink>
					{post.description && (
						<NextLink
							href="/[userName]/[postTitle]"
							as={`/${post.authorName}/${post.title}`}
							passHref
						>
							<DescriptionContainer>
								<Description>{post.description}</Description>
							</DescriptionContainer>
						</NextLink>
					)}
					<PostedDetails>
						<NextLink href={`/${post.authorName}`} passHref>
							<AuthorName
								onClick={(e) => e.stopPropagation()}
								title={post.authorName}
							>
								{post.authorName}
							</AuthorName>
						</NextLink>
						<Delimiter>·</Delimiter>
						{!!post.publishedAt && (
							<PublishedAt>
								{dayjs(post.publishedAt).format("MMM D, YYYY")}
							</PublishedAt>
						)}
					</PostedDetails>
					<KarmaContainer tw="mt-2">
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
							<UpvoteCount>{post.upvotes.toLocaleString()}</UpvoteCount>
						</UpvoteButton>
					</KarmaContainer>
				</PostContent>
			</Content>
		</Root>
	);
});

UserActivityCardUpvotePost.displayName = "UserActivityCardUpvotePost";
