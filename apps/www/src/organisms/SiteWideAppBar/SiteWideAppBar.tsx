import {
	AppBar,
	Brand,
	Button,
	HamburgerMenuButton,
	MainContainer,
	PageContainer
} from "@makepurple/components";
import { oneLine } from "common-tags";
import { m, useViewportScroll } from "framer-motion";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import tw from "twin.macro";
import { MobileAppDrawer } from "../MobileAppDrawer";
import { NotificationBellButton } from "../NotificationBellButton";
import { PendingFriendsButton } from "../PendingFriendsButton";

const SCROLL_THRESHOLD = 32;
const SCROLL_PROGRESS_THRESHOLD = 0.95;

const MotionAppBar = m(AppBar);

const Root = tw(PageContainer)`
	flex
` as typeof MotionAppBar;

const Content = tw(MainContainer)`
	flex
	flex-row
	items-center
`;

const BrandContainer = tw.div`
	flex-grow
	flex
	items-center
`;

const MobileMenuButton = tw(HamburgerMenuButton)`
	mr-2
	sm:hidden
`;

const Actions = tw.div`
	hidden
	justify-end
	sm:flex
	[& > *]:not-last:mr-4
`;

const StyledLoginButton = tw(Button)`
	w-32
	bg-transparent
	text-black
	border-gray-300
	hover:shadow-md
`;

const SignUpButton = tw(Button)`
	w-32
`;

const StyledLogoutButton = tw(Button)`
	w-32
`;

export interface SiteWideAppBarProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideAppBar: FC<SiteWideAppBarProps> = ({ className, style }) => {
	const router = useRouter();

	const isAuthPage = router.pathname === "/login" || router.pathname === "signup";

	const { status } = useSession();
	const isAuthenticated = status === "authenticated";

	const { scrollY, scrollYProgress } = useViewportScroll();

	const [isThreshold, setIsThreshold] = useState<boolean>(false);
	const [menuOpen, setMenuOpen] = useState<boolean>(false);

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

	return (
		<Root
			as={MotionAppBar}
			className={className}
			style={style}
			initial={false}
			animate={isThreshold ? "scrolled" : "default"}
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
				}
			}}
		>
			<Content>
				<BrandContainer>
					{!isAuthenticated && (
						<MobileMenuButton
							onClick={() => {
								setMenuOpen(true);
							}}
							open={menuOpen}
							tw="mr-2"
						/>
					)}
					<NextLink href="/" passHref>
						<Brand />
					</NextLink>
				</BrandContainer>
				{!isAuthPage && (
					<Actions>
						{!isAuthenticated ? (
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
								<PendingFriendsButton />
								<NotificationBellButton />
								<StyledLogoutButton
									onClick={async () => {
										await signOut();
									}}
								>
									Logout
								</StyledLogoutButton>
							</>
						)}
					</Actions>
				)}
			</Content>
			<MobileAppDrawer
				onClose={() => {
					setMenuOpen(false);
				}}
				open={menuOpen}
				tw="sm:hidden"
			/>
		</Root>
	);
};

export default SiteWideAppBar;
