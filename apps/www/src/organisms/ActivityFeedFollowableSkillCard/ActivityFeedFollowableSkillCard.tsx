import { Avatar, Button, GitHubAvatarImage, Spinner } from "@makepurple/components";
import { useOnKeyDown } from "@makepurple/hooks";
import { FormatUtils } from "@makepurple/utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import {
	ActivityFeedFollowableSkillCardSkillFragment,
	useFollowSkillMutation,
	useUnfollowSkillMutation
} from "../../graphql";
import { BookIcon } from "../../svgs";

const Root = tw.li`
	flex
	flex-row
	items-center
	px-6
	py-2
	cursor-pointer
	hover:bg-indigo-50
`;

const Index = tw.span`
	text-base
	font-semibold
`;

const SkillIcon = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const AvatarIconContainer = tw.div`
	flex
	items-center
	justify-center
	h-9
	w-9
	bg-white
	z-index[1]
`;

const NameContainer = tw.a`
	flex-grow
	self-stretch
	flex
	flex-col
	items-start
	justify-center
	pl-3
	focus:ring-0
	focus-visible:ring-0
`;

const Name = tw.span`
	leading-none
	font-semibold
	text-black
`;

const UsersCount = tw.span`
	text-sm
	leading-none
	text-gray-500
`;

const FollowButton = tw(Button)`
	flex-shrink-0
	w-20
`;

export interface ActivityFeedFollowableSkillCardProps {
	className?: string;
	index: number;
	skill: ActivityFeedFollowableSkillCardSkillFragment;
	style?: CSSProperties;
}

export const ActivityFeedFollowableSkillCard: FC<ActivityFeedFollowableSkillCardProps> = ({
	className,
	index,
	skill,
	style
}) => {
	const owner = skill.github.owner;
	const userCount = skill.usersCount;

	const router = useRouter();

	const [{ fetching: following }, followSkill] = useFollowSkillMutation();
	const [{ fetching: unfollowing }, unfollowSkill] = useUnfollowSkillMutation();

	const onEnter = useOnKeyDown({ key: "ENTER", global: false }, async () => {
		await router.push("/s/[skillOwner]/[skillName]", `/s/${skill.owner}/${skill.name}`);
	});

	const loading = following || unfollowing;

	return (
		<Root
			className={className}
			onClick={async () => {
				await router.push("/s/[skillOwner]/[skillName]", `/s/${skill.owner}/${skill.name}`);
			}}
			onKeyDown={onEnter}
			role="link"
			style={style}
			tabIndex={0}
			data-href={`/s/${skill.owner}/${skill.name}`}
		>
			<Index tw="mr-3">{index + 1}.</Index>
			<NextLink
				href="/s/[skillOwner]/[skillName]"
				as={`/s/${skill.owner}/${skill.name}`}
				passHref
			>
				<SkillIcon border={3} tabIndex={-1}>
					{owner.__typename === "GitHubOrganization" ? (
						<GitHubAvatarImage src={owner.avatarUrl} height={36} width={36} />
					) : (
						<AvatarIconContainer>
							<BookIcon height={28} width={28} />
						</AvatarIconContainer>
					)}
				</SkillIcon>
			</NextLink>
			<NextLink
				href="/s/[skillOwner]/[skillName]"
				as={`/s/${skill.owner}/${skill.name}`}
				passHref
			>
				<NameContainer tabIndex={-1}>
					<Name>{skill.name}</Name>
					<UsersCount tw="mt-1">{FormatUtils.toGitHubFixed(userCount)} users</UsersCount>
				</NameContainer>
			</NextLink>
			<FollowButton
				disabled={loading}
				onClick={async (e) => {
					e.stopPropagation();

					skill.viewerFollowing
						? await unfollowSkill({ where: { id: skill.id } })
						: await followSkill({ where: { id: skill.id } });
				}}
				size="small"
				type="button"
				variant={skill.viewerFollowing ? "alert" : "secondary"}
			>
				{loading ? <Spinner /> : skill.viewerFollowing ? "Unfollow" : "Follow"}
			</FollowButton>
		</Root>
	);
};
