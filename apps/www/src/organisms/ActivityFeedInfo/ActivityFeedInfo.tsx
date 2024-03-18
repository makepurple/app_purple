import { Brand, Button, Paper } from "@makepurple/components";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-6
`;

const Title = tw.h1`
	flex
	text-xl
	font-bold
	leading-none
`;

const Description = tw.p`
	text-base
	text-gray-500
	leading-snug
`;

const DiscoverMore = tw.p`
	text-base
	text-gray-500
	text-center
	leading-snug
`;

export interface ActivityFeedInfoProps {
	className?: string;
	style?: CSSProperties;
}

export const ActivityFeedInfo: FC<ActivityFeedInfoProps> = ({ className, style }) => {
	const { status } = useSession();

	if (status === "loading") return null;

	return (
		<Root className={className} style={style}>
			<Title>Latest Activities</Title>
			{status === "authenticated" ? (
				<Description tw="mt-4">
					Here is your personal <Brand tw="text-base" /> front-page. Come here to find the
					latest activities of developers and skills you follow.
				</Description>
			) : (
				<Description tw="mt-4">
					Here are the latest activities of developers from the <Brand tw="text-base" />{" "}
					community.
				</Description>
			)}
			<DiscoverMore tw="mt-6">Want to discover more?</DiscoverMore>
			<NextLink legacyBehavior href="/explore" passHref>
				<Button as="a" tw="mt-3">
					Explore
				</Button>
			</NextLink>
		</Root>
	);
};
