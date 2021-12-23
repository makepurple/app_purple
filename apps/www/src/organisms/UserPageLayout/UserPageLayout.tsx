import { MainContainer } from "@makepurple/components";
import React, { FC, ReactNode } from "react";
import tw from "twin.macro";
import { UserInfoSideBar } from "../UserInfoSideBar";
import { UserPageTabs } from "../UserPageTabs";

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
	overflow-x-hidden
`;

const PageTabs = tw(UserPageTabs)`
	mb-4
	xl:mb-6
`;

export interface UserPageLayoutProps {
	children?: ReactNode;
	selectedTab?: "posts" | "repositories" | "experiences";
	userName: string;
}

export const UserPageLayout: FC<UserPageLayoutProps> = ({ children, selectedTab, userName }) => {
	return (
		<Root>
			<SideBar userName={userName} />
			<Content>
				<PageTabs selectedTab={selectedTab} userName={userName} />
				{children}
			</Content>
		</Root>
	);
};
