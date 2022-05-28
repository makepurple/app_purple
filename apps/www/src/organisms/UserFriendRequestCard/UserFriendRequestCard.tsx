import { Anchor, Button, Paper, Spinner, Tags, toast } from "@makepurple/components";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	useAcceptFriendshipMutation,
	useRejectFriendshipMutation,
	UserFriendRequestCardUserFragment
} from "../../graphql";
import { UserAvatar } from "../UserAvatar";

const MAX_SKILLS_SHOWN = 5;

const Root = tw(Paper)`
	flex
	items-start
	p-4
	cursor-pointer
	hover:bg-violet-50
`;

const StyledAvatar = tw(UserAvatar)`
	flex-shrink-0
`;

const Details = tw.div`
	self-stretch
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

const BioContainer = tw.a`
	self-stretch
	flex-grow
	focus:ring-0
`;

const Bio = tw.p`
	text-base
	text-gray-500
	line-clamp-2
`;

const Actions = tw.div`
	flex-shrink-0
	flex
	flex-col
	gap-2
`;

const Action = tw(Button)`
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

		const router = useRouter();
		const { data: session, status } = useSession({ required: true });

		const isMyCard = user.name === session?.user.name;

		const [{ fetching: accepting }, acceptRequest] = useAcceptFriendshipMutation();
		const [{ fetching: rejecting }, rejectRequest] = useRejectFriendshipMutation();

		const fetching = accepting || rejecting;

		const skills = user.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
		const desiredSkills = user.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

		const skillsExtra = user.skills.totalCount - MAX_SKILLS_SHOWN;
		const desiredSkillsExtra = user.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

		return (
			<Root
				ref={ref}
				className={className}
				onClick={async () => {
					await router.push("/[userName]", `/${user.name}`);
				}}
				style={style}
			>
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
					<NextLink href="/[userName" as={`/${user.name}`} passHref>
						<UserName>{user.name}</UserName>
					</NextLink>
					<NextLink href="/[userName]" as={`/${user.name}`} passHref>
						<BioContainer tabIndex={-1}>
							{user.description && <Bio tw="mt-1">{user.description}</Bio>}
						</BioContainer>
					</NextLink>
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
				{status === "authenticated" && !isMyCard && (
					<Actions tw="ml-4">
						<Action
							disabled={fetching || !user.viewerCanFriend}
							onClick={async (e) => {
								e.stopPropagation();

								if (!user.viewerCanFriend || user.viewerIsFriend) return;

								const didSucceed = await acceptRequest({ where: { id: user.id } })
									.then((result) => !!result.data?.acceptFriendship)
									.catch(() => false);

								if (!didSucceed) {
									toast.error(`Could not connect with ${user.name}`);

									return;
								}

								toast.success(`You're now connected with ${user.name}! 🎉`);
							}}
							size="small"
							type="button"
						>
							{accepting ? <Spinner /> : "Accept"}
						</Action>
						<Action
							disabled={fetching}
							onClick={async (e) => {
								e.stopPropagation();

								if (user.viewerIsFriend) return;

								const didSucceed = await rejectRequest({ where: { id: user.id } })
									.then((result) => !!result.data?.rejectFriendship)
									.catch(() => false);

								if (!didSucceed) {
									toast.error(`Could not ignore ${user.name}'s request`);

									return;
								}

								toast.success(`${user.name}'s request has been ignored`);
							}}
							size="small"
							type="button"
							variant="secondary"
						>
							{rejecting ? <Spinner /> : "Ignore"}
						</Action>
					</Actions>
				)}
			</Root>
		);
	}
);

UserFriendRequestCard.displayName = "UserFriendRequestCard";
