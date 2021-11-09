import { AppBar, Brand, MainContainer, PageContainer } from "@/client/atoms";
import { LoginButton } from "@/client/organisms/LoginButton";
import { LogoutButton } from "@/client/organisms/LogoutButton";
import { oneLine } from "common-tags";
import { m, useViewportScroll } from "framer-motion";
import { useSession } from "next-auth/client";
import NextLink from "next/link";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import tw, { styled } from "twin.macro";

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
`;

const Actions = styled.div`
	${tw`
		flex
		justify-end
	`}

	& > *:not(:last-child) {
		${tw`
			mr-4
		`}
	}
`;

const StyledLoginButton = tw(LoginButton)`
	w-32
	bg-transparent
	text-black
	border-gray-300
	hover:shadow-md
`;

const SignUpButton = tw(LoginButton)`
	w-32
`;

const StyledLogoutButton = tw(LogoutButton)`
	w-32
`;

export interface SiteWideAppBarProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideAppBar: FC<SiteWideAppBarProps> = ({ className, style }) => {
	const [session] = useSession();
	const isAuthenticated = !!session?.user;

	const { scrollY, scrollYProgress } = useViewportScroll();

	const [isThreshold, setIsThreshold] = useState<boolean>(false);

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
					<NextLink href="/" passHref>
						<Brand />
					</NextLink>
				</BrandContainer>
				<Actions>
					{!isAuthenticated ? (
						<>
							<StyledLoginButton icon={null} label="Login" />
							<SignUpButton label="Sign Up" />
						</>
					) : (
						<StyledLogoutButton label="Logout" />
					)}
				</Actions>
			</Content>
		</Root>
	);
};

export default SiteWideAppBar;
