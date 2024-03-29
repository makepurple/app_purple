import { MainContainer } from "@makepurple/components";
import React, { FC, ReactNode } from "react";
import tw from "twin.macro";
import { SkillInfoSideBar } from "../SkillInfoSideBar";
import { SkillPageTabs } from "../SkillPageTabs";

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

const SideBar = tw(SkillInfoSideBar)`
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

const PageTabs = tw(SkillPageTabs)`
	mb-4
	xl:mb-6
`;

export interface SkillPageLayoutProps {
	children?: ReactNode;
	selectedTab?: "posts" | "explore" | "followers" | "snippets";
	skillName: string;
	skillOwner: string;
}

export const SkillPageLayout: FC<SkillPageLayoutProps> = ({
	children,
	selectedTab,
	skillName,
	skillOwner
}) => {
	return (
		<Root>
			<SideBar skillName={skillName} skillOwner={skillOwner} />
			<Content>
				<PageTabs selectedTab={selectedTab} skillName={skillName} skillOwner={skillOwner} />
				{children}
			</Content>
		</Root>
	);
};
