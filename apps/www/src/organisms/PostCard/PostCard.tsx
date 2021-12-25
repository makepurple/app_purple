import { Anchor, Paper, ThumbsUpIcon } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import toast from "react-hot-toast";
import tw from "twin.macro";
import { PostCardPostFragment, useUpvotePostMutation } from "../../graphql";

const Root = tw(Paper)`
	flex
	flex-col-reverse
	h-80
	p-3
	sm:flex-row
	sm:h-52
	sm:p-6
	cursor-pointer
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

const Title = tw.h2`
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

const KarmaContainer = tw.div`
	flex
	flex-row
	items-end
	mt-1
`;

const UpvoteCount = tw.span`
	text-sm
	leading-6
	sm:leading-5
	text-gray-500
`;

const UpvoteIcon = tw(ThumbsUpIcon)`
	ml-2
	h-8
	w-8
	sm:h-6
	sm:w-6
	text-green-500
	cursor-pointer
`;

const Thumbnail = tw.a`
	relative
	flex-shrink-0
	h-40
	w-full
	mb-3
	sm:w-40
	sm:ml-6
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

	const [{ fetching }, upvotePost] = useUpvotePostMutation();

	const postUrl: string = `/${post.author.name}/${post.urlSlug}`;

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
				<KarmaContainer>
					<UpvoteCount>{post.upvoteCount.toLocaleString()}</UpvoteCount>
					<UpvoteIcon
						height={32}
						onClick={async (e) => {
							e.stopPropagation();

							if (fetching) return;

							await upvotePost({ where: { id: post.id } });

							toast.success("You liked this post!");
						}}
						width={32}
					/>
				</KarmaContainer>
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