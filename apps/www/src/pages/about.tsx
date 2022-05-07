import { Anchor, Avatar, Brand, GitHubAvatarImage, MainContainer } from "@makepurple/components";
import { oneLine } from "common-tags";
import { NextPage } from "next";
import NextLink from "next/link";
import React from "react";
import tw from "twin.macro";
import { Seo } from "../organisms";
import { GitHubIcon, LinkedinIcon, TwitterIcon } from "../svgs";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-center
	justify-center
	pt-6
	pb-24
	text-center
`;

const Header = tw.h1`
	text-5xl
	font-bold
	text-gray-700
`;

const StyledBrand = tw(Brand)`
	font-size[inherit]
`;

const Content = tw.div`
	flex
	flex-col
	items-center
	gap-12
	lg:flex-row
	lg:items-start
`;

const UserSection = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-center
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-lg
`;

const UserTitle = tw.span`
	font-semibold
	text-gray-500
`;

const UserName = tw.h2`
	text-4xl
	font-semibold
	text-gray-700
`;

const AtName = tw(Anchor)`
	text-sm
	font-semibold
	leading-none
	text-gray-500
`;

const SocialLinks = tw.div`
	flex
	items-center
	justify-center
	gap-3
	text-gray-500
`;

const About = tw.div`
	flex
	flex-col
	gap-6
	text-left
	text-lg
	text-gray-600
	max-w-2xl
`;

export const Page: NextPage = () => {
	return (
		<Root>
			<Seo
				title="About"
				description={oneLine`
					MakePurple is a discoverability platform for both skills and developers
					for learning new things from other developers.
				`}
				robots={{ follow: true, index: true }}
			/>
			<Header>
				About <StyledBrand />
			</Header>
			<Content tw="mt-12">
				<UserSection>
					<NextLink href="/[userName]" as="/leedavidcs" passHref>
						<StyledAvatar border={8} title="leedavidcs" aria-label="leedavidcs">
							<GitHubAvatarImage
								src="https://avatars.githubusercontent.com/u/15151154"
								height={224}
								width={224}
							/>
						</StyledAvatar>
					</NextLink>
					<UserName tw="mt-1.5">
						<span>David Lee</span>
					</UserName>
					<NextLink href="/[userName]" as="/leedavidcs" passHref>
						<AtName>@leedavidcs</AtName>
					</NextLink>
					<UserTitle tw="mt-4">Owner</UserTitle>
					<SocialLinks tw="mt-4">
						<a
							href="https://github.com/leedavidcs"
							target="_blank"
							rel="noreferrer"
							title="GitHub"
							aria-label="leedavidcs github"
						>
							<GitHubIcon height={24} width={24} />
						</a>
						<a
							href="https://twitter.com/leedavidcs_"
							target="_blank"
							rel="noreferrer"
							title="Twitter"
							aria-label="leedavidcs twitter"
						>
							<TwitterIcon height={24} width={24} />
						</a>
						<a
							href="https://www.linkedin.com/in/leedavidcs"
							target="_blank"
							rel="noreferrer"
							title="Linkedin"
							aria-label="leedavidcs linkedin"
						>
							<LinkedinIcon height={24} width={24} />
						</a>
					</SocialLinks>
				</UserSection>
				<About>
					<p>
						Hi, I&apos;m David! Welcome to my project, <Brand tw="text-lg" />!
					</p>
					<p>
						MakePurple originally started out as a personal website and sandbox to
						showcase myself as a developer and to try out new things. Over the course of
						its development, I found discovery of new skills to be invaluable to
						technical development, and discovery of people with varying strengths to
						create learning opportunities and potential partnerships.
					</p>
					<p>
						Since then, MakePurple has evolved to become a discoverability platform for
						both skills and developers, such that we can learn and discover new things
						from one another to become possibly better rounded (and purple)!
					</p>
					<p>
						If you haven&apos;t already,{" "}
						<NextLink href="/signup" passHref>
							<Anchor>join MakePurple</Anchor>
						</NextLink>{" "}
						and come teach me a thing or two! 😉
					</p>
				</About>
			</Content>
		</Root>
	);
};

export default Page;
