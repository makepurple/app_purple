import { PageContainer } from "@/client/atoms";
import { SiteWideAppBar } from "@/client/organisms/SiteWideAppBar";
import { SiteWideFooter } from "@/client/organisms/SiteWideFooter";
import { InferComponentProps } from "@/client/types";
import React, { FC } from "react";
import tw, { styled } from "twin.macro";

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
