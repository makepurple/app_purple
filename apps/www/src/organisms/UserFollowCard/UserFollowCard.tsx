import { Anchor, Button, Paper, Spinner, Tags, toast } from "@makepurple/components";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import {
	useFollowUserMutation,
	UserFollowCardUserFragment,
	UserWhereUniqueInput,
	useUnfollowUserMutation
} from "../../graphql";
import { UserAvatar } from "../UserAvatar";

const MAX_SKILLS_SHOWN = 5;

const Root = tw(Paper)`
	flex
	items-start
	p-4
	cursor-pointer
	hover:bg-indigo-50
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

	const router = useRouter();
	const { data: session, status } = useSession();

	const isMyCard = user.name === session?.user.name;

	const [{ fetching: following }, followUser] = useFollowUserMutation();
	const [{ fetching: unfollowing }, unfollowUser] = useUnfollowUserMutation();

	const skills = user.skills.nodes.slice(0, MAX_SKILLS_SHOWN);
	const desiredSkills = user.desiredSkills.nodes.slice(0, MAX_SKILLS_SHOWN);

	const skillsExtra = user.skills.totalCount - MAX_SKILLS_SHOWN;
	const desiredSkillsExtra = user.desiredSkills.totalCount - MAX_SKILLS_SHOWN;

	const loading: boolean = following || unfollowing;

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
				<NextLink href="/[userName]" as={`/${user.name}`} passHref>
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
			{!isMyCard && (
				<Actions tw="ml-4">
					<FollowButton
						disabled={loading}
						onClick={async (e) => {
							e.stopPropagation();

							if (status !== "authenticated") {
								await router.push("/signup");

								return;
							}

							const where: UserWhereUniqueInput = {
								name: user.name
							};

							if (user.viewerFollowing) {
								const didSucceed = await unfollowUser({ where })
									.then((result) => !!result.data?.unfollowUser)
									.catch(() => false);

								if (!didSucceed) {
									toast.error(`Could not unfollow ${user.name}`);

									return;
								}

								toast.success(`You unfollowed ${user.name}`);

								return;
							}

							const didSucceed = await followUser({ where })
								.then((result) => !!result.data?.followUser)
								.catch(() => false);

							if (!didSucceed) {
								toast.error(`Could not follow ${user.name}`);

								return;
							}

							toast.success(`You followed ${user.name}! 🎉`);
						}}
						size="small"
						type="button"
						variant="secondary"
					>
						{loading ? <Spinner /> : user.viewerFollowing ? "Unfollow" : "Follow"}
					</FollowButton>
				</Actions>
			)}
		</Root>
	);
});

UserFollowCard.displayName = "UserFollowCard";
