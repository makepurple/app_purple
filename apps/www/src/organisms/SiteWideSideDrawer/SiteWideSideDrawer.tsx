import { Dialog } from "@headlessui/react";
import {
	Backdrop,
	Brand,
	Button,
	GitHubIcon,
	HamburgerMenuButton,
	Paper,
	SideDrawer
} from "@makepurple/components";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";

const Root = tw(SideDrawer)`
	flex
	flex-col
`;

const TopContent = tw(Paper)`
	flex
	items-center
	p-4
	rounded-none
	shadow-sm
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

const StyledLoginButton = tw(Button)`
	bg-transparent
	text-black
	border-gray-300
	hover:shadow-md

`;

export type SiteWideSideDrawerProps = {
	className?: string;
	onClose: () => void;
	open: boolean;
	style?: CSSProperties;
};

export const SiteWideSideDrawer: FC<SiteWideSideDrawerProps> = (props) => {
	const { className, onClose, open, style } = props;

	const { status } = useSession();

	return (
		<Root className={className} onClose={onClose} open={open} style={style}>
			<Dialog.Overlay as={Backdrop} />
			<TopContent>
				<HamburgerMenuButton
					onClick={() => {
						onClose();
					}}
					open={open}
					tw="mr-3"
				/>
				<NextLink href="/" passHref>
					<Brand />
				</NextLink>
			</TopContent>
			<Content>
				{status === "unauthenticated" && (
					<AuthContainer>
						<AuthInfo>
							<NextLink href="/" passHref>
								<AuthBrand />
							</NextLink>{" "}
							is a community where developers collaborate, share and mutually grow.
						</AuthInfo>
						<NextLink href="/signup" passHref>
							<Button as="a" tw="mt-4">
								Sign Up
							</Button>
						</NextLink>
						<NextLink href="/login" passHref>
							<StyledLoginButton as="a" tw="mt-2">
								<GitHubIcon height={24} width={24} tw="mr-2" />
								<span>Login</span>
							</StyledLoginButton>
						</NextLink>
					</AuthContainer>
				)}
			</Content>
		</Root>
	);
};
