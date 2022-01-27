import { Avatar, BookIcon } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { NotificationCardPostCommentedNotificationPostCommentedFragment } from "../../graphql";

const Root = tw.div`
	flex
	items-stretch
	py-4
	cursor-pointer
	active:bg-indigo-50
`;

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const Details = tw.div`
	flex-grow
	flex
	flex-row
	items-center
`;

const Title = tw.a`
	text-base
	leading-tight
`;

const LeftContent = tw.div`
	flex-shrink-0
	flex
	flex-col
	items-center
`;

const UpdatedAt = tw.span`
	text-gray-500
`;

export interface NotificationCardPostCommentedProps {
	className?: string;
	notification: NotificationCardPostCommentedNotificationPostCommentedFragment;
	style?: CSSProperties;
}

export const NotificationCardPostCommented = forwardRef<
	HTMLDivElement,
	NotificationCardPostCommentedProps
>((props, ref) => {
	const { className, notification, style } = props;

	const router = useRouter();

	const post = notification.post;

	return (
		<Root
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push("/[userName]/[postTitle]", `/${post.authorName}/${post.urlSlug}`);
			}}
			onMouseOver={async () => {
				await router.prefetch(
					"/[userName]/[postTitle]",
					`/${post.authorName}/${post.urlSlug}`
				);
			}}
			style={style}
		>
			<NextLink
				href="/[userName]/[postTitle]"
				as={`/${post.authorName}/${post.urlSlug}`}
				passHref
			>
				<StyledAvatar border={4} aria-label={post.title ?? ""} tw="mr-6">
					<div tw="flex items-center justify-center h-16 w-16 bg-white z-index[1]">
						<BookIcon height={48} width={48} />
					</div>
				</StyledAvatar>
			</NextLink>
			<Details>
				<NextLink
					href="/[userName]/[postTitle]"
					as={`/${post.authorName}/${post.urlSlug}`}
					passHref
				>
					<Title>
						You have new comments on: <b>&quot;{post.title}&quot;</b>
					</Title>
				</NextLink>
			</Details>
			<LeftContent tw="ml-6">
				<UpdatedAt>{dayjs(notification.updatedAt).fromNow()}</UpdatedAt>
			</LeftContent>
		</Root>
	);
});

NotificationCardPostCommented.displayName = "NotificationCardPostCommented";