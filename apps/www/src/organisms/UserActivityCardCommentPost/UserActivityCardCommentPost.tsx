import { Anchor, Button, Paper, Tags, toast } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextImage from "next/image";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw, { styled } from "twin.macro";
import {
	UserActivityCardCommentPostUserActivityCommentPostFragment,
	useUpvotePostMutation
} from "../../graphql";
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
	w-32
	sm:w-64
`;

const Thumbnail = tw.div`
	relative
	aspect-h-1
	aspect-w-1
	sm:aspect-h-5
	sm:aspect-w-9
	rounded-md
	overflow-hidden
`;

const PostContent = tw.div`
	flex
	flex-col
	items-start
	min-w-0
`;

const Title = tw(Anchor)`
	w-full
	text-xl
	font-bold
	leading-none
	text-black
	truncate
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
	truncate
`;

const PostedDetails = tw.div`
	flex
	flex-row
	items-center
	w-full
	truncate
`;

const Delimiter = tw.span`
	font-bold
	mx-1
`;

const PublishedAt = tw.span`
	text-base
	text-gray-500
	whitespace-nowrap
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

export interface UserActivityCardCommentPostProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardCommentPostUserActivityCommentPostFragment;
}

export const UserActivityCardCommentPost = forwardRef<
	HTMLDivElement,
	UserActivityCardCommentPostProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { comment } = userActivity;
	const { post } = comment;

	const [{ fetching }, upvotePost] = useUpvotePostMutation();

	const skills = post?.skills.nodes ?? [];

	/**
	 * !HACK
	 * @description Should not reach here, but in-case it does, return a div so that we don't break
	 * pagination. It does mean that there might be an unexpected gap though.
	 * @author David Lee
	 * @date February 3, 2022
	 */
	if (!post) return <div ref={ref} />;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				commented on a post
			</UserActivityCardHeader>
			<Content tw="mt-2">
				{!!post.thumbnailUrl && (
					<NextLink
						href="/[userName]/[postTitle]"
						as={`/${post.authorName}/${post.urlSlug}`}
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
						as={`/${post.authorName}/${post.urlSlug}`}
						passHref
					>
						<Title>{post.title}</Title>
					</NextLink>
					{post.description && (
						<NextLink
							href="/[userName]/[postTitle]"
							as={`/${post.authorName}/${post.urlSlug}`}
							passHref
						>
							<DescriptionContainer>
								<Description>{post.description}</Description>
							</DescriptionContainer>
						</NextLink>
					)}
					<Tags type="positive" tw="mt-3">
						{skills.map((skill) => (
							<NextLink
								key={skill.id}
								href="/s/[skillOwner]/[skillName]"
								as={`/s/${skill.owner}/${skill.owner}`}
								passHref
							>
								<Tags.Tag id={skill.id} title={`${skill.owner}/${skill.name}`}>
									{skill.name}
								</Tags.Tag>
							</NextLink>
						))}
					</Tags>
					<PostedDetails tw="mt-3">
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

UserActivityCardCommentPost.displayName = "UserActivityCardCommentPost";
