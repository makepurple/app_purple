import { Anchor, Avatar, Brand, GitHubAvatarImage, Paper } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardJoinedUserActivityJoinedFragment } from "../../graphql";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

const Content = tw(Paper)`
	self-stretch
	flex
	flex-row
	items-center
	p-4
`;

const Greetings = tw.div`
	flex
	flex-col
	items-start
	overflow-hidden
	text-xl
	sm:text-2xl
	font-medium
`;

const UserNameContainer = tw.span`
	w-full
	text-2xl
	sm:text-5xl
	sm:leading-snug
	sm:font-bold
	truncate
`;

const UserName = tw(Anchor)`
	text-black
	truncate
`;

export interface UserActivityCardJoinedProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardJoinedUserActivityJoinedFragment;
}

export const UserActivityCardJoined = forwardRef<HTMLDivElement, UserActivityCardJoinedProps>(
	(props, ref) => {
		const { className, style, userActivity } = props;

		const user = userActivity.user;

		return (
			<Root className={className} ref={ref} style={style}>
				<UserActivityCardHeader userActivity={userActivity}>
					joined <Brand tw="text-base" />
				</UserActivityCardHeader>
				<Content tw="mt-2">
					{!!user.image && (
						<NextLink href="/[userName]" as={`/${user.name}`} passHref>
							<Avatar border={6} tw="flex-shrink-0 mr-4">
								<GitHubAvatarImage src={user.image} height={128} width={128} />
							</Avatar>
						</NextLink>
					)}
					<Greetings>
						<span>
							Welcome to <Brand tw="text-2xl sm:text-3xl" />,
						</span>
						<UserNameContainer tw="mt-1">
							<NextLink href="/[userName]" as={`/${user.name}`} passHref>
								<UserName>{user.name}</UserName>
							</NextLink>
							!
						</UserNameContainer>
					</Greetings>
				</Content>
			</Root>
		);
	}
);

UserActivityCardJoined.displayName = "UserActivityCardJoined";
