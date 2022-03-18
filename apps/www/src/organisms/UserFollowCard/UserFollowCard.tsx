import { Anchor, Button, Paper, Spinner, Tags } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	useFollowUserMutation,
	UserFollowCardUserFragment,
	useUnfollowUserMutation
} from "../../graphql";
import { UserAvatar } from "../UserAvatar";

const MAX_SKILLS_SHOWN = 5;

const Root = tw(Paper)`
	flex
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

export interface UserFollowCardProps {
	className?: string;
	style?: CSSProperties;
	user: UserFollowCardUserFragment;
}

export const UserFollowCard = forwardRef<HTMLDivElement, UserFollowCardProps>((props, ref) => {
	const { className, style, user } = props;

	const [{ fetching: following }, followUser] = useFollowUserMutation();
	const [{ fetching: unfollowing }, unfollowUser] = useUnfollowUserMutation();

	const skills = user.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
	const desiredSkills = user.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

	const skillsExtra = user.skills.totalCount - MAX_SKILLS_SHOWN;
	const desiredSkillsExtra = user.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

	const loading: boolean = following || unfollowing;

	return (
		<Root ref={ref} className={className} style={style}>
			{user.image && (
				<StyledAvatar
					border={3}
					height={64}
					width={64}
					user={user}
					tw="flex-shrink-0 mr-4"
				/>
			)}
			<Details>
				<NextLink href="/[userName/" as={`/${user.name}`} passHref>
					<UserName>{user.name}</UserName>
				</NextLink>
				{user.description && <Bio tw="mt-1">{user.description}</Bio>}
				{!!skills.length && (
					<Tags type="positive" tw="mt-2">
						{skills.map((skill) => (
							<NextLink
								key={skill.id}
								href="/s/[skillOwner]/[skillName]"
								as={`/s/${skill.owner}/${skill.name}`}
								passHref
							>
								<Tags.Tag
									id={skill.id}
									onClick={(e) => {
										e.stopPropagation();
									}}
									title={`${skill.owner}/${skill.name}`}
								>
									{skill.name}
								</Tags.Tag>
							</NextLink>
						))}
						{skillsExtra > 0 && (
							<NextLink href="/[userName]" as={`/${user.name}`} passHref>
								<Tags.Tag id="see-more" tw="px-1">
									+{skillsExtra} other
									{skillsExtra === 1 ? "" : "s"}
								</Tags.Tag>
							</NextLink>
						)}
					</Tags>
				)}
				{!!desiredSkills.length && (
					<Tags type="negative" tw="mt-2">
						{desiredSkills.map((skill) => (
							<NextLink
								key={skill.id}
								href="/s/[skillOwner]/[skillName]"
								as={`/s/${skill.owner}/${skill.name}`}
								passHref
							>
								<Tags.Tag
									id={skill.id}
									onClick={(e) => {
										e.stopPropagation();
									}}
									title={`${skill.owner}/${skill.name}`}
								>
									{skill.name}
								</Tags.Tag>
							</NextLink>
						))}
						{desiredSkillsExtra > 0 && (
							<NextLink href="/[userName]" as={`/${user.name}`} passHref>
								<Tags.Tag id="see-more" tw="px-1">
									+{desiredSkillsExtra} other
									{desiredSkillsExtra === 1 ? "" : "s"}
								</Tags.Tag>
							</NextLink>
						)}
					</Tags>
				)}
			</Details>
			<Actions tw="ml-4">
				<FollowButton
					disabled={loading}
					onClick={async (e) => {
						e.stopPropagation();

						user.viewerFollowing
							? await unfollowUser({ where: { id: user.id } }).catch(() => null)
							: await followUser({ where: { id: user.id } }).catch(() => null);
					}}
					size="small"
					type="button"
					variant="secondary"
				>
					{loading ? <Spinner /> : user.viewerFollowing ? "Unfollow" : "Follow"}
				</FollowButton>
			</Actions>
		</Root>
	);
});

UserFollowCard.displayName = "UserFollowCard";
