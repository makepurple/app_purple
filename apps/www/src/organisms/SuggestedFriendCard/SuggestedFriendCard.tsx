import { Avatar, Divider, GitHubAvatarImage, Paper, Tags } from "@makepurple/components";
import { RenderComponentProps as MasonicRenderProps } from "masonic";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw, { styled } from "twin.macro";
import { SuggestedFriendCardUserFragment } from "../../graphql";

const MAX_SKILLS_SHOWN = 5;

const Root = styled(Paper)<{ $withPost: boolean }>`
	${tw`
		flex
		flex-col
		items-stretch
	`}

	${({ $withPost }) => !$withPost && tw`hover:bg-violet-50`}
`;

const ThumbnailContainer = tw.div`
	relative
	min-height[5rem]
	rounded-t-lg
	overflow-hidden
	cursor-pointer
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
	cursor-pointer
`;

const PostInfo = tw.a`
	flex
	flex-col
	items-stretch
	p-3
	hover:bg-violet-50
`;

const PostTitle = tw.div`
	text-black
`;

const PostDescription = tw.div`
	text-left
	text-sm
	line-clamp-3
	text-gray-500
`;

const UserInfo = tw.div`
	flex
	flex-col
	items-stretch
	p-3
	hover:bg-violet-50
`;

const UserName = tw.a`
	text-violet-600
	truncate
`;

const UserDescription = tw.a`
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

		const router = useRouter();

		const post = user.posts.nodes[0];

		const skills = user.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
		const desiredSkills = user.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

		const skillsExtra = user.skills.totalCount - MAX_SKILLS_SHOWN;
		const desiredSkillsExtra = user.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

		return (
			<Root ref={ref} className={className} style={style} $withPost={!!post}>
				<ThumbnailContainer
					onClick={async () => {
						await router.push("/[userName]", `/${user.name}`);
					}}
				>
					{post?.thumbnailUrl && (
						<NextLink
							legacyBehavior
							href="/[userName]/[postTitle]"
							as={`/${user.name}/${post.urlSlug}`}
							passHref
						>
							<PostThumbnail
								onClick={(e) => {
									e.stopPropagation();
								}}
								tabIndex={-1}
								tw="mb-0.5"
							>
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
						<NextLink legacyBehavior href="/[userName]" as={`/${user.name}`} passHref>
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
								legacyBehavior
								href="/[userName]/[postTitle]"
								as={`/${user.name}/${post.urlSlug}`}
								passHref
							>
								<PostInfo>
									<PostTitle>{post.title}</PostTitle>
									{post.description && (
										<PostDescription>{post.description}</PostDescription>
									)}
								</PostInfo>
							</NextLink>
							<Divider />
						</>
					)}
					<UserInfo
						className="userInfo"
						onClick={async () => {
							await router.push("/[userName]", `/${user.name}`);
						}}
					>
						<NextLink legacyBehavior href="/[userName]" as={`/${user.name}`} passHref>
							<UserName>{user.name}</UserName>
						</NextLink>
						{user.description && (
							<NextLink
								legacyBehavior
								href="/[userName]"
								as={`/${user.name}`}
								passHref
							>
								<UserDescription>{user.description}</UserDescription>
							</NextLink>
						)}
						{(!!skills.length || !!desiredSkills.length) && (
							<UserSkills tw="mt-3">
								{!!skills.length && (
									<Tags type="positive">
										{skills.map((skill) => (
											<NextLink
												legacyBehavior
												key={skill.id}
												href="/s/[skillOwner]/[skillName]"
												as={`/s/${skill.owner}/${skill.name}`}
												passHref
											>
												<Tags.Tag
													id={skill.id}
													onClick={(e) => {
														e.stopPropagation();
													}}
													tw="px-1"
												>
													{skill.name}
												</Tags.Tag>
											</NextLink>
										))}
										{skillsExtra > 0 && (
											<NextLink
												legacyBehavior
												href="/[userName]"
												as={`/${user.name}`}
												passHref
											>
												<Tags.Tag
													id="see-more"
													onClick={(e) => {
														e.stopPropagation();
													}}
													tw="px-1"
												>
													+{skillsExtra} other
													{skillsExtra === 1 ? "" : "s"}
												</Tags.Tag>
											</NextLink>
										)}
									</Tags>
								)}
								{!!desiredSkills.length && (
									<Tags type="negative">
										{desiredSkills.map((skill) => (
											<NextLink
												legacyBehavior
												key={skill.id}
												href="/s/[skillOwner]/[skillName]"
												as={`/s/${skill.owner}/${skill.name}`}
												passHref
											>
												<Tags.Tag
													id={skill.id}
													onClick={(e) => {
														e.stopPropagation();
													}}
													tw="px-1"
												>
													{skill.name}
												</Tags.Tag>
											</NextLink>
										))}
										{desiredSkillsExtra > 0 && (
											<NextLink
												legacyBehavior
												href="/[userName]"
												as={`/${user.name}`}
												passHref
											>
												<Tags.Tag
													id="see-more"
													onClick={(e) => {
														e.stopPropagation();
													}}
													tw="px-1"
												>
													+{desiredSkillsExtra} other
													{desiredSkillsExtra === 1 ? "" : "s"}
												</Tags.Tag>
											</NextLink>
										)}
									</Tags>
								)}
							</UserSkills>
						)}
					</UserInfo>
				</Content>
			</Root>
		);
	}
);

SuggestedFriendCard.displayName = "SuggestedFriendCard";
