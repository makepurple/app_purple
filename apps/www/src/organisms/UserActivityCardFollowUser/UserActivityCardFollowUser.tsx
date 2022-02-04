import { Anchor, Button, Paper, Spinner, Tags } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	useFollowUserMutation,
	UserActivityCardFollowUserUserActivityFollowUserFragment,
	useUnfollowUserMutation
} from "../../graphql";
import { UserActivityCardHeader } from "../UserActivityCardHeader";
import { UserAvatar } from "../UserAvatar";

const MAX_SKILLS_SHOWN = 5;

const Root = tw.div`
	flex
	flex-col
	items-start
`;

const Content = tw(Paper)`
	self-stretch
	flex
	flex-row
	items-start
	p-4
`;

const StyledAvatar = tw(UserAvatar)`
	flex-shrink-0
`;

const Details = tw.div`
	flex-grow
	flex
	flex-col
	items-start
`;

const UserName = tw(Anchor)`
	text-black
	text-lg
	leading-none
	font-semibold
`;

const Bio = tw.p`
	text-base
	text-gray-500
	line-clamp-2
`;

const Actions = tw.div`
	flex-shrink-0
`;

const FollowButton = tw(Button)`
	flex-shrink-0
	w-20	
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

	const { follow, user } = userActivity;

	const [{ fetching: following }, followUser] = useFollowUserMutation();
	const [{ fetching: unfollowing }, unfollowUser] = useUnfollowUserMutation();

	if (follow.following.__typename === "Skill") return null;

	const followedUser = follow.following;

	const skills = followedUser.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
	const desiredSkills = followedUser.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

	const skillsExtra = followedUser.skills.totalCount - MAX_SKILLS_SHOWN;
	const desiredSkillsExtra = followedUser.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

	const loading: boolean = following || unfollowing;

	return (
		<Root ref={ref} className={className} style={style}>
			<UserActivityCardHeader userActivity={userActivity}>
				followed{" "}
				<NextLink href="/[userName]" as={`/${followedUser.name}`} passHref>
					<Anchor>{followedUser.name}</Anchor>
				</NextLink>
			</UserActivityCardHeader>
			<Content tw="mt-2">
				{user.image && (
					<StyledAvatar
						border={3}
						height={64}
						width={64}
						user={user}
						tw="flex-shrink-0 mr-6"
					/>
				)}
				<Details>
					<NextLink href="/[userName/" as={`/${followedUser.name}`} passHref>
						<UserName>{followedUser.name}</UserName>
					</NextLink>
					{followedUser.description && <Bio tw="mt-1">{followedUser.description}</Bio>}
					{!!skills.length && (
						<Tags type="positive" tw="mt-2">
							{skills.map((skill) => (
								<Tags.Tag key={skill.id} id={skill.id}>
									{skill.name}
								</Tags.Tag>
							))}
							{skillsExtra > 0 && (
								<Tags.Tag id="see-more" tw="px-1">
									+{skillsExtra} other
									{skillsExtra === 1 ? "" : "s"}
								</Tags.Tag>
							)}
						</Tags>
					)}
					{!!desiredSkills.length && (
						<Tags type="negative" tw="mt-2">
							{desiredSkills.map((skill) => (
								<Tags.Tag key={skill.id} id={skill.id}>
									{skill.name}
								</Tags.Tag>
							))}
							{desiredSkillsExtra > 0 && (
								<Tags.Tag id="see-more" tw="px-1">
									+{desiredSkillsExtra} other
									{desiredSkillsExtra === 1 ? "" : "s"}
								</Tags.Tag>
							)}
						</Tags>
					)}
				</Details>
				<Actions tw="ml-4">
					<FollowButton
						disabled={loading}
						onClick={async () => {
							followedUser.viewerFollowing
								? await unfollowUser({ where: { id: user.id } }).catch(() => null)
								: await followUser({ where: { id: user.id } }).catch(() => null);
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						{loading ? (
							<Spinner />
						) : followedUser.viewerFollowing ? (
							"Unfollow"
						) : (
							"Follow"
						)}
					</FollowButton>
				</Actions>
			</Content>
		</Root>
	);
});

UserActivityCardFollowUser.displayName = "UserActivityCardFollowUser";
