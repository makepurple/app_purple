import { Avatar } from "@makepurple/components";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";

const Root = tw.div`
	flex
	flex-col
`;

const PosterInfo = tw.div`
	flex
	items-center
`;

export interface CommentCardProps {
	className?: string;
	style?: CSSProperties;
}

export const CommentCard = forwardRef<HTMLDivElement, CommentCardProps>((props, ref) => {
	const { className, style } = props;

	return (
		<Root ref={ref} className={className} style={style}>
			<PosterInfo>
				<Avatar />
			</PosterInfo>
			<div />
		</Root>
	);
});

CommentCard.displayName = "CommentCard";
