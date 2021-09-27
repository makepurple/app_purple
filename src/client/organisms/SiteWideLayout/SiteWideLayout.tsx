import { PageContainer } from "@/client/atoms";
import { SiteWideAppBar } from "@/client/organisms/SiteWideAppBar";
import { SiteWideFooter } from "@/client/organisms/SiteWideFooter";
import { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import { styled } from "twin.macro";

const Root = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled(PageContainer)`
	flex-grow: 1;
	padding-top: 64px;
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
