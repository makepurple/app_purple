import { Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw.div`
	flex
	items-start
	py-4
`;

const Avatar = tw(Skeleton)`
	h-16
	w-16
	mr-6
	rounded-md
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
`;

export interface LoadingExperienceCardProps {
	className?: string;
	style?: CSSProperties;
}

export const LoadingExperienceCard: FC<LoadingExperienceCardProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Avatar />
			<Info>
				<div tw="flex items-stretch h-4.5">
					<Skeleton tw="w-48" />
					<Skeleton tw="w-20 ml-1" />
				</div>
				<Skeleton tw="h-4 w-24 mt-1" />
				<Skeleton tw="h-3.5 w-44 mt-1" />
				<Skeleton tw="h-3.5 w-36 mt-1" />
			</Info>
		</Root>
	);
};
