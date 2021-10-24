import { Avatar, GitHubAvatarImage, Paper } from "@/client/atoms";
import type { UserInfoSideBarUserFragment } from "@/client/graphql";
import { GitHubIcon, OpenbaseIcon, PersonIcon, TwitterIcon } from "@/client/svgs";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw, { styled } from "twin.macro";

const MainInfoContainer = tw.div`
	p-8
`;

const UserAvatar = tw(Avatar)`
	h-32
	w-32
`;

const Bio = tw.p`
	mt-2
	text-gray-500
	line-clamp-4
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

export interface UserInfoSideBarProps {
	className?: string;
	style?: CSSProperties;
	user: UserInfoSideBarUserFragment;
}

export const UserInfoSideBar: FC<UserInfoSideBarProps> = ({ className, style, user }) => {
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
					<DisplayName title={displayName}>{displayName}</DisplayName>
					{!!user.github.name && (
						<SecondaryName title={user.name}>{user.name}</SecondaryName>
					)}
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
			</MainInfoContainer>
		</Paper>
	);
};
