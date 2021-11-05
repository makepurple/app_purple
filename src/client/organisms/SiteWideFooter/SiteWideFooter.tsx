import { Anchor, Brand, Footer, MainContainer, PageContainer } from "@/client/atoms";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(PageContainer)`
	h-auto
`;

const Content = tw(MainContainer)`
	flex
	flex-col
	items-start
	gap-4
	py-8
	sm:flex-row
	sm:flex-wrap
	sm:items-center
`;

const BrandContainer = tw.div`
	flex-grow
`;

const LinksContainer = tw.nav`
	flex-shrink-0
	flex
	gap-6
	sm:gap-12
`;

const SiteLink = tw(Anchor)`
	text-gray-800
	opacity-70
	hover:text-purple-500
	hover:opacity-100
`;

export interface SiteWideFooterProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideFooter: FC<SiteWideFooterProps> = ({ className, style }) => {
	return (
		<Root as={Footer} className={className} style={style}>
			<Content>
				<BrandContainer>
					<NextLink href="/" passHref>
						<Brand />
					</NextLink>
				</BrandContainer>
				<LinksContainer>
					<NextLink href="/blog" passHref>
						<SiteLink>Blog</SiteLink>
					</NextLink>
					<NextLink href="/about" passHref>
						<SiteLink>About</SiteLink>
					</NextLink>
					<NextLink href="/legal/terms" passHref>
						<SiteLink>Terms</SiteLink>
					</NextLink>
					<NextLink href="/legal/privacy" passHref>
						<SiteLink>Privacy</SiteLink>
					</NextLink>
				</LinksContainer>
			</Content>
		</Root>
	);
};

export default SiteWideFooter;
