import {
	Anchor,
	Button,
	Divider,
	GitHubIcon,
	NoDataText,
	OpenbaseIcon,
	Paper,
	Tags,
	TwitterIcon
} from "@makepurple/components";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { CSSProperties, FC, useState } from "react";
import tw from "twin.macro";
import { useGetUserInfoSideBarQuery } from "../../graphql";
import { PeopleIcon } from "../../svgs";
import { NewPostButton } from "../NewPostButton";
import { TopLanguages } from "../TopLanguages";
import { UserAvatar } from "../UserAvatar";

const UserInfoSideBarForm = dynamic(() => import("../UserInfoSideBarForm"), { ssr: false });

const MainInfoContainer = tw.div`
	p-6
	sm:p-8
`;

const TopLanguagesContainer = tw.div`
	p-6
	sm:p-8
`;

const SkillsContainer = tw.div`
	p-6
	sm:p-8
`;

const FormContainer = tw.div`
	p-6
	sm:p-8
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
	mt-1
	text-lg
	leading-none
	text-gray-500
`;

const Bio = tw.p`
	mt-3
	text-gray-500
	line-clamp-4
`;

const SocialLinks = tw.div`
	mt-4
	text-indigo-800
	[& > *]:not-first:ml-4
`;

const SocialLink = tw.a`
	inline-flex
`;

const Actions = tw.div`
	grid
	grid-template-columns[repeat(auto-fill, minmax(8rem, 1fr))]
	gap-4
	mt-4
`;

const FollowContainer = tw.div`
	flex
	flex-row
	items-center
	text-black
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
	mx-1
	font-bold
`;

const Skills = tw(Tags)`
	mt-4
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

	const { data: session } = useSession();

	const [formOpen, setFormOpen] = useState<boolean>(false);

	const user = data?.user;
	const isMyUser = user?.id === session?.user.id;

	if (!user) return null;

	const displayName: string = user.github.name ?? user.name;

	return (
		<Paper className={className} style={style}>
			<MainInfoContainer>
				<UserAvatar border={4} height={128} user={user} width={128} />
				<UserName>
					<DisplayName>{displayName}</DisplayName>
					{!!user.github.name && <SecondaryName>{user.name}</SecondaryName>}
				</UserName>
				{user.github.bio && <Bio>{user.github.bio}</Bio>}
				<SocialLinks>
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
					<Actions>
						<NewPostButton userName={userName}>New Post</NewPostButton>
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
				<FollowContainer tw="mt-4">
					<NextLink href="/[userName]/followers" as={`/${user.name}/followers`} passHref>
						<FollowAnchor tw="flex items-center">
							<PeopleIcon height={24} width={24} tw="mr-2" />
							<span tw="whitespace-pre">
								<FollowCount>
									{user.followers.totalCount.toLocaleString()}
								</FollowCount>{" "}
								Followers
							</span>
						</FollowAnchor>
					</NextLink>
					<Delimiter tw="mx-2" />
					<NextLink href="/[userName]/following" as={`/${user.name}/following`} passHref>
						<FollowAnchor>
							<FollowCount>{user.following.totalCount.toLocaleString()}</FollowCount>{" "}
							Following
						</FollowAnchor>
					</NextLink>
				</FollowContainer>
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
							<Skills type="positive">
								{user.skills.nodes.map((skill) => (
									<Tags.Tag key={skill.id} id={skill.id.toString()}>
										{skill.name}
									</Tags.Tag>
								))}
							</Skills>
						) : (
							<NoDataText tw="mt-4">This user has not added any skills</NoDataText>
						)}
						<SubTitle>Currently Learning</SubTitle>
						{user.desiredSkills.nodes.length ? (
							<Skills type="negative">
								{user.desiredSkills.nodes.map((skill) => (
									<Tags.Tag key={skill.id} id={skill.id.toString()}>
										{skill.name}
									</Tags.Tag>
								))}
							</Skills>
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
