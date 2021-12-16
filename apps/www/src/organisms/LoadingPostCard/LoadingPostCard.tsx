import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-col-reverse
	h-80
	p-3
	sm:flex-row
	sm:h-52
	sm:p-6
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
`;

const Title = tw(Skeleton)`
	h-5
	w-32
	mb-2
`;

const Description = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
`;

const DescriptionRow = tw(Skeleton)`
	block
	h-4
	my-1
	first:hidden
	last:hidden
	sm:first:block
	sm:last:block
	last:w-2/3

`;

const PostedDetails = tw.div`
	flex
	flex-row
	items-center
	my-1
`;

const PostedDetail = tw(Skeleton)`
	w-28
	h-4
	not-first:ml-3
`;

const KarmaContainer = tw.div`
	flex
	flex-row
	items-end
	mt-1
`;

const UpvoteCount = tw(Skeleton)`
	w-8
	h-3.5
`;

const UpvoteIcon = tw(Skeleton)`
	ml-2
	h-8
	w-8
	sm:h-6
	sm:w-6
`;

const Thumbnail = tw(Skeleton)`
	h-40
	w-full
	mb-3
	sm:w-40
	sm:ml-6
	sm:mb-0
`;

export interface LoadingPostCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingPostCard: FC<LoadingPostCardProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Info>
				<Title />
				<Description>
					<DescriptionRow />
					<DescriptionRow />
					<DescriptionRow />
				</Description>
				<PostedDetails>
					<PostedDetail />
					<PostedDetail />
				</PostedDetails>
				<KarmaContainer>
					<UpvoteCount />
					<UpvoteIcon />
				</KarmaContainer>
			</Info>
			<Thumbnail />
		</Root>
	);
};
