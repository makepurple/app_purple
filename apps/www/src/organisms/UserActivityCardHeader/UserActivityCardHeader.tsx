import { Anchor, Avatar, GitHubAvatarImage } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import React, { CSSProperties, FC, ReactNode } from "react";
import tw from "twin.macro";
import { UserActivityCardHeaderUserActivityFragment } from "../../graphql";

const Root = tw.div`
	flex
	flex-row
	items-center
	text-base
	leading-none
	text-gray-600
`;

const Content = tw.div`
	flex
	flex-col
	items-start
`;

const UserAction = tw.span`
	text-base
	leading-none
	truncate
`;

const UpdatedAt = tw.span`
	text-sm
	leading-none
	text-gray-500
`;

export interface UserActivityCardHeaderProps {
	children?: ReactNode;
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardHeaderUserActivityFragment;
}

export const UserActivityCardHeader: FC<UserActivityCardHeaderProps> = (props) => {
	const { children, className, style, userActivity } = props;

	const { updatedAt, user } = userActivity;

	return (
		<Root className={className} style={style}>
			{!!user.image && (
				<NextLink legacyBehavior href="/[userName]" as={`/${user.name}`} passHref>
					<Avatar border={2} tw="flex-shrink-0 mr-3">
						<GitHubAvatarImage
							alt={user.name}
							src={user.image}
							height={48}
							width={48}
						/>
					</Avatar>
				</NextLink>
			)}
			<Content>
				<UserAction>
					<NextLink legacyBehavior href="/[userName]" as={`/${user.name}`} passHref>
						<Anchor tw="mr-1">{user.name}</Anchor>
					</NextLink>
					{children}
				</UserAction>
				<UpdatedAt tw="mt-1">{dayjs(updatedAt).fromNow()}</UpdatedAt>
			</Content>
		</Root>
	);
};
