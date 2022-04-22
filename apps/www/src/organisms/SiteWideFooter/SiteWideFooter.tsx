import { Anchor, Brand, Footer, Logo, MainContainer, PageContainer } from "@makepurple/components";
import NextImage from "next/image";
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
	gap-8
	px-6
`;

const Top = tw.div`
	flex
	flex-col
	items-start
	gap-3
	md:flex-row
	md:items-center
`;

const BrandContainer = tw.div`
	flex-grow
	flex
	items-center
	gap-1
`;

const PoweredByGraphCdn = tw.a`
	relative
	width[156px]
	height[60px]
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
					<BrandContainer>
						<Logo />
						<Brand />
						<PoweredByGraphCdn
							href="https://graphcdn.io/?ref=powered-by"
							rel="noopener"
							target="_blank"
							tw="ml-3"
						>
							<NextImage
								src="https://graphcdn.io/badge.svg"
								alt="Powered by GraphCDN, the GraphQL CDN"
								loader={({ src }) => src}
								layout="fill"
								unoptimized
							/>
						</PoweredByGraphCdn>
					</BrandContainer>
					<LinksContainer>
						<NextLink href="/blog" passHref>
							<SiteLink>Blog</SiteLink>
						</NextLink>
						<NextLink href="/about" passHref>
							<SiteLink>About</SiteLink>
						</NextLink>
						<NextLink href="/skills" passHref>
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
						<ExternalLink href="https://discord.gg/pnxNka88" target="_blank">
							<DiscordIcon />
							<span>Discord</span>
						</ExternalLink>
					</ExternalLinks>
					<Legal>
						<NextLink href="/legal/terms" passHref>
							<SiteLink>Terms</SiteLink>
						</NextLink>
						<NextLink href="/legal/privacy" passHref>
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
