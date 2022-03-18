import { NextLinkAs, Paper, Tab } from "@makepurple/components";
import { useSession } from "next-auth/react";
import React, { CSSProperties, FC, Fragment, useMemo } from "react";

export interface UserConnectionPageTabsProps {
	className?: string;
	selectedTab?: "connections" | "followers" | "following" | "requests";
	style?: CSSProperties;
	userName: string;
}

export const UserConnectionPageTabs: FC<UserConnectionPageTabsProps> = ({
	className,
	selectedTab,
	style,
	userName
}) => {
	const { data: session } = useSession();

	const isMyPage = userName === session?.user.name;

	const defaultIndex = useMemo(() => {
		switch (selectedTab) {
			case "connections":
				return 0;
			case "followers":
				return 1;
			case "following":
				return 2;
			case "requests":
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
			<Tab.List
				forwardedAs={Paper}
				className={className}
				id="user-connection-tabs"
				size="small"
				style={style}
			>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/connections"
							linkAs={`/${userName}/connections`}
							{...tabProps}
						>
							Connections
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/connections/followers"
							linkAs={`/${userName}/connections/followers`}
							{...tabProps}
						>
							Followers
						</NextLinkAs>
					)}
				</Tab>
				<Tab as={Fragment}>
					{(tabProps) => (
						<NextLinkAs
							as={Tab.Button}
							forwardedAs="a"
							href="/[userName]/connections/following"
							linkAs={`/${userName}/connections/following`}
							{...tabProps}
						>
							Following
						</NextLinkAs>
					)}
				</Tab>
				{isMyPage && (
					<Tab as={Fragment}>
						{(tabProps) => (
							<NextLinkAs
								as={Tab.Button}
								forwardedAs="a"
								href="/[userName]/connections/requests"
								linkAs={`/${userName}/connections/requests`}
								{...tabProps}
							>
								Requests
							</NextLinkAs>
						)}
					</Tab>
				)}
			</Tab.List>
		</Tab.Group>
	);
};
