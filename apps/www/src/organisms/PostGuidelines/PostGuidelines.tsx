import { Divider, OrderedList, OrderedListItem, Paper } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Title = tw.div`
	p-4
	pb-2
	text-xl
	font-bold
`;

const List = tw(OrderedList)`
	p-4
	pt-2
`;

export interface PostGuidelinesProps {
	className?: string;
	style?: CSSProperties;
}

export const PostGuidelines: FC<PostGuidelinesProps> = ({ className, style }) => {
	return (
		<Paper className={className} style={style}>
			<Title>Posting Guidelines</Title>
			<Divider />
			<List>
				<OrderedListItem>Use kind and inclusive language</OrderedListItem>
				<OrderedListItem>Be respectful of differing viewpoints</OrderedListItem>
				<OrderedListItem>Give credit where it is due</OrderedListItem>
				<OrderedListItem>Focus on learning and community</OrderedListItem>
				<OrderedListItem>Showcase your skills and learning</OrderedListItem>
			</List>
		</Paper>
	);
};
