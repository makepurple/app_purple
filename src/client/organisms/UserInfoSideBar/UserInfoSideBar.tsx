import { Divider, Paper } from "@/client/atoms";
import { useGetUserInfoSideBarQuery } from "@/client/graphql";
import { Tags } from "@/client/molecules";
import { NewPostButton } from "@/client/organisms/NewPostButton";
import { TopLanguages } from "@/client/organisms/TopLanguages";
import { UserAvatar } from "@/client/organisms/UserAvatar";
import { GitHubIcon, OpenbaseIcon, TwitterIcon } from "@/client/svgs";
import { useSession } from "next-auth/client";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

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

const StyledNewPostButton = tw(NewPostButton)`
	w-full
	mt-4
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

	const [session] = useSession();

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
				{isMyUser && (
					<StyledNewPostButton userName={userName}>New Post</StyledNewPostButton>
				)}
			</MainInfoContainer>
			<Divider />
			<TopLanguagesContainer>
				<SubTitle>Most Used Languages</SubTitle>
				<TopLanguages topLanguages={user.github.topLanguages} tw="mt-4" />
			</TopLanguagesContainer>
			<Divider />
			<SkillsContainer>
				<SubTitle>Highlighted Skills</SubTitle>
				{!!user.skills.length && (
					<Skills type="positive">
						{user.skills.map((skill) => (
							<Tags.Tag key={skill.id} id={skill.id.toString()}>
								{skill.name}
							</Tags.Tag>
						))}
					</Skills>
				)}
				<SubTitle>Currently Learning</SubTitle>
				{!!user.desiredSkills.length && (
					<Skills type="negative">
						{user.desiredSkills.map((skill) => (
							<Tags.Tag key={skill.id} id={skill.id.toString()}>
								{skill.name}
							</Tags.Tag>
						))}
					</Skills>
				)}
			</SkillsContainer>
		</Paper>
	);
};
