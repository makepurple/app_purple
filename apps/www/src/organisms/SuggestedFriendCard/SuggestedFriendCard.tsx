import { Avatar, Divider, GitHubAvatarImage, Paper } from "@makepurple/components";
import { RenderComponentProps as MasonicRenderProps } from "masonic";
import NextImage from "next/image";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { SuggestedFriendCardUserFragment } from "../../graphql";

const Root = tw(Paper)`
	flex
	flex-col
	items-stretch
	overflow-hidden
`;

const ThumbnailContainer = tw.div`
	relative
`;

const PostThumbnail = tw.div`
	aspect-h-9
	aspect-w-16
`;

const UserAvatar = tw(Avatar)`
	absolute
	top-3
	left-3
`;

const Content = tw.div`
	flex
	flex-col
	items-stretch
`;

const PostInfo = tw.a`
	flex
	flex-col
	items-stretch
	p-3
`;

const PostTitle = tw.div`
	leading-none
	text-black
`;

const PostDescription = tw.div`
	text-left
	text-sm
	line-clamp-3
	text-gray-500
`;

const UserInfo = tw.a`
	flex
	flex-col
	items-stretch
	p-3
`;

const UserName = tw.div`
	leading-none
	text-indigo-600
`;

const UserDescription = tw.div`
	text-left
	text-sm
	line-clamp-2
	text-gray-500
`;

export interface SuggestedFriendCardProps
	extends MasonicRenderProps<SuggestedFriendCardUserFragment> {
	className?: string;
	style?: CSSProperties;
}

export const SuggestedFriendCard = forwardRef<HTMLDivElement, SuggestedFriendCardProps>(
	(props, ref) => {
		const { className, data: user, style } = props;

		const post = user.posts.nodes[0];

		return (
			<Root ref={ref} className={className} style={style}>
				<ThumbnailContainer>
					{post?.thumbnailUrl && (
						<PostThumbnail>
							<NextImage
								alt={post.title ?? ""}
								src={post.thumbnailUrl}
								layout="fill"
								objectFit="cover"
							/>
						</PostThumbnail>
					)}
					{user.image && (
						<UserAvatar border={3}>
							<GitHubAvatarImage
								alt={user.name}
								src={user.image}
								height={56}
								width={56}
							/>
						</UserAvatar>
					)}
				</ThumbnailContainer>
				<Content>
					{post && (
						<>
							<NextLink
								href="/[userName]/[postTitle]"
								as={`/${user.name}/${post.urlSlug}`}
								passHref
							>
								<PostInfo>
									<PostTitle>{post.title}</PostTitle>
									{post.description && (
										<PostDescription tw="mt-1">
											{post.description}
										</PostDescription>
									)}
								</PostInfo>
							</NextLink>
							<Divider />
						</>
					)}
					<NextLink href="/[userName]" as={`/${user.name}`} passHref>
						<UserInfo>
							<UserName>{user.name}</UserName>
							{user.description && (
								<UserDescription tw="mt-1">{user.description}</UserDescription>
							)}
						</UserInfo>
					</NextLink>
				</Content>
			</Root>
		);
	}
);

SuggestedFriendCard.displayName = "SuggestedFriendCard";
