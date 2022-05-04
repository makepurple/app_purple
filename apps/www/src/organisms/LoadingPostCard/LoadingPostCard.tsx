import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-col
	p-3
	sm:flex-row
	sm:p-4
`;

const Thumbnail = tw(Skeleton)`
	h-44
	w-full
	mb-3
	sm:w-44
	sm:mr-4
	sm:mb-0
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
`;

const Title = tw(Skeleton)`
	h-6
	w-2/3
	mb-3
`;

const Description = tw.div`
	flex-grow
	flex
	flex-col
	items-stretch
	gap-1.5
`;

const DescriptionRow = tw(Skeleton)`
	block
	h-5
	first:hidden
	last:hidden
	sm:first:block
	sm:last:block
	last:w-2/3
`;

const Skills = tw.div`
	flex
	flex-row
	flex-wrap
	gap-1.5
	mt-3
`;

const Skill = tw(Skeleton)`
	h-6
	w-20
`;

const PostedDetails = tw.div`
	flex
	flex-row
	items-center
	mt-3
`;

const PostedDetail = tw(Skeleton)`
	w-1/4
	h-5
	not-first:ml-3
`;

const UpvoteButton = tw(Skeleton)`
	w-16
	h-7
	mt-3
`;

export interface LoadingPostCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingPostCard: FC<LoadingPostCardProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Thumbnail />
			<Info>
				<Title />
				<Description>
					<DescriptionRow />
					<DescriptionRow />
				</Description>
				<Skills>
					<Skill />
					<Skill />
					<Skill />
					<Skill />
					<Skill />
				</Skills>
				<PostedDetails>
					<PostedDetail />
					<PostedDetail />
					<PostedDetail />
				</PostedDetails>
				<UpvoteButton />
			</Info>
		</Root>
	);
};
