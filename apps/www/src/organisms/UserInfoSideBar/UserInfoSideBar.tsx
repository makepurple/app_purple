import {
	AlertDialog,
	Anchor,
	Button,
	Divider,
	GitHubIcon,
	NoDataText,
	OpenbaseIcon,
	Paper,
	ShareButton,
	Spinner,
	Tags,
	toast,
	TwitterIcon
} from "@makepurple/components";
import { useMountEffect } from "@makepurple/hooks";
import { dayjs, FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, useMemo, useState } from "react";
import tw from "twin.macro";
import {
	useDeleteFriendshipMutation,
	useFollowUserMutation,
	useFriendRequestUserMutation,
	useGetUserInfoSideBarQuery,
	UserRole,
	UserWhereUniqueInput,
	useUnfollowUserMutation
} from "../../graphql";
import { CancelIcon, PeopleIcon, ShareIcon } from "../../svgs";
import { PermissionUtils } from "../../utils";
import { BanUserForm } from "../BanUserForm";
import { NewPostButton } from "../NewPostButton";
import { TopLanguages } from "../TopLanguages";
import { UnbanUserButton } from "../UnbanUserButton";
import { UserAvatar } from "../UserAvatar";

const UserInfoSideBarForm = dynamic(() => import("../UserInfoSideBarForm"), { ssr: false });

const MainInfoContainer = tw.div`
	p-6
`;

const TopLanguagesContainer = tw.div`
	p-6
`;

const SkillsContainer = tw.div`
	p-6
`;

const FormContainer = tw.div`
	p-6
`;

const SubTitle = tw.h2`
	text-xl
	leading-none
	font-semibold
	text-black
	not-first:mt-6
`;

const UserName = tw.h1`
	mt-3
`;

const DisplayName = tw.div`
	text-2xl
	leading-none
	font-bold
	text-black
`;

const SecondaryName = tw.div`
	text-lg
	leading-none
	text-gray-500
`;

const Bio = tw.p`
	text-gray-500
	line-clamp-4
`;

const BanInfo = tw.div`
	flex
	flex-col
	gap-2
	p-2
	border
	border-solid
	border-gray-300
	rounded-md
	text-red-700
	bg-violet-50
`;

const BannedBy = tw.span`
	font-semibold
	leading-none
`;

const BanReason = tw.p`
	text-sm
`;

const BanDate = tw.span`
	text-sm
`;

const SocialLinks = tw.div`
	inline-flex
	items-center
	flex-wrap
	gap-4
	text-violet-800
`;

const SocialLink = tw.a`
	inline-flex
`;

const BanButton = tw(Button)`
	whitespace-nowrap
`;

const Actions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(9rem, 1fr))]
	gap-4
`;

const ConnectionsContainer = tw.div`
	flex
	flex-row
	items-start
	text-black
`;

const ConnectionsContents = tw.div`
	flex
	flex-col
	items-start
`;

const FollowContainer = tw.div`
	flex
	flex-row
	items-start
`;

const FollowAnchor = tw(Anchor)`
	text-gray-500
	[& > *]:text-gray-500
	hover:[& > *]:text-cyan-600
`;

const FollowCount = tw.span`
	text-black!
	font-semibold
`;

const Delimiter = tw.div`
	after:content["·"]
	font-bold
`;

export interface UserInfoSideBarProps {
	className?: string;
	style?: CSSProperties;
	userName: string;
}

export const UserInfoSideBar: FC<UserInfoSideBarProps> = ({ className, style, userName }) => {
	const [{ data, fetching: fetchingData }, refetch] = useGetUserInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	useMountEffect(() => {
		refetch({ requestPolicy: "network-only" });
	});

	const [{ fetching: following }, followUser] = useFollowUserMutation();
	const [{ fetching: unfollowing }, unfollowUser] = useUnfollowUserMutation();

	const [{ fetching: friendRequesting }, friendRequestUser] = useFriendRequestUserMutation();
	const [{ fetching: unfriending }, unfriendUser] = useDeleteFriendshipMutation();

	const router = useRouter();
	const { data: session, status } = useSession();

	const [mode, setMode] = useState<"banning" | "editing" | "viewing">("viewing");

	const user = data?.user;
	const isMyUser = user?.name === session?.user.name;

	const canBan = useMemo(() => {
		if (!session?.user || !user) return false;

		return PermissionUtils.isGreaterRole(session.user.role as UserRole, user.role);
	}, [session?.user, user]);

	if (!user) return null;

	const displayName: string = user.github.name ?? user.name;
	const hasTopLanguages = !!user.github.topLanguages.nodes.length;

	const loadingData = fetchingData || status === "loading";

	const loadingFollow = following || unfollowing;
	const loadingFriend = friendRequesting || unfriending;

	return (
		<Paper className={className} style={style}>
			<MainInfoContainer>
				<UserAvatar border={6} height={156} user={user} width={156} />
				<UserName>
					<DisplayName>{displayName}</DisplayName>
					{!!user.github.name && <SecondaryName tw="mt-1">{user.name}</SecondaryName>}
				</UserName>
				{user.github.bio && <Bio tw="mt-3">{user.github.bio}</Bio>}
				{mode === "banning" ? (
					<BanUserForm
						onClose={() => {
							setMode("viewing");
						}}
						user={user}
						tw="mt-3"
					/>
				) : (
					<>
						{canBan && user.banReason && (
							<BanInfo tw="mt-3">
								<BannedBy>
									Banned by: {user.banReason.bannedBy?.name ?? "Unknown"}
								</BannedBy>
								<BanDate>
									on: {dayjs(user.banReason.createdAt).format("MMM DD, YYYY")}
								</BanDate>
								<BanReason>{user.banReason.reason}</BanReason>
							</BanInfo>
						)}
						<SocialLinks tw="mt-4">
							<SocialLink
								href={user.github.url}
								target="_blank"
								rel="nofollow noopener noreferer"
								aria-label="github"
								title="GitHub"
							>
								<GitHubIcon height={24} width={24} />
							</SocialLink>
							{!!user.github.twitterUsername && (
								<SocialLink
									href={`https://twitter.com/${user.github.twitterUsername}`}
									target="_blank"
									rel="nofollow noopener noreferer"
									aria-label="twitter"
									title="Twitter"
								>
									<TwitterIcon height={24} width={24} />
								</SocialLink>
							)}
							<SocialLink
								href={`https://openbase.com/user/${user.name}`}
								target="_blank"
								rel="nofollow noopener noreferer"
								aria-label="openbase"
								title="Openbase"
							>
								<OpenbaseIcon height={24} width={24} />
							</SocialLink>
							<ShareButton
								share={{
									url: `https://makepurple.com/${userName}`,
									title: `Check out ${userName} on MakePurple!`,
									text: oneLine`
										Check out ${isMyUser ? "my" : `${userName}'s`} page on
										MakePurple, featuring posts, experiences, repositories,
										code-examples and more!
									`
								}}
								size="small"
								tags={["makepurple"]}
								utm={{
									content: "user_profile"
								}}
								variant="secondary"
							>
								<ShareIcon height={16} width={16} />
								<span tw="ml-1">Share</span>
							</ShareButton>
							{canBan &&
								(user.banned ? (
									<UnbanUserButton
										size="small"
										userName={userName}
										variant="secondary"
									>
										Unban
									</UnbanUserButton>
								) : (
									<BanButton
										onClick={() => {
											setMode("banning");
										}}
										size="small"
										variant="secondary"
									>
										Ban User
									</BanButton>
								))}
						</SocialLinks>
						{isMyUser && mode !== "editing" && (
							<Actions tw="mt-4">
								<NewPostButton>
									{({ draft }) => (draft ? <>Edit Draft</> : <>New Post</>)}
								</NewPostButton>
								<Button
									disabled={loadingData}
									onClick={() => {
										setMode("editing");
									}}
									type="button"
									variant="secondary"
								>
									Edit Profile
								</Button>
							</Actions>
						)}
					</>
				)}
				{!isMyUser && (
					<Actions tw="mt-4">
						{user.viewerIsFriend ? (
							<AlertDialog
								description={oneLine`
									Are you sure you want to remove ${user.name} as a connection?
									You can send another connection request to ${user.name}, but
									${user.name} will be unable to for 6 months.
								`}
								onConfirm={async () => {
									const didSucceed = await unfriendUser({
										where: { name: user.name }
									})
										.then((result) => !!result.data?.deleteFriendship)
										.catch(() => false);

									if (!didSucceed) {
										toast.error(`Could not unfriend ${user.name}`);

										return;
									}

									toast.success(`Unfriended ${user.name}`);
								}}
								text="Yes, remove connection"
							>
								<Button
									disabled={loadingData || loadingFriend}
									onClick={(e) => {
										e.stopPropagation();
									}}
									type="button"
									variant="alert"
								>
									{loadingFriend ? (
										<Spinner tw="flex-shrink-0 mr-1" />
									) : (
										<CancelIcon
											height={24}
											width={24}
											tw="flex-shrink-0 mr-1"
										/>
									)}
									<span>Connection</span>
								</Button>
							</AlertDialog>
						) : (
							<Button
								disabled={loadingData || loadingFriend || !user.viewerCanFriend}
								onClick={async () => {
									if (status !== "authenticated") {
										await router.push("/signup");

										return;
									}

									const didSucceed = await friendRequestUser({
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
								type="button"
							>
								<span>Connect</span>
								{loadingFriend && <Spinner tw="ml-2" />}
							</Button>
						)}
						<Button
							disabled={loadingData || loadingFollow}
							onClick={async () => {
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
							type="button"
							variant="secondary"
						>
							<span>{user.viewerFollowing ? "Unfollow" : "Follow"}</span>
							{loadingFollow && <Spinner tw="ml-2" />}
						</Button>
					</Actions>
				)}
				<ConnectionsContainer tw="mt-4">
					<PeopleIcon height={24} width={24} tw="mr-2" />
					<ConnectionsContents>
						<FollowContainer>
							<NextLink
								legacyBehavior
								href="/[userName]/connections/followers"
								as={`/${user.name}/connections/followers`}
								passHref
							>
								<FollowAnchor tw="flex items-center">
									<span tw="whitespace-pre">
										<FollowCount>
											{FormatUtils.toGitHubFixed(user.followersCount)}
										</FollowCount>{" "}
										Followers
									</span>
								</FollowAnchor>
							</NextLink>
							<Delimiter tw="mx-2" />
							<NextLink
								legacyBehavior
								href="/[userName]/connections/following"
								as={`/${user.name}/connections/following`}
								passHref
							>
								<FollowAnchor>
									<FollowCount>
										{FormatUtils.toGitHubFixed(user.followingCount)}
									</FollowCount>{" "}
									Following
								</FollowAnchor>
							</NextLink>
						</FollowContainer>
						<NextLink
							legacyBehavior
							href="/[userName]/connections"
							as={`/${user.name}/connections`}
							passHref
						>
							<FollowAnchor>
								<FollowCount>
									{FormatUtils.toGitHubFixed(user.friendsCount)}
								</FollowCount>{" "}
								Connections
							</FollowAnchor>
						</NextLink>
					</ConnectionsContents>
				</ConnectionsContainer>
			</MainInfoContainer>
			<Divider />
			{mode !== "editing" ? (
				<>
					<TopLanguagesContainer>
						<SubTitle>Most Used Languages</SubTitle>
						{hasTopLanguages ? (
							<TopLanguages topLanguages={user.github.topLanguages} tw="mt-4" />
						) : (
							<NoDataText tw="mt-4">
								We couldn&apos;t find any languages for {user.name}
							</NoDataText>
						)}
					</TopLanguagesContainer>
					<Divider />
					<SkillsContainer>
						<SubTitle>Highlighted Skills</SubTitle>
						{user.skills.nodes.length ? (
							<Tags type="positive" tw="mt-4">
								{user.skills.nodes.map((skill) => (
									<NextLink
										legacyBehavior
										key={skill.id}
										href="/s/[skillOwner]/[skillName]"
										as={`/s/${skill.owner}/${skill.name}`}
										passHref
									>
										<Tags.Tag
											id={skill.id.toString()}
											title={`${skill.owner}/${skill.name}`}
										>
											{skill.name}
										</Tags.Tag>
									</NextLink>
								))}
							</Tags>
						) : (
							<NoDataText tw="mt-4">{user.name} has not added any skills</NoDataText>
						)}
						<SubTitle>Currently Learning</SubTitle>
						{user.desiredSkills.nodes.length ? (
							<Tags type="negative" tw="mt-4">
								{user.desiredSkills.nodes.map((skill) => (
									<NextLink
										legacyBehavior
										key={skill.id}
										href="/s/[skillOwner]/[skillName]"
										as={`/s/${skill.owner}/${skill.name}`}
										passHref
									>
										<Tags.Tag
											id={skill.id.toString()}
											title={`${skill.owner}/${skill.name}`}
										>
											{skill.name}
										</Tags.Tag>
									</NextLink>
								))}
							</Tags>
						) : (
							<NoDataText tw="mt-4">
								{user.name} has not added any desired skills
							</NoDataText>
						)}
					</SkillsContainer>
				</>
			) : (
				<FormContainer>
					<UserInfoSideBarForm
						onClose={() => {
							setMode("viewing");
						}}
						userName={userName}
					/>
				</FormContainer>
			)}
		</Paper>
	);
};
