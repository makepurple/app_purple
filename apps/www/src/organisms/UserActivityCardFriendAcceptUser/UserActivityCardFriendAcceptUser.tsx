import { Anchor } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment } from "../../graphql";
import { UserActivityCardHeader } from "../UserActivityCardHeader";
import { UserFollowCard } from "../UserFollowCard";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardFriendAcceptUserProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardFriendAcceptUserUserActivityFriendAcceptUserFragment;
}

export const UserActivityCardFriendAcceptUser = forwardRef<
	HTMLDivElement,
	UserActivityCardFriendAcceptUserProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { friendship } = userActivity;

	const friendedUser = friendship.friending;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				connected with{" "}
				<NextLink legacyBehavior href="/[userName]" as={`/${friendedUser.name}`} passHref>
					<Anchor>{friendedUser.name}</Anchor>
				</NextLink>
			</UserActivityCardHeader>
			<UserFollowCard user={friendedUser} tw="mt-2" />
		</Root>
	);
});

UserActivityCardFriendAcceptUser.displayName = "UserActivityCardFriendAcceptUser";
