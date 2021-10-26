import { Paper } from "@/client/atoms";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	animate-pulse
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

const Title = tw.div`
	h-5
	w-32
	mb-2
	rounded-md
	bg-indigo-400
`;

const Description = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
`;

const DescriptionRow = tw.div`
	block
	h-4
	my-1
	first:hidden
	last:hidden
	sm:first:block
	sm:last:block
	last:w-2/3
	rounded-md
	bg-indigo-400

`;

const PostedDetails = tw.div`
	flex
	flex-row
	items-center
	my-1
`;

const PostedDetail = tw.span`
	w-28
	h-4
	not-first:ml-3
	rounded-md
	bg-indigo-400
`;

const KarmaContainer = tw.div`
	flex
	flex-row
	items-end
	mt-1
`;

const UpvoteCount = tw.span`
	w-8
	h-3.5
	rounded-md
	bg-indigo-400
`;

const UpvoteIcon = tw.span`
	ml-2
	h-8
	w-8
	sm:h-6
	sm:w-6
	rounded-md
	bg-indigo-400
`;

const Thumbnail = tw.div`
	h-40
	w-full
	mb-3
	sm:w-40
	sm:ml-6
	sm:mb-0
	rounded-md
	bg-indigo-400
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
