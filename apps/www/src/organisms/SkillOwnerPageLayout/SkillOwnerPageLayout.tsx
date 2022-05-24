import { MainContainer } from "@makepurple/components";
import React, { FC, ReactNode } from "react";
import tw from "twin.macro";
import { SkillOwnerInfoSideBar } from "../SkillOwnerInfoSideBar";

const Root = tw(MainContainer)`
	flex
	flex-col
	items-stretch
	my-6
	md:my-12
	lg:flex-row-reverse
	lg:items-start
`;

const SideBar = tw(SkillOwnerInfoSideBar)`
	flex-shrink-0
	w-full
	mb-6
	lg:w-96
	lg:ml-4
	xl:ml-6
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
	min-w-0
`;

export interface SkillOwnerPageLayoutProps {
	children?: ReactNode;
	skillOwner: string;
}

export const SkillOwnerPageLayout: FC<SkillOwnerPageLayoutProps> = ({ children, skillOwner }) => {
	return (
		<Root>
			<SideBar skillOwner={skillOwner} />
			<Content>{children}</Content>
		</Root>
	);
};
