import { Dialog } from "@headlessui/react";
import {
	AppBar,
	Backdrop,
	Brand,
	Button,
	HamburgerMenuButton,
	Logo,
	PageContainer,
	withForwardRef
} from "@makepurple/components";
import { didClickIn, useOnClickOutside, useOnKeyDown } from "@makepurple/hooks";
import { FormatUtils } from "@makepurple/utils";
import { oneLine } from "common-tags";
import { m, useViewportScroll } from "framer-motion";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import NextLink from "next/link";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";
import { useGetNotificationCountsQuery, useGetUserFriendRequestCountQuery } from "../../graphql";
import { BellIcon, ChatIcon, PeopleIcon } from "../../svgs";
import { LazySiteWideSearch } from "../SiteWideSearch";
import { SiteWideUserMenu } from "../SiteWideUserMenu";

const SiteWideSideDrawer = dynamic(() => import("../SiteWideSideDrawer"), { ssr: false });

const ForwardedRefSideDrawer = withForwardRef(SiteWideSideDrawer);

const Search = tw.div`
	ml-auto
	sm:ml-0
`;

const SiteWideSearch = dynamic(() => import("../SiteWideSearch"), {
	ssr: false,
	loading: () => <Search as={LazySiteWideSearch} />
});

const SCROLL_THRESHOLD = 32;
const SCROLL_PROGRESS_THRESHOLD = 0.95;

const BrandContainer = tw.div`
	flex-shrink-0
	flex
	items-center
`;

const StyledBrand = tw(Brand)`
	hidden
	md:block
`;

const Actions = tw.div`
	flex-shrink-0
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
	relative
	hidden
	h-11
	w-11
	bg-white
	bg-opacity-80
	lg:flex
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

const SideDrawer = tw(ForwardedRefSideDrawer)`
	pt-16
`;

const MotionAppBar = m(AppBar);

const Root = styled(PageContainer)`
	${tw`
		flex
		items-center
		justify-between
		gap-4
	`}

	&[data-searching="true"] {
		& ${BrandContainer as any}, & ${Actions as any} {
			${tw`
				hidden
				sm:flex
			`}
		}

		& ${StyledBrand as any} {
			${tw`
				hidden
				md:block
			`}
		}
	}
` as typeof MotionAppBar;

export interface SiteWideAppBarProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideAppBar: FC<SiteWideAppBarProps> = ({ className, style }) => {
	const { data: session, status } = useSession();

	const user = session?.user;

	const { scrollY, scrollYProgress } = useViewportScroll();

	const [isThreshold, setIsThreshold] = useState<boolean>(false);
	const [drawerOpen, setDrawerOpen] = useState<boolean>(false);

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

	const animate = drawerOpen ? "open" : isThreshold ? "scrolled" : "default";

	const [elem, ref] = useState<HTMLDivElement | null>(null);
	const [drawerElem, drawerRef] = useState<HTMLDivElement | null>(null);

	useOnClickOutside({ current: drawerElem }, (e) => {
		if (didClickIn(elem, e)) return;

		setDrawerOpen(false);
	});

	useOnKeyDown({ global: true, key: "ESCAPE" }, () => {
		setDrawerOpen(false);
	});

	const [searching, setSearching] = useState<boolean>(false);

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
						backgroundColor: "rgba(255, 255, 255, 0.85)",
						boxShadow: oneLine`
							0 2px 2px 0 rgba(0, 0, 0, 0.14),
							0 3px 1px -2px rgba(0, 0, 0, 0.2),
							0 1px 5px 0 rgba(0, 0, 0, 0.12)
						`,
						backdropFilter: "blur(8px)"
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
				transition={{
					duration: 0.15,
					ease: "easeInOut"
				}}
				data-searching={searching}
			>
				<BrandContainer>
					<HamburgerMenuButton
						onClick={() => {
							setDrawerOpen((oldMenuOpen) => !oldMenuOpen);
						}}
						open={drawerOpen}
					/>
					<Logo tw="ml-3" />
					<StyledBrand tw="ml-1" />
				</BrandContainer>
				<Search
					as={SiteWideSearch}
					onBlur={() => {
						setSearching(false);
					}}
					onFocus={() => {
						setSearching(true);
					}}
				/>
				<Actions>
					{status === "loading" ? (
						<>
							<StyledLoginButton disabled>Login</StyledLoginButton>
							<SignUpButton disabled>Sign Up</SignUpButton>
						</>
					) : status !== "authenticated" || !user ? (
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
			</Root>
			<SideDrawer
				ref={drawerRef}
				onClose={() => {
					setDrawerOpen(false);
				}}
				open={drawerOpen}
			>
				<Dialog.Overlay as={Backdrop} open={drawerOpen} />
			</SideDrawer>
		</>
	);
};

export default SiteWideAppBar;
