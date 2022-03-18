import { Anchor } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardFollowUserUserActivityFollowUserFragment } from "../../graphql";
import { UserActivityCardHeader } from "../UserActivityCardHeader";
import { UserFollowCard } from "../UserFollowCard";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardFollowUserProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardFollowUserUserActivityFollowUserFragment;
}

export const UserActivityCardFollowUser = forwardRef<
	HTMLDivElement,
	UserActivityCardFollowUserProps
>((props, ref) => {
	const { className, style, userActivity } = props;

	const { follow } = userActivity;

	/**
	 * !HACK
	 * @description Should not reach here, but in-case it does, return a div so that we don't break
	 * pagination. It does mean that there might be an unexpected gap though.
	 * @author David Lee
	 * @date February 3, 2022
	 */
	if (follow.following.__typename === "Skill") return <div ref={ref} />;

	const followedUser = follow.following;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				followed{" "}
				<NextLink href="/[userName]" as={`/${followedUser.name}`} passHref>
					<Anchor>{followedUser.name}</Anchor>
				</NextLink>
			</UserActivityCardHeader>
			<UserFollowCard user={followedUser} tw="mt-2" />
		</Root>
	);
});

UserActivityCardFollowUser.displayName = "UserActivityCardFollowUser";
