import { Anchor, Brand, Footer, MainContainer, PageContainer } from "@/client/atoms";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import styled from "styled-components";

const Root = styled(PageContainer)``;

const Content = styled(MainContainer)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const BrandContainer = styled.div`
	flex-grow: 1;
`;

const LinksContainer = styled.nav`
	flex-shrink: 0;
`;

const SiteLink = styled(Anchor)`
	color: ${({ theme }) => theme.colors.secondaryText};
	padding: 0 1.25rem;
	opacity: 0.6;

	&:hover {
		color: ${({ theme }) => theme.palette.purple};
		opacity: 1;
	}
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
