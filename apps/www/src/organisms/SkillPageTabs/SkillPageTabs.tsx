import { NextLinkAs, NoteIcon, Paper, Tab } from "@makepurple/components";
import React, { CSSProperties, FC, Fragment, useMemo } from "react";
import { CodeIcon, PeopleIcon, TelescopeIcon } from "../../svgs";

export interface SkillPageTabsProps {
	className?: string;
	selectedTab?: "posts" | "followers" | "explore" | "snippets";
	style?: CSSProperties;
	skillName: string;
	skillOwner: string;
}

export const SkillPageTabs: FC<SkillPageTabsProps> = ({
	className,
	selectedTab,
	style,
	skillName,
	skillOwner
}) => {
	const defaultIndex = useMemo(() => {
		switch (selectedTab) {
			case "posts":
				return 0;
			case "explore":
				return 1;
			case "followers":
				return 2;
			case "snippets":
				return 3;
			default:
				return undefined;
		}
	}, [selectedTab]);

	return (
		<Tab.Group
			defaultIndex={defaultIndex}
			manual
			/**
			 * !HACK
			 * @description This appears to disable right-click changing the tab, which we
			 * want. Not sure why this works.
			 * @author David Lee
			 * @date February 12, 2022
			 */
			onChange={() => undefined}
		>
			<Tab.List forwardedAs={Paper} className={className} style={style}>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/s/[skillOwner]/[skillName]"
							linkAs={`/s/${skillOwner}/${skillName}`}
							{...tabProps}
						>
							<NoteIcon height={20} tw="mr-2" width={20} />
							Posts
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/s/[skillOwner]/[skillName]"
							linkAs={`/s/${skillOwner}/${skillName}?tab=explore`}
							{...tabProps}
						>
							<TelescopeIcon height={20} tw="mr-2" width={20} />
							Explore
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/s/[skillOwner]/[skillName]"
							linkAs={`/s/${skillOwner}/${skillName}?tab=followers`}
							{...tabProps}
						>
							<PeopleIcon height={20} tw="mr-2" width={20} />
							Followers
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/s/[skillOwner]/[skillName]"
							linkAs={`/s/${skillOwner}/${skillName}?tab=snippets`}
							{...tabProps}
						>
							<CodeIcon height={20} tw="mr-2" width={20} />
							Snippets
						</NextLinkAs>
					)}
				</Tab>
			</Tab.List>
		</Tab.Group>
	);
};
