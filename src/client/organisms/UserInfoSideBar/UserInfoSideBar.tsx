import { Avatar, Button, Divider, GitHubAvatarImage, Paper, Tags } from "@/client/atoms";
import { useGetUserInfoSideBarQuery } from "@/client/graphql";
import { TopLanguages } from "@/client/organisms/TopLanguages";
import { GitHubIcon, OpenbaseIcon, PersonIcon, TwitterIcon } from "@/client/svgs";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";

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

const SubTitle = styled.h2`
	${tw`
		text-xl
		leading-none
		font-semibold
		text-black
	`}
	&:not(:first-child) {
		${tw`
			mt-6
		`}
	}
`;

const UserAvatar = tw(Avatar)`
	h-32
	w-32
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

const SocialLinks = styled.div`
	${tw`
		mt-2
		text-indigo-800
	`}
	& > *:not(:first-child) {
		${tw`
			ml-2
		`}
	}
`;

const SocialLink = tw.a`
	inline-flex
	h-4
	w-4
`;

const NewPostButton = tw(Button)`
	w-full
	mt-4
`;

const MostUsedLanguages = tw(TopLanguages)`
	mt-4
`;

const Skills = tw(Tags)`
	mt-4
`;

export interface UserInfoSideBarProps {
	className?: string;
	style?: CSSProperties;
	username: string;
}

export const UserInfoSideBar: FC<UserInfoSideBarProps> = ({ className, style, username }) => {
	const [{ data }] = useGetUserInfoSideBarQuery({
		requestPolicy: "cache-first",
		variables: {
			name: username
		}
	});

	const user = data?.user;

	if (!user) return null;

	const displayName: string = user.github.name ?? user.name;

	return (
		<Paper className={className} style={style}>
			<MainInfoContainer>
				<NextLink href={`/${user.name}`} passHref>
					<UserAvatar border={4} title={user.name}>
						{user.image ? (
							<GitHubAvatarImage
								alt="user avatar"
								src={user.image}
								height={128}
								width={128}
							/>
						) : (
							<PersonIcon height={128} width={128} />
						)}
					</UserAvatar>
				</NextLink>
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
						<GitHubIcon height={16} width={16} />
					</SocialLink>
					{!!user.github.twitterUsername && (
						<SocialLink
							href={`https://twitter.com/${user.github.twitterUsername}`}
							target="_blank"
							rel="nofollow noopener noreferer"
							aria-label="twitter"
							title="Twitter"
						>
							<TwitterIcon height={16} width={16} />
						</SocialLink>
					)}
					<SocialLink
						href={`https://openbase.com/user/${user.name}`}
						target="_blank"
						rel="nofollow noopener noreferer"
						aria-label="openbase"
						title="Openbase"
					>
						<OpenbaseIcon height={16} width={16} />
					</SocialLink>
				</SocialLinks>
				<NextLink href={`/${user.name}/draft`} passHref>
					<NewPostButton as="a">New Post</NewPostButton>
				</NextLink>
			</MainInfoContainer>
			<Divider />
			<TopLanguagesContainer>
				<SubTitle>Most Used Languages</SubTitle>
				<MostUsedLanguages topLanguages={user.github.topLanguages} />
			</TopLanguagesContainer>
			<Divider />
			<SkillsContainer>
				<SubTitle>Highlighted Skills</SubTitle>
				{!!user.skills.length && (
					<Skills type="positive">
						{user.skills.map((skill) => (
							<Tags.Tag key={skill.id}>{skill.name}</Tags.Tag>
						))}
					</Skills>
				)}
				<SubTitle>Currently Learning</SubTitle>
				{!!user.desiredSkills.length && (
					<Skills type="negative">
						{user.desiredSkills.map((skill) => (
							<Tags.Tag key={skill.id}>{skill.name}</Tags.Tag>
						))}
					</Skills>
				)}
			</SkillsContainer>
		</Paper>
	);
};
