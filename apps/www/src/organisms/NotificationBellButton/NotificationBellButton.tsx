import { Button } from "@makepurple/components";
import { useSession } from "next-auth/react";
import NextLink from "next/link";
import React, { CSSProperties, FC } from "react";
import tw from "twin.macro";
import { useGetNotificationCountsQuery } from "../../graphql";
import { BellIcon } from "../../svgs";

const Root = tw(Button)`
	relative
	width[50px]
	height[50px]
	p-0
	border-gray-300
	text-black
	bg-transparent
`;

const NotificationCount = tw.span`
	absolute
	top-0
	right-0
	flex
	items-center
	justify-center
	h-6
	w-6
	border-2
	border-solid
	border-gray-200
	translate-x-1/3
	-translate-y-1/3
	bg-red-500
	text-white
	text-sm
	leading-none
	rounded-full
`;

export interface NotificationBellButtonProps {
	className?: string;
	style?: CSSProperties;
}

export const NotificationBellButton: FC<NotificationBellButtonProps> = ({ className, style }) => {
	const { status } = useSession();

	const [{ data }] = useGetNotificationCountsQuery({
		pause: status !== "authenticated",
		requestPolicy: "cache-first"
	});

	const count = data?.viewer?.newNotificationsCount ?? 0;

	if (status !== "authenticated") return null;

	return (
		<NextLink legacyBehavior href="/notifications" passHref>
			<Root as="a" className={className} style={style} type="button">
				<BellIcon height={24} width={24} />
				{!!count && <NotificationCount>{count}</NotificationCount>}
			</Root>
		</NextLink>
	);
};
