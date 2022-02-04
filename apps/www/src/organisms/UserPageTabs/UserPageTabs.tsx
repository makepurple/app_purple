import {
	BookIcon,
	HexagonIcon,
	NextLinkAs,
	NoteIcon,
	Paper,
	RepoIcon,
	Tab
} from "@makepurple/components";
import React, { CSSProperties, FC, Fragment, useMemo } from "react";
import { PeopleIcon, PulseIcon } from "../../svgs";

export interface UserPageTabsProps {
	className?: string;
	selectedTab?:
		| "overview"
		| "posts"
		| "repositories"
		| "experiences"
		| "connections"
		| "activity";
	style?: CSSProperties;
	userName: string;
}

export const UserPageTabs: FC<UserPageTabsProps> = ({
	className,
	selectedTab,
	style,
	userName
}) => {
	const defaultIndex = useMemo(() => {
		switch (selectedTab) {
			case "overview":
				return 0;
			case "posts":
				return 1;
			case "repositories":
				return 2;
			case "experiences":
				return 3;
			case "connections":
				return 4;
			case "activity":
				return 5;
			default:
				return undefined;
		}
	}, [selectedTab]);

	return (
		<Tab.Group defaultIndex={defaultIndex}>
			<Tab.List forwardedAs={Paper} className={className} style={style}>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]"
							linkAs={`/${userName}`}
							{...tabProps}
						>
							<BookIcon height={20} tw="mr-2" width={20} />
							Overview
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/posts"
							linkAs={`/${userName}/posts`}
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
							href="/[userName]/repositories"
							linkAs={`/${userName}/repositories`}
							{...tabProps}
						>
							<RepoIcon height={20} tw="mr-2" width={20} />
							Repositories
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/experiences"
							linkAs={`/${userName}/experiences`}
							{...tabProps}
						>
							<HexagonIcon height={20} tw="mr-2" width={20} />
							Experiences
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/connections"
							linkAs={`/${userName}/connections`}
							{...tabProps}
						>
							<PeopleIcon height={20} tw="mr-2" width={20} />
							Connections
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/activity"
							linkAs={`/${userName}/activity`}
							{...tabProps}
						>
							<PulseIcon height={20} tw="mr-2" width={20} />
							Activity
						</NextLinkAs>
					)}
				</Tab>
			</Tab.List>
		</Tab.Group>
	);
};
