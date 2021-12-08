import { MainContainer } from "@/client/atoms";
import { UserInfoSideBar } from "@/client/organisms/UserInfoSideBar";
import { UserPageTabs } from "@/client/organisms/UserPageTabs";
import React, { CSSProperties, FC, ReactNode } from "react";
import tw from "twin.macro";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	w-full
	mb-6
	lg:w-96
	lg:ml-6
	xl:ml-8
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
`;

const PageWrapper = tw.div`
	flex-grow
	mt-4
	xl:mt-6
`;

export interface UserPageLayoutProps {
	children?: ReactNode;
	className?: string;
	selectedTab?: "posts" | "repositories" | "experiences";
	style?: CSSProperties;
	userName: string;
}

export const UserPageLayout: FC<UserPageLayoutProps> = ({
	children,
	className,
	selectedTab,
	style,
	userName
}) => {
	return (
		<Root>
			<SideBar userName={userName} />
			<Content>
				<UserPageTabs selectedTab={selectedTab} userName={userName} />
				<PageWrapper className={className} style={style}>
					{children}
				</PageWrapper>
			</Content>
		</Root>
	);
};
