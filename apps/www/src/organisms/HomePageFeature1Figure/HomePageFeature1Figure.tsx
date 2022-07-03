import { Avatar, Button, GitHubAvatarImage, Paper, ShareButton } from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { GitHubIcon, OpenbaseIcon, PeopleIcon, ShareIcon, TwitterIcon } from "../../svgs";

const Root = tw(Paper)`
	inline-flex
	flex-col
	items-start
	gap-6
	p-6
	sm:flex-row
`;

const Content = tw.div`
	flex
	flex-col
	items-start
`;

const UserNameContainer = tw.div`
	flex
	gap-2
	text-2xl
	font-medium
`;

const DisplayName = tw.div`
	font-bold
	whitespace-nowrap
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

const StyledShareButton = tw(ShareButton)`
	pointer-events-none
`;

const Actions = tw.div`
	grid
	grid-template-columns[1fr 1fr]
	gap-4
	w-full
	pointer-events-none
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

const FollowAnchor = tw.span`
	text-gray-500
	[& > *]:text-gray-500
`;

const FollowCount = tw.span`
	text-black!
	font-semibold
`;

const Delimiter = tw.div`
	after:content["·"]
	font-bold
`;

export interface HomePageFeature1FigureProps {
	className?: string;
	style?: CSSProperties;
}

export const HomePageFeature1Figure: FC<HomePageFeature1FigureProps> = ({ className, style }) => {
	return (
		<Root className={className} style={style}>
			<Avatar border={6}>
				<GitHubAvatarImage
					src="https://avatars.githubusercontent.com/u/15151154"
					height={156}
					width={156}
				/>
			</Avatar>
			<Content>
				<UserNameContainer>
					<DisplayName>David Lee</DisplayName>
					<span>/</span>
					<span>leedavidcs</span>
				</UserNameContainer>
				<SocialLinks tw="mt-4">
					<SocialLink>
						<GitHubIcon height={24} width={24} />
					</SocialLink>
					<SocialLink>
						<TwitterIcon height={24} width={24} />
					</SocialLink>
					<SocialLink>
						<OpenbaseIcon height={24} width={24} />
					</SocialLink>
					<StyledShareButton
						share={{
							url: `https://makepurple.com/leedavidcs`,
							title: `Check out leedavidcs on MakePurple!`,
							text: oneLine`
								Check out leedavidcs's page on MakePurple, featuring posts,
								experiences, repositories, code-examples and more!
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
					</StyledShareButton>
				</SocialLinks>
				<Actions tw="mt-4">
					<Button type="button" variant="primary">
						Connect
					</Button>
					<Button type="button" variant="secondary">
						Connect
					</Button>
				</Actions>
				<ConnectionsContainer tw="mt-4">
					<PeopleIcon height={24} width={24} tw="mr-2" />
					<ConnectionsContents>
						<FollowContainer>
							<FollowAnchor tw="flex items-center">
								<span tw="whitespace-pre">
									<FollowCount>{FormatUtils.toGitHubFixed(12)}</FollowCount>{" "}
									Followers
								</span>
							</FollowAnchor>
							<Delimiter tw="mx-2" />

							<FollowAnchor>
								<FollowCount>{FormatUtils.toGitHubFixed(57)}</FollowCount> Following
							</FollowAnchor>
						</FollowContainer>
						<FollowAnchor>
							<FollowCount>{FormatUtils.toGitHubFixed(24)}</FollowCount> Connections
						</FollowAnchor>
					</ConnectionsContents>
				</ConnectionsContainer>
			</Content>
		</Root>
	);
};
