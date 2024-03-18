import { Anchor, Brand, Footer, Logo, MainContainer, PageContainer } from "@makepurple/components";
import NextImage from "next/legacy/image";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { DiscordIcon, GitHubIcon } from "../../svgs";

const Root = tw(PageContainer)`
	h-auto
	py-8
`;

const Content = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	gap-3
	px-6
	md:gap-8
`;

const Top = tw.div`
	flex
	flex-col
	items-start
	gap-3
	md:flex-row
	md:items-center
`;

const LeftContainer = tw.div`
	flex-grow
	flex
	flex-col
	items-start
	gap-3
	md:flex-row
	md:items-center
`;

const BrandContainer = tw.div`
	flex
	items-center
	gap-1
`;

const PoweredByStellate = tw.a`
	relative
	width[113px]
	height[50px]
	md:width[136px]
	md:height[60px]
`;

const LinksContainer = tw.nav`
	flex-shrink-0
	flex
	flex-col
	gap-3
	text-base
	md:flex-row
	md:gap-6
	lg:gap-12
	md:text-lg
`;

const SiteLink = tw(Anchor)`
	text-gray-600/80
	font-medium
`;

const Bottom = tw.div`
	flex
	flex-col
	items-start
	gap-3
	md:flex-row
	md:items-center
`;

const ExternalLinks = tw.div`
	flex-grow
	flex
	flex-col
	items-start
	gap-3
	md:flex-row
	md:gap-6
	md:pl-3
	md:items-center
`;

const ExternalLink = tw(SiteLink)`
	flex
	items-center
	gap-2
`;

const Legal = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-start
	gap-3
	md:flex-row
	md:gap-6
	md:items-center
`;

const Copyright = tw.span`
	text-gray-600/80
	font-medium
`;

export interface SiteWideFooterProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideFooter: FC<SiteWideFooterProps> = ({ className, style }) => {
	return (
		<Root as={Footer} className={className} style={style}>
			<Content>
				<Top>
					<LeftContainer>
						<BrandContainer>
							<Logo />
							<Brand />
						</BrandContainer>
						<PoweredByStellate
							href="https://stellate.co/?ref=powered-by"
							rel="noopener"
							target="_blank"
						>
							<NextImage
								src="https://stellate.co/badge.svg"
								alt="Powered by Stellate, the GraphQL Edge Cache"
								loader={({ src }) => src}
								layout="fill"
								unoptimized
							/>
						</PoweredByStellate>
					</LeftContainer>
					<LinksContainer>
						<NextLink legacyBehavior href="/blog" passHref>
							<SiteLink>Blog</SiteLink>
						</NextLink>
						<NextLink legacyBehavior href="/about" passHref>
							<SiteLink>About</SiteLink>
						</NextLink>
						<NextLink legacyBehavior href="/skills" passHref>
							<SiteLink>Skills</SiteLink>
						</NextLink>
						<SiteLink
							href="mailto:david@makepurple.com"
							rel="noopener nofollow"
							target="_blank"
						>
							Contact Us
						</SiteLink>
					</LinksContainer>
				</Top>
				<Bottom>
					<ExternalLinks>
						<ExternalLink
							href="https://github.com/makepurple/makepurple"
							target="_blank"
						>
							<GitHubIcon />
							<span>GitHub</span>
						</ExternalLink>
						<ExternalLink href="https://discord.gg/NUVCnHY88h" target="_blank">
							<DiscordIcon />
							<span>Discord</span>
						</ExternalLink>
					</ExternalLinks>
					<Legal>
						<NextLink legacyBehavior href="/legal/terms" passHref>
							<SiteLink>Terms</SiteLink>
						</NextLink>
						<NextLink legacyBehavior href="/legal/privacy" passHref>
							<SiteLink>Privacy</SiteLink>
						</NextLink>
						<Copyright>&copy; MakePurple {new Date().getFullYear()}</Copyright>
					</Legal>
				</Bottom>
			</Content>
		</Root>
	);
};

export default SiteWideFooter;
