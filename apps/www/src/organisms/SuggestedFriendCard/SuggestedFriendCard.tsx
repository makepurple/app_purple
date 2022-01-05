import { Avatar, Divider, GitHubAvatarImage, Paper, Tags } from "@makepurple/components";
import { RenderComponentProps as MasonicRenderProps } from "masonic";
import NextImage from "next/image";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { SuggestedFriendCardUserFragment } from "../../graphql";

const MAX_SKILLS_SHOWN = 5;

const Root = tw(Paper)`
	flex
	flex-col
	items-stretch
`;

const ThumbnailContainer = tw.div`
	relative
	rounded-t-lg
	overflow-hidden
`;

const PostThumbnail = tw.a`
	block
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

const UserSkills = tw.div`
	flex
	flex-col
	gap-1.5
	[& > *]:text-sm
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

		const skills = user.skills.nodes;
		const desiredSkills = user.desiredSkills.nodes;

		const skillsExtra = skills.length - MAX_SKILLS_SHOWN;
		const desiredSkillsExtra = desiredSkills.length - MAX_SKILLS_SHOWN;

		return (
			<Root ref={ref} className={className} style={style}>
				<ThumbnailContainer>
					{post?.thumbnailUrl && (
						<NextLink
							href="/[userName]/[postTitle]"
							as={`/${user.name}/${post.urlSlug}`}
							passHref
						>
							<PostThumbnail tabIndex={-1} tw="mb-0.5">
								<NextImage
									alt={post.title ?? ""}
									src={post.thumbnailUrl}
									layout="fill"
									objectFit="cover"
								/>
							</PostThumbnail>
						</NextLink>
					)}
					{user.image && (
						<NextLink href="/[userName]" as={`/${user.name}`} passHref>
							<UserAvatar tabIndex={-1} border={3}>
								<GitHubAvatarImage
									alt={user.name}
									src={user.image}
									height={56}
									width={56}
								/>
							</UserAvatar>
						</NextLink>
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
							{(!!skills.length || !!desiredSkills.length) && (
								<UserSkills tw="mt-3">
									{!!skills.length && (
										<Tags type="positive">
											{skills.slice(0, MAX_SKILLS_SHOWN).map((skill) => (
												<Tags.Tag key={skill.id} id={skill.id} tw="px-1">
													{skill.name}
												</Tags.Tag>
											))}
											{skillsExtra > 0 && (
												<Tags.Tag id="see-more" tw="px-1">
													+{skillsExtra} other
													{skillsExtra === 1 ? "" : "s"}
												</Tags.Tag>
											)}
										</Tags>
									)}
									{!!desiredSkills.length && (
										<Tags type="negative">
											{desiredSkills.slice(0, 5).map((skill) => (
												<Tags.Tag key={skill.id} id={skill.id} tw="px-1">
													{skill.name}
												</Tags.Tag>
											))}
											{desiredSkillsExtra > 0 && (
												<Tags.Tag id="see-more" tw="px-1">
													+{desiredSkillsExtra} other
													{desiredSkillsExtra === 1 ? "" : "s"}
												</Tags.Tag>
											)}
										</Tags>
									)}
								</UserSkills>
							)}
						</UserInfo>
					</NextLink>
				</Content>
			</Root>
		);
	}
);

SuggestedFriendCard.displayName = "SuggestedFriendCard";
