import {
	Brand,
	Button,
	GitHubIcon,
	ListItem,
	NonIdealState,
	Paper,
	SideDrawer
} from "@makepurple/components";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC, ReactNode, Ref, useState } from "react";
import tw from "twin.macro";
import { useGetSiteWideSideDrawerQuery } from "../../graphql";
import {
	BellIcon,
	BookIcon,
	ChatIcon,
	GearIcon,
	PeopleIcon,
	SignOutIcon,
	TelescopeIcon
} from "../../svgs";
import { NewPostButton } from "../NewPostButton";
import { UserAvatar } from "../UserAvatar";
import { LoadingSiteWideSideDrawerFollowLink } from "./LoadingSiteWideSideDrawerFollowLink";
import { SiteWideSideDrawerFollowLink } from "./SiteWideSideDrawerFollowLink";

const BATCH_SIZE = 20;

const Root = tw(SideDrawer)`
	flex
	flex-col
`;

const Content = tw.div`
	flex-grow
	flex
	flex-col
	p-2
	overflow-y-auto
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

const Following = tw.div`
	flex
	flex-col
	items-stretch
`;

const Other = tw.div`
	flex
	flex-col
	items-stretch
`;

const SectionTitle = tw.div`
	text-xs
	leading-snug
	font-semibold
	text-gray-500
	uppercase
`;

const SectionContent = tw.div`
	flex
	flex-col
	items-stretch
`;

const ExploreButton = tw(Button)`
	w-36
`;

const ListItemText = tw.span`
	truncate
`;

const NewPostItem = tw(NewPostButton)`
	justify-start
	shadow-none
	not-disabled:hover:shadow-none!
	not-disabled:hover:opacity-100!
`;

export type SiteWideSideDrawerProps = {
	children?: ReactNode;
	className?: string;
	innerRef?: Ref<HTMLDivElement>;
	onClose?: () => void;
	open: boolean;
	style?: CSSProperties;
};

export const SiteWideSideDrawer: FC<SiteWideSideDrawerProps> = (props) => {
	const { children, className, innerRef, onClose, open, style } = props;

	const { data: session, status } = useSession();

	const user = session?.user;

	const [after, setAfter] = useState<string | null>(null);

	const [{ data, fetching }] = useGetSiteWideSideDrawerQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-first",
		variables: {
			after,
			first: BATCH_SIZE
		}
	});

	const following = data?.viewer?.following.nodes ?? [];
	const followingInfo = data?.viewer?.following.pageInfo;

	return (
		<Root
			ref={innerRef}
			className={className}
			onClose={() => undefined}
			open={open}
			static
			style={style}
		>
			<Content>
				{status === "unauthenticated" && (
					<AuthContainer>
						<AuthInfo>
							<AuthBrand /> is a community where developers collaborate, share and
							mutually grow.
						</AuthInfo>
						<NextLink href="/signup" passHref>
							<Button
								as="a"
								onClick={() => {
									onClose?.();
								}}
								tw="mt-4"
							>
								Sign Up
							</Button>
						</NextLink>
						<NextLink href="/login" passHref>
							<StyledLoginButton
								as="a"
								onClick={() => {
									onClose?.();
								}}
								tw="mt-2"
							>
								<GitHubIcon height={24} width={24} tw="mr-2" />
								<span>Login</span>
							</StyledLoginButton>
						</NextLink>
					</AuthContainer>
				)}
				{status === "authenticated" && !!user && (
					<>
						<NextLink href="/explore" passHref>
							<Button
								as="a"
								onClick={() => {
									onClose?.();
								}}
							>
								<TelescopeIcon height={24} width={24} tw="mr-3" />
								<span>Explore</span>
							</Button>
						</NextLink>
						<Following tw="mt-3">
							<SectionTitle>Following</SectionTitle>
							<SectionContent tw="mt-1">
								{!following.length
									? !fetching && (
											<NonIdealState
												title={null}
												subTitle={
													<div tw="flex flex-col items-center">
														<div>Discover developers and skills</div>
														<NextLink href="/explore" passHref>
															<ExploreButton
																as="a"
																onClick={() => {
																	onClose?.();
																}}
																size="small"
																tw="mt-4"
															>
																Explore
															</ExploreButton>
														</NextLink>
													</div>
												}
												tw="shadow-none"
											/>
									  )
									: following.map((follow) => (
											<SiteWideSideDrawerFollowLink
												key={follow.id}
												followable={follow.following}
												onClick={() => {
													onClose?.();
												}}
											/>
									  ))}
								{fetching &&
									Array.from({ length: 3 }, (_, i) => (
										<LoadingSiteWideSideDrawerFollowLink key={i} />
									))}
							</SectionContent>
							{followingInfo?.hasNextPage && (
								<Button
									disabled={fetching}
									onClick={() => {
										const endCursor = followingInfo.endCursor;

										endCursor && setAfter(endCursor);
									}}
									size="small"
									type="button"
									variant="secondary"
									tw="mt-2"
								>
									Load more
								</Button>
							)}
						</Following>
						<Other tw="mt-3">
							<SectionTitle>Other</SectionTitle>
							<SectionContent tw="mt-1">
								<NextLink href="/[userName]" as={`/${user.name}`} passHref>
									<ListItem
										as="a"
										onClick={() => {
											onClose?.();
										}}
									>
										<UserAvatar
											asLink={false}
											border={1}
											height={24}
											width={24}
											user={{ __typename: "User", ...user }}
											tw="mr-3"
										/>
										<ListItemText>{user.name}</ListItemText>
									</ListItem>
								</NextLink>
								<ListItem
									as={NewPostItem}
									onClick={() => {
										onClose?.();
									}}
									bounce={false}
									userName={user.name}
								>
									{({ draft }) => (
										<>
											<BookIcon height={24} width={24} tw="mr-3" />
											<span>{draft ? "Edit Draft" : "New Post"}</span>
										</>
									)}
								</ListItem>
								<NextLink
									href="/[userName]/connections/requests"
									as={`/${user.name}/connections/requests`}
									passHref
								>
									<ListItem
										as="a"
										onClick={() => {
											onClose?.();
										}}
									>
										<PeopleIcon height={24} width={24} tw="mr-3" />
										<span>Invitations</span>
									</ListItem>
								</NextLink>
								<NextLink href="/messaging" passHref>
									<ListItem
										as="a"
										onClick={() => {
											onClose?.();
										}}
									>
										<ChatIcon height={24} width={24} tw="mr-3" />
										<span>Messages</span>
									</ListItem>
								</NextLink>
								<NextLink href="/notifications" passHref>
									<ListItem
										as="a"
										onClick={() => {
											onClose?.();
										}}
									>
										<BellIcon height={24} width={24} tw="mr-3" />
										<span>Notifications</span>
									</ListItem>
								</NextLink>
								<NextLink href="/account" passHref>
									<ListItem
										as="a"
										onClick={() => {
											onClose?.();
										}}
									>
										<GearIcon height={24} width={24} tw="mr-3" />
										<span>Account</span>
									</ListItem>
								</NextLink>
								<ListItem
									as="button"
									onClick={async () => {
										await signOut({ redirect: false });

										onClose?.();
									}}
									type="button"
								>
									<SignOutIcon height={24} width={24} tw="mr-3" />
									<span>Logout</span>
								</ListItem>
							</SectionContent>
						</Other>
					</>
				)}
				{children}
			</Content>
		</Root>
	);
};

SiteWideSideDrawer.displayName = "SiteWideSideDrawer";
