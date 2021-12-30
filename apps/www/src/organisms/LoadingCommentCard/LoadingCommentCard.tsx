import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Delimiter = tw.div`
	after:content["·"]
	mx-1
	font-bold
`;

export interface LoadingCommentCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingCommentCard: FC<LoadingCommentCardProps> = ({ className, style }) => {
	return (
		<div className={className} style={style} tw="flex items-center">
			<Skeleton tw="h-9 w-9 mr-2 rounded-full" />
			<div tw="flex items-center">
				<Skeleton tw="h-4 w-20" />
				<Delimiter />
				<Skeleton tw="h-4 w-32" />
			</div>
		</div>
	);
};
