import { Dialog } from "@headlessui/react";
import {
	AppBar,
	Backdrop,
	Brand,
	Button,
	HamburgerMenuButton,
	PageContainer
} from "@makepurple/components";
import { didClickIn, useOnClickOutside, useOnKeyDown } from "@makepurple/hooks";
import { FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { m, useViewportScroll } from "framer-motion";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import { useGetNotificationCountsQuery, useGetUserFriendRequestCountQuery } from "../../graphql";
import { BellIcon, ChatIcon, PeopleIcon } from "../../svgs";
import { SiteWideSideDrawer } from "../SiteWideSideDrawer";
import { SiteWideUserMenu } from "../SiteWideUserMenu";

const SCROLL_THRESHOLD = 32;
const SCROLL_PROGRESS_THRESHOLD = 0.95;

const MotionAppBar = m(AppBar);

const Root = tw(PageContainer)`
	flex
	items-center
	justify-between
` as typeof MotionAppBar;

const BrandContainer = tw.div`
	flex-grow
	flex
	items-center
`;

const Actions = tw.div`
	flex
	justify-end
	gap-4
`;

const StyledLoginButton = tw(Button)`
	w-32
	bg-transparent
	text-black
	hover:shadow-md
`;

const SignUpButton = tw(Button)`
	w-32
`;

const IconButton = tw(Button)`
	hidden
	relative
	bg-transparent
	md:flex
`;

const NotificationButton = tw(IconButton)`
	flex
`;

const AlertCount = styled.div<{ $variant?: "alert" | "success" }>`
	${tw`
		absolute
		bottom-0
		left-1/2
		-translate-x-1/2
		translate-y-1/2
		inline-flex
		items-center
		px-1
		py-0.5
		rounded-full
		text-xs
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

const UserMenu = tw(SiteWideUserMenu)`
	flex-shrink-0
`;

const SideDrawer = tw(SiteWideSideDrawer)`
	pt-16
`;

export interface SiteWideAppBarProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideAppBar: FC<SiteWideAppBarProps> = ({ className, style }) => {
	const router = useRouter();

	const isAuthPage = router.pathname === "/login" || router.pathname === "signup";

	const { data: session, status } = useSession();

	const user = session?.user;

	const { scrollY, scrollYProgress } = useViewportScroll();

	const [isThreshold, setIsThreshold] = useState<boolean>(false);
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

	useEffect(() => {
		const unsubscribeScrollY = scrollY.onChange((y) => {
			setIsThreshold(
				y > SCROLL_THRESHOLD || scrollYProgress.get() > SCROLL_PROGRESS_THRESHOLD
			);
		});

		return () => {
			unsubscribeScrollY();
		};
	}, [scrollY, scrollYProgress]);

	const animate = menuOpen ? "open" : isThreshold ? "scrolled" : "default";

	const [elem, ref] = useState<HTMLDivElement | null>(null);
	const [drawerElem, drawerRef] = useState<HTMLDivElement | null>(null);

	useOnClickOutside({ current: drawerElem }, (e) => {
		if (didClickIn(elem, e)) return;

		setMenuOpen(false);
	});

	useOnKeyDown({ global: true, key: "ESCAPE" }, () => {
		setMenuOpen(false);
	});

	return (
		<>
			<Root
				as={MotionAppBar}
				ref={ref as any}
				className={className}
				style={style}
				initial={false}
				animate={animate}
				variants={{
					default: {
						backgroundColor: "rgba(255, 255, 255, 0)",
						boxShadow: oneLine`
							0 2px 2px 0 rgba(0, 0, 0, 0),
							0 3px 1px -2px rgba(0, 0, 0, 0),
							0 1px 5px 0 rgba(0, 0, 0, 0)
						`,
						backdropFilter: "blur(0px)"
					},
					scrolled: {
						backgroundColor: "rgba(255, 255, 255, 0.8)",
						boxShadow: oneLine`
							0 2px 2px 0 rgba(0, 0, 0, 0.14),
							0 3px 1px -2px rgba(0, 0, 0, 0.2),
							0 1px 5px 0 rgba(0, 0, 0, 0.12)
						`,
						backdropFilter: "blur(10px)"
					},
					open: {
						backgroundColor: "rgba(255, 255, 255, 1)",
						boxShadow: oneLine`
							0 2px 2px 0 rgba(0, 0, 0, 0.14),
							0 3px 1px -2px rgba(0, 0, 0, 0.2),
							0 1px 5px 0 rgba(0, 0, 0, 0.12)
						`,
						backdropFilter: "blur(0px)"
					}
				}}
			>
				<BrandContainer>
					<HamburgerMenuButton
						onClick={() => {
							setMenuOpen((oldMenuOpen) => !oldMenuOpen);
						}}
						open={menuOpen}
						tw="mr-3"
					/>
					<NextLink href="/" passHref>
						<Brand />
					</NextLink>
				</BrandContainer>
				{!isAuthPage && (
					<Actions>
						{status !== "authenticated" || !user ? (
							<>
								<NextLink href="/login" passHref>
									<StyledLoginButton as="a">Login</StyledLoginButton>
								</NextLink>
								<NextLink href="/signup" passHref>
									<SignUpButton as="a">Sign Up</SignUpButton>
								</NextLink>
							</>
						) : (
							<>
								<NextLink
									href="/[userName]/connections/requests"
									as={`/${user.name}/connections/requests`}
									passHref
								>
									<IconButton as="a" variant="secondary">
										<PeopleIcon height={24} width={24} />
										{!!invitationsCount && (
											<AlertCount $variant="success">
												{FormatUtils.toGitHubFixed(invitationsCount)}
											</AlertCount>
										)}
									</IconButton>
								</NextLink>
								<NextLink href="/messaging" passHref>
									<IconButton as="a" variant="secondary">
										<ChatIcon height={24} width={24} />
										{!!messageCount && (
											<AlertCount $variant="alert">
												{FormatUtils.toGitHubFixed(messageCount)}
											</AlertCount>
										)}
									</IconButton>
								</NextLink>
								<NextLink href="/notifications" passHref>
									<NotificationButton as="a" variant="secondary">
										<BellIcon height={24} width={24} />
										{!!notificationCount && (
											<AlertCount $variant="alert">
												{FormatUtils.toGitHubFixed(notificationCount)}
											</AlertCount>
										)}
									</NotificationButton>
								</NextLink>
								<UserMenu />
							</>
						)}
					</Actions>
				)}
			</Root>
			<SideDrawer ref={drawerRef} open={menuOpen}>
				<Dialog.Overlay as={Backdrop} open={menuOpen} />
			</SideDrawer>
		</>
	);
};

export default SiteWideAppBar;
