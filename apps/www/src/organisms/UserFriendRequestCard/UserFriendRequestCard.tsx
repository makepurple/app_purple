import { Anchor, Button, Spinner, Tags } from "@makepurple/components";
import NextLink from "next/link";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	useFriendRequestUserMutation,
	useRejectFriendshipMutation,
	UserFriendRequestCardUserFragment
} from "../../graphql";
import { UserAvatar } from "../UserAvatar";

const MAX_SKILLS_SHOWN = 5;

const Root = tw.div`
	flex
	items-start
	py-4
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

export interface UserFriendRequestCardProps {
	className?: string;
	style?: CSSProperties;
	user: UserFriendRequestCardUserFragment;
}

export const UserFriendRequestCard = forwardRef<HTMLDivElement, UserFriendRequestCardProps>(
	(props, ref) => {
		const { className, style, user } = props;

		const [{ fetching: requesting }, friendRequest] = useFriendRequestUserMutation();
		const [{ fetching: rejecting }, rejectRequest] = useRejectFriendshipMutation();

		const skills = user.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
		const desiredSkills = user.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

		const skillsExtra = user.skills.totalCount - MAX_SKILLS_SHOWN;
		const desiredSkillsExtra = user.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

		const loading: boolean = requesting || rejecting;

		return (
			<Root ref={ref} className={className} style={style}>
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
					<NextLink href="/[userName/" as={`/${user.name}`} passHref>
						<UserName>{user.name}</UserName>
					</NextLink>
					{user.description && <Bio tw="mt-1">{user.description}</Bio>}
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
							user.viewerIsFriend
								? await rejectRequest({ where: { id: user.id } }).catch(() => null)
								: await friendRequest({ where: { id: user.id } }).catch(() => null);
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						{loading ? <Spinner /> : user.viewerIsFriend ? "Ignore" : "Connect"}
					</FollowButton>
				</Actions>
			</Root>
		);
	}
);

UserFriendRequestCard.displayName = "UserFriendRequestCard";
