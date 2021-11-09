import { Backdrop, Brand, HamburgerMenuButton, Paper, SideDrawer } from "@/client/atoms";
import { LoginButton } from "@/client/organisms/LoginButton";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import type { DialogStateReturn } from "reakit";
import tw from "twin.macro";

const Root = tw(Backdrop)`
	sm:hidden
`;

const MobileDrawer = tw(SideDrawer)`
	flex
	flex-col
	sm:hidden
`;

const TopContent = tw(Paper)`
	flex
	items-center
	p-4
	rounded-none
	shadow-sm
`;

const CloseButton = tw(HamburgerMenuButton)`
	mr-2
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
	p-2
`;

const AuthContainer = tw(Paper)`
	flex
	flex-col
	items-stretch
	p-2
	shadow-sm
`;

const AuthInfo = tw.div`
	text-gray-500
	line-height[1.375rem]
`;

const AuthBrand = tw(Brand)`
	text-lg
	line-height[1.375rem]
`;

const StyledLoginButton = tw(LoginButton)`
	bg-transparent
	text-black
	border-gray-300
	hover:shadow-md

`;

export type MobileAppDrawerProps = DialogStateReturn & {
	className?: string;
	style?: CSSProperties;
};

export const MobileAppDrawer: FC<MobileAppDrawerProps> = (props) => {
	const { className, style, ...dialogProps } = props;

	return (
		<Root {...dialogProps}>
			<MobileDrawer {...dialogProps} className={className} style={style}>
				<TopContent>
					<CloseButton baseId={dialogProps.baseId} toggle={dialogProps.toggle} visible />
					<NextLink href="/" passHref>
						<Brand />
					</NextLink>
				</TopContent>
				<Content>
					<AuthContainer>
						<AuthInfo>
							<NextLink href="/" passHref>
								<AuthBrand />
							</NextLink>{" "}
							is a community where developers collaborate, share and mutually grow.
						</AuthInfo>
						<LoginButton label="Sign Up" tw="mt-4" />
						<StyledLoginButton icon={null} label="Login" tw="mt-2" />
					</AuthContainer>
				</Content>
			</MobileDrawer>
		</Root>
	);
};
