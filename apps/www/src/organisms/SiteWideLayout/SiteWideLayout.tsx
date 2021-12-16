import { PageContainer } from "@makepurple/components";
import { InferComponentProps } from "@makepurple/typings";
import React, { FC } from "react";
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

const Content = tw(PageContainer)`
	flex-grow
	pt-16
`;

export type SiteWideLayoutProps = InferComponentProps<typeof PageContainer>;

export const SiteWideLayout: FC<SiteWideLayoutProps> = ({ children, ...pageContainerProps }) => {
	return (
		<Root>
			<SiteWideAppBar />
			<Content {...pageContainerProps}>{children}</Content>
			<SiteWideFooter />
		</Root>
	);
};

export default SiteWideLayout;
