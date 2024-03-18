import { AlertDialog, Anchor, Button, Paper, Spinner, Tags, toast } from "@makepurple/components";
import { oneLine } from "common-tags";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	useDeleteFriendshipMutation,
	useFriendRequestUserMutation,
	UserFriendCardUserFragment
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
`;

const Action = tw(Button)`
	flex-shrink-0
	w-20
`;

export interface UserFriendCardProps {
	className?: string;
	style?: CSSProperties;
	user: UserFriendCardUserFragment;
}

export const UserFriendCard = forwardRef<HTMLDivElement, UserFriendCardProps>((props, ref) => {
	const { className, style, user } = props;

	const router = useRouter();
	const { data: session, status } = useSession();

	const isMyCard = user.name === session?.user.name;

	const [{ fetching: requesting }, friendRequest] = useFriendRequestUserMutation();
	const [{ fetching: unfriending }, unfriend] = useDeleteFriendshipMutation();

	const skills = user.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
	const desiredSkills = user.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

	const skillsExtra = user.skills.totalCount - MAX_SKILLS_SHOWN;
	const desiredSkillsExtra = user.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

	const loading: boolean = requesting || unfriending;

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
				<NextLink legacyBehavior href="/[userName" as={`/${user.name}`} passHref>
					<UserName>{user.name}</UserName>
				</NextLink>
				<NextLink legacyBehavior href="/[userName]" as={`/${user.name}`} passHref>
					<BioContainer tabIndex={-1}>
						{user.description && <Bio tw="mt-1">{user.description}</Bio>}
					</BioContainer>
				</NextLink>
				{!!skills.length && (
					<Tags type="positive" tw="mt-2">
						{skills.map((skill) => (
							<NextLink
								legacyBehavior
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
							<NextLink
								legacyBehavior
								href="/[userName]"
								as={`/${user.name}`}
								passHref
							>
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
								legacyBehavior
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
							<NextLink
								legacyBehavior
								href="/[userName]"
								as={`/${user.name}`}
								passHref
							>
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
					{user.viewerIsFriend ? (
						<AlertDialog
							description={oneLine`
								Are you sure you want to remove ${user.name} as a connection?
								You can send another connection request to ${user.name}, but
								${user.name} will be unable to for 6 months.
							`}
							onConfirm={async () => {
								const didSucceed = await unfriend({ where: { name: user.name } })
									.then((result) => !!result.data?.deleteFriendship)
									.catch(() => false);

								if (!didSucceed) {
									toast.error(`Could not ${user.name} as a connection`);

									return;
								}

								toast.success(`You are no-longer connected with ${user.name}`);
							}}
							text="Yes, remove connection"
						>
							<Action
								disabled={loading}
								onClick={(e) => {
									e.stopPropagation();
								}}
								size="small"
								type="button"
								variant="alert"
							>
								{unfriending ? <Spinner /> : "Remove"}
							</Action>
						</AlertDialog>
					) : (
						<Action
							disabled={loading}
							onClick={async (e) => {
								e.stopPropagation();

								const didSucceed = await friendRequest({
									where: { name: user.name }
								})
									.then((result) => !!result.data?.requestFriendship)
									.catch(() => false);

								if (!didSucceed) {
									toast.error(`Could not send a request to ${user.name}`);

									return;
								}

								toast.success(`Request to ${user.name} was sent`);
							}}
							size="small"
							type="button"
							variant="secondary"
						>
							{requesting ? <Spinner /> : "Connect"}
						</Action>
					)}
				</Actions>
			)}
		</Root>
	);
});

UserFriendCard.displayName = "UserFriendCard";
