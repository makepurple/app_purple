import {
	Anchor,
	Button,
	Divider,
	GitHubIcon,
	NoDataText,
	OpenbaseIcon,
	Paper,
	Spinner,
	Tags,
	TwitterIcon
} from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { CSSProperties, FC, useState } from "react";
import tw from "twin.macro";
import {
	useFollowUserMutation,
	useFriendRequestUserMutation,
	useGetUserInfoSideBarQuery,
	useUnfollowUserMutation,
	useUnfriendUserMutation
} from "../../graphql";
import { CancelIcon, PeopleIcon } from "../../svgs";
import { NewPostButton } from "../NewPostButton";
import { TopLanguages } from "../TopLanguages";
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

const SocialLinks = tw.div`
	inline-flex
	gap-4
	text-indigo-800
`;

const SocialLink = tw.a`
	inline-flex
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
	const [{ data }] = useGetUserInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name: userName
		}
	});

	const [{ fetching: following }, followUser] = useFollowUserMutation();
	const [{ fetching: unfollowing }, unfollowUser] = useUnfollowUserMutation();

	const [{ fetching: friendRequesting }, friendRequestUser] = useFriendRequestUserMutation();
	const [{ fetching: unfriending }, unfriendUser] = useUnfriendUserMutation();

	const { data: session } = useSession();

	const [formOpen, setFormOpen] = useState<boolean>(false);

	const user = data?.user;
	const isMyUser = user?.id === session?.user.id;

	if (!user) return null;

	const displayName: string = user.github.name ?? user.name;

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
				</SocialLinks>
				{isMyUser && !formOpen && (
					<Actions tw="mt-4">
						<NewPostButton userName={userName}>
							{({ draft }) => (draft ? "Edit Draft" : "New Post")}
						</NewPostButton>
						<Button
							onClick={() => {
								setFormOpen(true);
							}}
							type="button"
							variant="secondary"
						>
							Edit Profile
						</Button>
					</Actions>
				)}
				{!isMyUser && (
					<Actions tw="mt-4">
						<Button
							disabled={
								loadingFriend || (!user.viewerIsFriend && !user.viewerCanFriend)
							}
							onClick={async () => {
								user.viewerIsFriend
									? await unfriendUser({ where: { name: user.name } })
									: await friendRequestUser({ where: { name: user.name } });
							}}
							type="button"
							variant={user.viewerIsFriend ? "alert" : "primary"}
						>
							{user.viewerIsFriend ? (
								<>
									<CancelIcon height={24} width={24} tw="flex-shrink-0 mr-1" />
									Connection
								</>
							) : (
								"Connect"
							)}
						</Button>
						<Button
							disabled={loadingFollow}
							onClick={async () => {
								user.viewerFollowing
									? await unfollowUser({ where: { name: user.name } })
									: await followUser({ where: { name: user.name } });
							}}
							type="button"
							variant="secondary"
						>
							{user.viewerFollowing ? "Unfollow" : "Follow"}
							{loadingFollow && <Spinner tw="ml-2" />}
						</Button>
					</Actions>
				)}
				<ConnectionsContainer tw="mt-4">
					<PeopleIcon height={24} width={24} tw="mr-2" />
					<ConnectionsContents>
						<FollowContainer>
							<NextLink
								href="/[userName]/followers"
								as={`/${user.name}/followers`}
								passHref
							>
								<FollowAnchor tw="flex items-center">
									<span tw="whitespace-pre">
										<FollowCount>
											{FormatUtils.toGitHubFixed(user.followers.totalCount)}
										</FollowCount>{" "}
										Followers
									</span>
								</FollowAnchor>
							</NextLink>
							<Delimiter tw="mx-2" />
							<NextLink
								href="/[userName]/following"
								as={`/${user.name}/following`}
								passHref
							>
								<FollowAnchor>
									<FollowCount>
										{FormatUtils.toGitHubFixed(user.following.totalCount)}
									</FollowCount>{" "}
									Following
								</FollowAnchor>
							</NextLink>
						</FollowContainer>
						<NextLink
							href="/[userName]/connections"
							as={`/${user.name}/connections`}
							passHref
						>
							<FollowAnchor>
								<FollowCount>
									{FormatUtils.toGitHubFixed(user.friends.totalCount)}
								</FollowCount>{" "}
								Connections
							</FollowAnchor>
						</NextLink>
					</ConnectionsContents>
				</ConnectionsContainer>
			</MainInfoContainer>
			<Divider />
			{!formOpen ? (
				<>
					<TopLanguagesContainer>
						<SubTitle>Most Used Languages</SubTitle>
						<TopLanguages topLanguages={user.github.topLanguages} tw="mt-4" />
					</TopLanguagesContainer>
					<Divider />
					<SkillsContainer>
						<SubTitle>Highlighted Skills</SubTitle>
						{user.skills.nodes.length ? (
							<Tags type="positive" tw="mt-4">
								{user.skills.nodes.map((skill) => (
									<Tags.Tag key={skill.id} id={skill.id.toString()}>
										{skill.name}
									</Tags.Tag>
								))}
							</Tags>
						) : (
							<NoDataText tw="mt-4">This user has not added any skills</NoDataText>
						)}
						<SubTitle>Currently Learning</SubTitle>
						{user.desiredSkills.nodes.length ? (
							<Tags type="negative" tw="mt-4">
								{user.desiredSkills.nodes.map((skill) => (
									<Tags.Tag key={skill.id} id={skill.id.toString()}>
										{skill.name}
									</Tags.Tag>
								))}
							</Tags>
						) : (
							<NoDataText tw="mt-4">
								This user has not added any desired skills
							</NoDataText>
						)}
					</SkillsContainer>
				</>
			) : (
				<FormContainer>
					<UserInfoSideBarForm
						onClose={() => {
							setFormOpen(false);
						}}
						userName={userName}
					/>
				</FormContainer>
			)}
		</Paper>
	);
};
