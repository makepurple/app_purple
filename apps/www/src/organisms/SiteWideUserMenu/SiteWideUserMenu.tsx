import { Divider, ListItem, Menu } from "@makepurple/components";
import { FormatUtils } from "@makepurple/utils";
import { AnimatePresence, m } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC, useState } from "react";
import { usePopper } from "react-popper";
import tw, { styled } from "twin.macro";
import {
	useGetNotificationCountsQuery,
	useGetPostDraftQuery,
	useGetUserFriendRequestCountQuery
} from "../../graphql";
import { BellIcon, BookIcon, ChatIcon, PeopleIcon, SignOutIcon } from "../../svgs";
import { UserAvatar } from "../UserAvatar";

const List = tw(m.div)`
	shadow-lg
	w-56
` as any;

const UserName = tw.span`
	truncate
`;

const MobileLink = tw.div`
	flex
	md:hidden
`;

const AlertCount = styled.div<{ $variant?: "alert" | "success" }>`
	${tw`
		inline-flex
		items-center
		px-1
		py-0.5
		rounded-full
		text-sm
		leading-none
		text-white
		bg-pink-600
	`}

	${({ $variant }) => {
		switch ($variant) {
			case "alert":
				return tw`bg-pink-600`;
			case "success":
			default:
				return tw`bg-blue-500`;
		}
	}}
`;

export interface SiteWideUserMenuProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideUserMenu: FC<SiteWideUserMenuProps> = ({ className, style }) => {
	const { data: session, status } = useSession();

	const [{ data: draftData }] = useGetPostDraftQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-first"
	});

	const hasDraft = !!draftData?.postDraft;

	const [{ data: invitationsData }] = useGetUserFriendRequestCountQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-first"
	});

	const invitationsCount = invitationsData?.viewer?.friendRequestsReceived.totalCount ?? 0;

	const [{ data: notificationsData }] = useGetNotificationCountsQuery({
		requestPolicy: "cache-only"
	});

	const messageCount = notificationsData?.viewer?.messages.totalCount ?? 0;
	const notificationCount = notificationsData?.viewer?.notifications.totalCount ?? 0;

	const [refElem, ref] = useState<HTMLElement | null>(null);
	const [popperElem, popperRef] = useState<HTMLDivElement | null>(null);

	const { styles, attributes } = usePopper(refElem, popperElem, {
		placement: "bottom-end"
	});

	const user = session?.user;

	if (status !== "authenticated") return null;
	if (!user) return null;

	return (
		<Menu className={className} style={style}>
			{({ open }) => (
				<>
					<Menu.Button
						as={UserAvatar}
						ref={ref}
						asLink={false}
						border={2}
						height={40}
						width={40}
						tabIndex={0}
						user={{ __typename: "User", ...user }}
					/>
					<AnimatePresence initial={false}>
						{open && (
							<Menu.Items
								forwardedAs={List}
								ref={popperRef}
								initial={{
									opacity: 0
								}}
								animate={{
									opacity: 1
								}}
								exit={{
									opacity: 0
								}}
								static
								style={styles.popper}
								transition={{
									ease: "easeIn",
									duration: 0.15
								}}
								{...attributes.popper}
							>
								<Menu.Item>
									{(itemProps) => (
										<NextLink href="/[userName]" as={`/${user.name}`} passHref>
											<ListItem as="a" {...itemProps}>
												<UserAvatar
													asLink={false}
													border={1}
													height={22}
													width={22}
													user={{ __typename: "User", ...user }}
													tw="mr-2"
												/>
												<UserName>{user.name}</UserName>
											</ListItem>
										</NextLink>
									)}
								</Menu.Item>
								<Divider tw="m-0.5" />
								<Menu.Item>
									{(itemProps) => (
										<ListItem as="div" {...itemProps}>
											<BookIcon height={24} width={24} tw="mr-2" />
											<span>{hasDraft ? "Edit Draft" : "Create Post"}</span>
										</ListItem>
									)}
								</Menu.Item>
								<Menu.Item>
									{(itemProps) => (
										<ListItem as={MobileLink} {...itemProps}>
											<PeopleIcon height={24} width={24} tw="mr-2" />
											<span>Invitations</span>
											{!!invitationsCount && (
												<AlertCount $variant="success" tw="ml-2">
													{FormatUtils.toGitHubFixed(invitationsCount)}
												</AlertCount>
											)}
										</ListItem>
									)}
								</Menu.Item>
								<Menu.Item>
									{(itemProps) => (
										<ListItem as={MobileLink} {...itemProps}>
											<ChatIcon height={24} width={24} tw="mr-2" />
											<span>Messages</span>
											{!!messageCount && (
												<AlertCount $variant="alert" tw="ml-2">
													{FormatUtils.toGitHubFixed(messageCount)}
												</AlertCount>
											)}
										</ListItem>
									)}
								</Menu.Item>
								<Menu.Item>
									{(itemProps) => (
										<ListItem as={MobileLink} {...itemProps}>
											<BellIcon height={24} width={24} tw="mr-2" />
											<span>Notifications</span>
											{!!notificationCount && (
												<AlertCount $variant="alert" tw="ml-2">
													{FormatUtils.toGitHubFixed(notificationCount)}
												</AlertCount>
											)}
										</ListItem>
									)}
								</Menu.Item>
								<Divider tw="m-0.5" />
								<Menu.Item>
									{(itemProps) => (
										<ListItem
											as="button"
											onClick={async () => {
												await signOut({ callbackUrl: "/" });
											}}
											type="button"
											{...itemProps}
										>
											<SignOutIcon height={24} width={24} tw="mr-2" />
											<span>Logout</span>
										</ListItem>
									)}
								</Menu.Item>
							</Menu.Items>
						)}
					</AnimatePresence>
				</>
			)}
		</Menu>
	);
};
