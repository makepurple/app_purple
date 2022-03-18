import { Anchor } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { UserActivityCardFollowSkillUserActivityFollowSkillFragment } from "../../graphql";
import { SkillFollowCard } from "../SkillFollowCard";
import { UserActivityCardHeader } from "../UserActivityCardHeader";

const Root = tw.div`
	flex
	flex-col
	items-stretch
`;

export interface UserActivityCardFollowSkillProps {
	className?: string;
	style?: CSSProperties;
	userActivity: UserActivityCardFollowSkillUserActivityFollowSkillFragment;
}

export const UserActivityCardFollowSkill = forwardRef<
	HTMLDivElement,
	UserActivityCardFollowSkillProps
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
	if (follow.following.__typename === "User") return <div ref={ref} />;

	const followedSkill = follow.following;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				followed{" "}
				<NextLink
					href="/[userName]"
					as={`/s/${followedSkill.owner}/${followedSkill.name}`}
					passHref
				>
					<Anchor>{followedSkill.name}</Anchor>
				</NextLink>
			</UserActivityCardHeader>
			<SkillFollowCard skill={followedSkill} tw="mt-2" />
		</Root>
	);
});

UserActivityCardFollowSkill.displayName = "UserActivityCardFollowSkill";
