import { Divider, ListItem, Menu, NextLinkAnchor } from "@makepurple/components";
import { useResizeObserver } from "@makepurple/hooks";
import { InferComponentProps } from "@makepurple/typings";
import { FormatUtils, WindowUtils } from "@makepurple/utils";
import { AnimatePresence, m } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import { stripUnit } from "polished";
import React, { FC, Ref, useState } from "react";
import tw, { styled, theme } from "twin.macro";
import { useGetNotificationCountsQuery } from "../../graphql";
import { BookIcon, ChatIcon, GearIcon, HomeIcon, PeopleIcon, SignOutIcon } from "../../svgs";
import { NewPostButton } from "../NewPostButton";
import { UserAvatar } from "../UserAvatar";

const BREAKPOINT = parseInt(`${stripUnit(theme`screens.lg`)}`, 10);

const List = tw(m.div)`
	shadow-lg
	w-56
	m-0
` as any;

const UserName = tw.span`
	truncate
`;

const MobileLink = tw(NextLinkAnchor)`
	flex
`;

const NewPostItem = tw(NewPostButton)`
	justify-start
	shadow-none
	not-disabled:hover:shadow-none!
	not-disabled:hover:opacity-100!
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
				return tw`bg-blue-600`;
		}
	}}
`;

export type SiteWideUserMenuDropdownProps = InferComponentProps<"div"> & {
	innerRef?: Ref<HTMLDivElement>;
	open?: boolean;
};

export const SiteWideUserMenuDropdown: FC<SiteWideUserMenuDropdownProps> = (props) => {
	const { innerRef, open, ...restProps } = props;

	const { data: session, status } = useSession();

	const [isBreakpoint, setIsBreakpoint] = useState<boolean>(false);

	useResizeObserver(
		WindowUtils.getElement(() => document.body),
		({ contentRect }) => {
			setIsBreakpoint(contentRect.width < BREAKPOINT);
		}
	);

	const [{ data: notificationsData }] = useGetNotificationCountsQuery({
		requestPolicy: "cache-only"
	});

	const invitationsCount = notificationsData?.viewer?.friendRequestsReceivedCount ?? 0;
	const messageCount = notificationsData?.viewer?.newMessagesCount ?? 0;

	const user = session?.user;

	if (status !== "authenticated") return null;
	if (!user) return null;

	return (
		<AnimatePresence initial={false}>
			{open && (
				<Menu.Items
					forwardedAs={List}
					{...restProps}
					ref={innerRef}
					static
					initial={{
						opacity: 0
					}}
					animate={{
						opacity: 1
					}}
					exit={{
						opacity: 0
					}}
					transition={{
						ease: "easeIn",
						duration: 0.1
					}}
				>
					<Menu.Item>
						{(itemProps) => (
							<ListItem
								as={NextLinkAnchor}
								href="/[userName]"
								hrefAs={`/${user.name}`}
								{...itemProps}
							>
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
						)}
					</Menu.Item>
					<Divider tw="m-0.5" />
					<Menu.Item>
						{(itemProps) => (
							<ListItem as={MobileLink} href="/feed" {...itemProps}>
								<HomeIcon height={24} width={24} tw="mr-2" />
								<span>Feed</span>
							</ListItem>
						)}
					</Menu.Item>
					<Menu.Item>
						{(itemProps) => (
							<ListItem as={NewPostItem} bounce={false} {...itemProps}>
								{({ draft }) => (
									<>
										<BookIcon height={24} width={24} tw="mr-2" />
										<span>{draft ? "Edit Draft" : "Create Post"}</span>
									</>
								)}
							</ListItem>
						)}
					</Menu.Item>
					<Menu.Item>
						{(itemProps) => (
							<ListItem as={MobileLink} href="/account" {...itemProps}>
								<GearIcon height={24} width={24} tw="mr-2" />
								<span>Account</span>
							</ListItem>
						)}
					</Menu.Item>
					{isBreakpoint && (
						<>
							<Menu.Item>
								{(itemProps) => (
									<ListItem
										as={MobileLink}
										href="/[userName]/connections/requests"
										hrefAs={`/${user.name}/connections/requests`}
										{...itemProps}
									>
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
									<ListItem as={MobileLink} href="/messaging" {...itemProps}>
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
						</>
					)}

					<Divider tw="m-0.5" />
					<Menu.Item>
						{(itemProps) => (
							<ListItem
								as="button"
								onClick={async () => {
									await signOut();
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
	);
};

SiteWideUserMenuDropdown.displayName = "SiteWideUserMenuDropdown";

export default SiteWideUserMenuDropdown;
