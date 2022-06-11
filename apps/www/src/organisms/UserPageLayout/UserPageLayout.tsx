import { MainContainer } from "@makepurple/components";
import React, { FC, ReactNode } from "react";
import tw from "twin.macro";
import { UserInfoSideBar } from "../UserInfoSideBar";
import { UserPageTabs } from "../UserPageTabs";

const Root = tw(MainContainer)`
	flex
	flex-col-reverse
	items-stretch
	gap-6
	min-w-0
	my-6
	md:my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw(UserInfoSideBar)`
	flex-shrink-0
	w-full
	lg:w-96
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
	min-w-0
`;

const PageTabs = tw(UserPageTabs)`
	mb-4
	xl:mb-6
`;

export interface UserPageLayoutProps {
	children?: ReactNode;
	selectedTab?:
		| "overview"
		| "posts"
		| "repositories"
		| "experiences"
		| "connections"
		| "activity"
		| "snippets";
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
