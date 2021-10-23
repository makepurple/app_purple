import { Paper, Popover } from "@/client/atoms";
import { UserPostCardPostFragment } from "@/client/graphql";
import { useHover } from "@/client/hooks";
import { ThumbsUpIcon } from "@/client/svgs";
import dayjs from "dayjs";
import NextImage from "next/image";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-row
	h-52
	p-6
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col

`;

const Title = tw.h2`
	text-xl
	font-bold
	leading-none
	text-black
	mb-2
`;

const DescriptionContainer = tw.div`
	flex-grow
`;

const Description = tw.p`
	text-base
	text-gray-500
	line-clamp-3
`;

const AuthorName = tw.span`
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
	leading-5
	text-gray-500
`;

const UpvoteIcon = tw(ThumbsUpIcon)`
	ml-2
	text-green-500
	cursor-pointer
`;

const UpvoteTooltip = tw.div`
	p-1.5
`;

const Thumbnail = tw.div`
	relative
	flex-shrink-0
	h-40
	w-40
	ml-6
	rounded-md
`;

export interface UserPostCardProps {
	className?: string;
	post: UserPostCardPostFragment;
	style?: CSSProperties;
}

export const UserPostCard = forwardRef<HTMLDivElement, UserPostCardProps>((props, ref) => {
	const { className, post, style } = props;

	const [upvoteHovered, { handlers: upvoteHoverHandlers }] = useHover();

	return (
		<Root ref={ref} className={className} style={style}>
			<Info>
				<Title title={post.title ?? ""}>{post.title}</Title>
				{post.description && (
					<DescriptionContainer>
						<Description>{post.description}</Description>
					</DescriptionContainer>
				)}
				<PostedDetails>
					<AuthorName title={post.author.name}>{post.author.name}</AuthorName>
					<Delimiter>·</Delimiter>
					{post.publishedAt ? (
						<PublishedAt>{dayjs(post.publishedAt).format("MMM D, YYYY")}</PublishedAt>
					) : (
						<NotPublished>Draft</NotPublished>
					)}
				</PostedDetails>
				<KarmaContainer>
					<UpvoteCount>{post.upvoteCount.toLocaleString()}</UpvoteCount>
					<Popover
						content={<UpvoteTooltip>Like</UpvoteTooltip>}
						open={upvoteHovered}
						placement="bottom"
					>
						<UpvoteIcon {...upvoteHoverHandlers} height={24} width={24} />
					</Popover>
				</KarmaContainer>
			</Info>
			{post.thumbnailUrl && (
				<Thumbnail>
					<NextImage
						alt="thumbnail"
						src={post.thumbnailUrl}
						layout="fill"
						objectFit="cover"
					/>
				</Thumbnail>
			)}
		</Root>
	);
});

UserPostCard.displayName = "UserPostCard";
