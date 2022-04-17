import { PageContainer } from "@makepurple/components";
import React, { FC, ReactNode } from "react";
import { css } from "styled-components";
import tw, { styled } from "twin.macro";
import { SiteWideAppBar } from "../SiteWideAppBar";
import { SiteWideFooter } from "../SiteWideFooter";

const Root = styled.div`
	${tw`
		flex
		flex-col
	`}
	min-height: 100vh;
`;

const Content = styled(PageContainer)<{ $padding: boolean }>`
	${tw`
		flex-grow
		pt-16
	`}

	${({ $padding }) =>
		!$padding &&
		css`
			padding: 0 !important;
		`}
`;

export interface SiteWideLayoutProps {
	children?: ReactNode;
	padding?: boolean;
}

export const SiteWideLayout: FC<SiteWideLayoutProps> = ({ children, padding = true }) => {
	return (
		<Root>
			<SiteWideAppBar />
			<Content $padding={padding}>{children}</Content>
			<SiteWideFooter />
		</Root>
	);
};

export default SiteWideLayout;
