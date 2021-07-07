import { AppBar, Brand, MainContainer, PageContainer } from "@/client/atoms";
import { useGetMyUserQuery } from "@/client/graphql";
import { LoginButton } from "@/client/organisms/LoginButton";
import { LogoutButton } from "@/client/organisms/LogoutButton";
import { oneLine } from "common-tags";
import { m, useViewportScroll } from "framer-motion";
import NextLink from "next/link";
import React, { CSSProperties, FC, useEffect, useState } from "react";
import styled from "styled-components";

const SCROLL_THRESHOLD = 100;

const MotionAppBar = m(AppBar);

const Root = styled(PageContainer)`
	display: flex;
`;

const Content = styled(MainContainer)`
	display: flex;
	flex-direction: row;
	align-items: center;
`;

const BrandContainer = styled.div`
	flex-grow: 1;
`;

const Actions = styled.div`
	display: flex;
	justify-content: flex-end;

	& > *:not(:last-child) {
		margin-right: 1rem;
	}
`;

const StyledLoginButton = styled(LoginButton)`
	background-color: transparent;
	color: ${({ theme }) => theme.colors.primaryText};

	&:hover {
		box-shadow: 0 0 4px ${({ theme }) => theme.colors.boxShadow};
	}
`;

export interface SiteWideAppBarProps {
	className?: string;
	style?: CSSProperties;
}

export const SiteWideAppBar: FC<SiteWideAppBarProps> = ({ className, style }) => {
	const [{ data }] = useGetMyUserQuery({ requestPolicy: "cache-first" });
	const isAuthenticated = !!data?.viewer;

	const { scrollY } = useViewportScroll();

	const [isThreshold, setIsThreshold] = useState<boolean>(false);

	useEffect(() => {
		const unsubscribeScrollY = scrollY.onChange((y) => {
			setIsThreshold(y > SCROLL_THRESHOLD);
		});

		return () => {
			unsubscribeScrollY();
		};
	}, [scrollY]);

	return (
		<Root
			as={MotionAppBar}
			className={className}
			style={style}
			animate={isThreshold ? "scrolled" : "default"}
			variants={{
				default: {
					backgroundColor: "rgba(255, 255, 255, 0)",
					boxShadow: oneLine`
						0 2px 2px 0 rgba(0, 0, 0, 0),
						0 3px 1px -2px rgba(0, 0, 0, 0),
						0 1px 5px 0 rgba(0, 0, 0, 0)
					`
				},
				scrolled: {
					backgroundColor: "rgba(255, 255, 255, 1)",
					boxShadow: oneLine`
						0 2px 2px 0 rgba(0, 0, 0, 0.14),
						0 3px 1px -2px rgba(0, 0, 0, 0.2),
						0 1px 5px 0 rgba(0, 0, 0, 0.12)
					`
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
							<LoginButton label="Sign Up" />
						</>
					) : (
						<LogoutButton />
					)}
				</Actions>
			</Content>
		</Root>
	);
};

export default SiteWideAppBar;
