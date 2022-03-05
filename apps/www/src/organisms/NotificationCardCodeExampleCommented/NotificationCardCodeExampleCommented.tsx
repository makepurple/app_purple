import { Avatar, GitHubAvatarImage } from "@makepurple/components";
import { dayjs } from "@makepurple/utils";
import NextLink from "next/link";
import { useRouter } from "next/router";
import React, { CSSProperties, forwardRef } from "react";
import tw from "twin.macro";
import { NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment } from "../../graphql";
import { NotificationCardBase } from "../NotificationCardBase";

const StyledAvatar = tw(Avatar)`
	flex-shrink-0
	rounded-md
`;

const Details = tw.a`
	flex-grow
	flex
	flex-row
	items-center
`;

const Title = tw.span`
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

export interface NotificationCardCodeExampleCommentedProps {
	className?: string;
	notification: NotificationCardCodeExampleCommentedNotificationCodeExampleCommentedFragment;
	style?: CSSProperties;
}

export const NotificationCardCodeExampleCommented = forwardRef<
	HTMLDivElement,
	NotificationCardCodeExampleCommentedProps
>((props, ref) => {
	const { className, notification, style } = props;

	const router = useRouter();

	const codeExample = notification.codeExample;
	const primarySkill = codeExample.primarySkill;

	return (
		<NotificationCardBase
			ref={ref}
			className={className}
			onClick={async () => {
				await router.push(
					"/[userName]/snippets/[codeExampleTitle]",
					`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`
				);
			}}
			onMouseOver={async () => {
				await router.prefetch(
					"/[userName]/snippets/[codeExampleTitle]",
					`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`
				);
			}}
			style={style}
			unread={!notification.opened}
		>
			<NextLink
				href="/[userName]/snippets/[codeExampleTitle]"
				as={`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`}
				passHref
			>
				<StyledAvatar border={4} aria-label={codeExample.title ?? ""} tw="mr-6">
					<GitHubAvatarImage
						src={primarySkill.github.owner.avatarUrl}
						height={64}
						width={64}
					/>
				</StyledAvatar>
			</NextLink>
			<NextLink
				href="/[userName]/snippets/[codeExampleTitle]"
				as={`/${codeExample.authorName}/snippets/${codeExample.urlSlug}`}
				passHref
			>
				<Details>
					<Title>
						You have new comments on your snippet:{" "}
						<b>&quot;{codeExample.title}&quot;</b>
					</Title>
				</Details>
			</NextLink>
			<LeftContent tw="ml-6">
				<UpdatedAt>{dayjs(notification.updatedAt).fromNow()}</UpdatedAt>
			</LeftContent>
		</NotificationCardBase>
	);
});

NotificationCardCodeExampleCommented.displayName = "NotificationCardCodeExampleCommented";
