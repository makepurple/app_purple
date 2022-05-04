import { Paper, Skeleton } from "@makepurple/components";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	items-start
	gap-4
	p-4
`;

const Avatar = tw(Skeleton)`
	h-16
	w-16
	rounded-md
`;

const Info = tw.div`
	flex-grow
	flex
	flex-col
`;

const Highlights = tw.ul`
	list-style-type["– "]
	list-inside
	marker:font-bold
	marker:text-blue-500
`;

const Highlight = tw.li`
	[& > *]:inline-block
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
				<Skeleton tw="h-4 w-24 mt-2" />
				<Skeleton tw="h-3.5 w-44 mt-2" />
				<Skeleton tw="h-3.5 w-36 mt-2" />
				<Highlights tw="mt-2">
					<Highlight>
						<Skeleton tw="h-4 w-2/3" />
					</Highlight>
					<Highlight>
						<Skeleton tw="h-4 w-2/3" />
					</Highlight>
					<Highlight>
						<Skeleton tw="h-4 w-2/3" />
					</Highlight>
				</Highlights>
			</Info>
		</Root>
	);
};
