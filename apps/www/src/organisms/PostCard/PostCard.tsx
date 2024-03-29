import {
	AlertDialog,
	Anchor,
	Button,
	Paper,
	Tags,
	ThumbsUpIcon,
	toast
} from "@makepurple/components";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { useSession } from "next-auth/react";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef, useMemo } from "react";
import tw, { styled } from "twin.macro";
import {
	PostCardPostFragment,
	PostWhereUniqueInput,
	useDeletePostMutation,
	UserRole,
	useUnvotePostMutation,
	useUpvotePostMutation
} from "../../graphql";
import { PermissionUtils } from "../../utils";

const DeleteButton = tw(Button)`
	opacity-0
`;

const Root = styled(Paper)`
	${tw`
		flex
		flex-col
		gap-4
		p-3
		cursor-pointer
		hover:bg-violet-50
		sm:flex-row
		sm:p-4
	`}

	&:hover ${DeleteButton} {
		${tw`
			opacity-100
		`}
	}
`;

const Thumbnail = tw.a`
	relative
	flex-shrink-0
	h-44
	w-full
	sm:w-44
	overflow-hidden
	rounded-md
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
	min-w-0
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
	leading-snug
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
	sm:line-clamp-2
`;

const AuthorName = tw(Anchor)`
	text-base
	font-semibold
	text-black
`;

const PostedDetails = tw.div`
	flex
	flex-row
	flex-wrap
	items-center
	
`;

const Delimiter = tw.span`
	mx-1
	font-bold
`;

const PublishedAt = tw.span`
	text-base
	text-gray-500
	whitespace-nowrap
`;

const ReadTime = tw.span`
	text-base
	text-gray-500
	whitespace-nowrap
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

export interface PostCardProps {
	className?: string;
	post: PostCardPostFragment;
	style?: CSSProperties;
}

export const PostCard = forwardRef<HTMLDivElement, PostCardProps>((props, ref) => {
	const { className, post, style } = props;

	const router = useRouter();
	const { data: session, status } = useSession();

	const isMyPost = session?.user.name === post.authorName;

	const canDelete = useMemo(() => {
		if (isMyPost) return true;
		if (!session?.user) return false;

		return PermissionUtils.isGreaterRole(session.user.role as UserRole, post.author.role);
	}, [isMyPost, post.author.role, session?.user]);

	const [{ fetching: removing }, removePost] = useDeletePostMutation();
	const [{ fetching: unvoting }, unvotePost] = useUnvotePostMutation();
	const [{ fetching: upvoting }, upvotePost] = useUpvotePostMutation();

	const fetching = removing || unvoting || upvoting;

	const postUrl: string = `/${post.authorName}/${post.urlSlug}`;

	const skills = post.skills.nodes ?? [];

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push(postUrl);
			}}
			style={style}
		>
			{post.thumbnailUrl && (
				<NextLink legacyBehavior href={postUrl} passHref>
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
			<Info>
				<NextLink legacyBehavior href={postUrl} passHref>
					<MainAnchor>
						<Title title={post.title ?? ""}>{post.title}</Title>
						{post.description && (
							<DescriptionContainer>
								<Description>{post.description}</Description>
							</DescriptionContainer>
						)}
					</MainAnchor>
				</NextLink>
				<Tags type="positive" tw="mt-3">
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
								title={`${skill.owner}/${skill.name}`}
							>
								{skill.name}
							</Tags.Tag>
						</NextLink>
					))}
				</Tags>
				<PostedDetails tw="mt-3">
					<NextLink legacyBehavior href={`/${post.author.name}`} passHref>
						<AuthorName onClick={(e) => e.stopPropagation()} title={post.author.name}>
							{post.author.name}
						</AuthorName>
					</NextLink>
					{!!post.publishedAt && (
						<>
							<Delimiter>·</Delimiter>
							<PublishedAt>
								{dayjs(post.publishedAt).format("MMM D, YYYY")}
							</PublishedAt>
						</>
					)}
					<Delimiter>·</Delimiter>
					<ReadTime>{post.readTime} min read</ReadTime>
				</PostedDetails>
				<Actions tw="mt-2">
					<UpvoteButton
						disabled={fetching}
						onClick={async (e) => {
							e.stopPropagation();

							if (status !== "authenticated") {
								await router.push("/signup");

								return;
							}

							const where: PostWhereUniqueInput = {
								id: post.id
							};

							if (post.viewerUpvote) {
								await unvotePost({ where }).catch(() => false);

								return;
							}

							const didSucceed = await upvotePost({ where })
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
					{canDelete && (
						<AlertDialog
							description={oneLine`
								Are you sure you wish to delete this post? This cannot be undone.
							`}
							onConfirm={async () => {
								const didSucceed = await removePost({ where: { id: post.id } })
									.then((result) => !!result.data?.deletePost)
									.catch(() => false);

								if (!didSucceed) {
									toast.error("Could not delete this post");

									return;
								}

								toast.success("Post was successfully deleted");
							}}
							text="Yes, delete post"
						>
							<DeleteButton
								disabled={fetching}
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
				</Actions>
			</Info>
		</Root>
	);
});

PostCard.displayName = "PostCard";
